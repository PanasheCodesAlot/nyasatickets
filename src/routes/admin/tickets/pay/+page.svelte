<script>
    import Cart from "../../../../dashboard/sidebar/icons/cart.svelte";
    import Whatsapp from "../../../../dashboard/sidebar/icons/whatsapp.svelte";
    import Mail from "../../../../dashboard/sidebar/icons/mail.svelte";
    import Square from "../../../../dashboard/sidebar/icons/square.svelte";
    import Checked from "../../../../dashboard/sidebar/icons/checked.svelte";

    //From DB
    import { checkSession } from "../../../../resources/API";
    import { getTickets } from "../../../../resources/API";

    //Navigation
    import { redirectTo } from "../../../../resources/API";
    import { getParameterByName } from "../../../../resources/API";

    //From svelte
    import { onMount } from "svelte";

    function hasExpired(dateString) {
        var currentDate = new Date();
        var expectedDate = new Date(dateString);

        if (currentDate > expectedDate) {
            return true;
        } else {
            return false;
        }
    }  
    
    function geneWhatsappLink () {
        const message = `*Hello HeavyAtom!*\n\nI would like to verify my NyasaTicket(s): \n*${selTickets.join('*\n*')}*\n\nThis is my email: ${user.email}`
        const encodeMessage = encodeURIComponent(message)
        const url = `https://api.whatsapp.com/send?phone=265882585162&text=${encodeMessage}`

        const link = document.createElement('a')
        link.href = url
        link.target = 'blank'

        link.click()
    }

    function geneEmailLink () {
        const recipient = 'heavyatomtech@gmail.com'
        const subject = 'Verify NyasaTickets'
        const message = `Hello HeavyAtom!\n\nI would like to verify my NyasaTicket(s): \n${selTickets.join('\n')}\n\nThis is my email: ${user.email}`
        const url = `mailto:${encodeURIComponent(recipient)}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`

        const link = document.createElement('a')
        link.href = url
        link.target = 'blank'

        link.click()
    }

    function configTickets (code, boolMethod) {
        if (boolMethod) {
            selTickets.push (code)

        } else {
            const index = selTickets.findIndex(tkt => {return tkt == code})
            selTickets.splice(index, 1)
        }

        selTickets = selTickets
    }

    function clearTkts () {
        let verifTickets = []

        for (let i = 0; i < tickets.length; i++) {
            const tkt = tickets[i]
            const date = JSON.parse(tkt.event_details).date
            const verified = tkt.verified
            const code = tkt.code

            //Check for expiry and verification
            if (
                !hasExpired(date) &&
                !verified &&
                code != selTickets[0]
                ) {
                
                tkt.sel = false
                verifTickets.push(tkt)
                
            }
            
        }
        
        tickets = verifTickets
    }

    async function getVerifTickets() {
        const request = await getTickets(user.email)

        if (request.error != null) {
            redirectTo('../../../login?accessError=Sign in to use this feature')

        } else {
            tickets = request.data
            clearTkts()
        }
    }

    async function checkForSession () {
        const request = await checkSession()
        if (request.data.user != null) {
			user = request.data.user
            getVerifTickets()

        } else {
			redirectTo('../../../login?accessError=Sign in to use this feature')
		}
    }

    function checkForURLTicket() {
        const ticket = getParameterByName('ticket')

        if (ticket != null) {
            selTickets.push(ticket)
            selTickets = selTickets

        } else {
            redirectTo('../../../login?accessError=Ticket error')
        }
    }

    onMount (() => {
        checkForSession()
        checkForURLTicket()
    })

    let selTickets = []
    let user
    let tickets = []

</script>

<div class="con">
    <div class="inner-con">
        <div class="cart-con">
            <Cart />
            <div class="ml-3">
                <div class="text-lg">Check out</div>
                <div class='text-gray-400'>Choose a negotiation method</div>
            </div>
        </div>
        <p class="tkt-text mt-5">Ticket(s): {selTickets.join(', ')}</p>
        <div class="mt-6"><button class="w-btn" on:click={geneWhatsappLink}>
            <Whatsapp />
           <span class="ml-3"> Pay through Whatsapp</span>
        </button></div>
        <div class="mt-3"><button on:click={geneEmailLink}>
            <Mail />
            <span class="ml-3"> Pay through Email</span>
        </button></div>
        <p class="text-gray-400 mt-10">Other tickets</p>
                {#if tickets.length > 0}
                    {#each tickets as ticket}
                        <div class="mt-3">
                            <button on:click={() => {
                                ticket.sel = !ticket.sel
                                configTickets(ticket.code, ticket.sel)
                                }}>
                                {#if ticket.sel}
                                    <Checked />
                                {:else}
                                    <Square />
                                {/if}
                                <div class="ml-5">
                                    <span>{JSON.parse(ticket.event_details).name}</span>
                                    <span class="text-gray-400 ml-1">{JSON.parse(ticket.event_details).date}</span>
                                </div>
                            </button>
                        </div>
                    {/each}
                
                {:else}
                    <p>Hmmmm. You dont have anymore tickets</p>
                {/if}
    </div>
</div>

<style>
    button {
        padding: 1rem 1.5rem;
        width: 100%;
        display: flex;
        background-color: rgb(146 151 179 / 13%);
		border: none;
        margin: 0;
        outline: none;
        text-align: center;
        border-radius: 15px;
    }

    .cart-con {
        display: flex;
        justify-content: left;
    }

    .con {
        width: 100%;
        display: flex;
        justify-content: center;
    }


    .inner-con {
        width: 400px;
    }

    .tkt-text {
        text-align: center;
        font-weight: bold;
    }

    .bold {
        font-weight: bold;
    }

</style>