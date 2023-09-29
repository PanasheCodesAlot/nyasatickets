<script>
	import Loader from "../../../../components/loadingAnimations/loader.svelte";
    import CaretLeft from "../../../../dashboard/sidebar/icons/caretLeft.svelte";
	import CaretRight from "../../../../dashboard/sidebar/icons/caretRight.svelte";

    //Navigation
    import { redirectTo } from "../../../../resources/API";
    import { getParameterByName } from "../../../../resources/API";

    //DB connection
    import { checkSession } from "../../../../resources/API";
    import { searchForEvent } from "../../../../resources/API";
    import { uploadTickets } from "../../../../resources/API";
    import { notify } from "../../../../resources/API";

    //Codes
    import { generateRandomString } from "../../../../resources/API";

    //From svelte
    import { onMount } from "svelte";

    const addItem = () => {
        if (desiredTickets < 6) {
            desiredTickets++
        }
    }

    const subtractItem = () => {
        if (desiredTickets > 0) {
            desiredTickets--
        }
    }

    //Checks if event is available through code
    async function checkForEvt (evtCode) {
        const request = await searchForEvent(evtCode)

        if (request.length != 1) {
            redirectTo ('../../')

        } else {
            event = request[0]
            loadingConditions.fetchDetails = true
        }
    }

    //Check if event code has been passed through URL
    const checkForCode = () => {
        const evtCode = getParameterByName('event', location.href)

        if (evtCode == null) {
            redirectTo ('../../')

        } else {
            checkForEvt(evtCode)
        }
    }

    //Creates multiple tickets
    async function makeTickets () {
        const tickets = []

        for (let i = 0; i < desiredTickets; i++) {
            const template = {
                event_details: event.event_details,
                code: generateRandomString(),
                ticket_for: user.email
            }

            tickets.push(template)
        }

        //Make tickets
        const request = await uploadTickets(tickets)

        //Notify
        notify(user.email, 'New tickets🎉!', `Where is the party at? You have created ${tickets.length} new tickets for ${JSON.parse(event.event_details).name}, ${JSON.parse(event.event_details).date}! However, you will have to pay for them to make them active. Only activated tickets are accepted when participating events`)
        redirectTo('../../admin/tickets')
    }

    async function checkForSession () {
        const request = await checkSession()
        if (request.data.user != null) {
			user = request.data.user
            checkForCode()
            

        } else {
			redirectTo('../../login?accessError=Sign in to use this feature')
		}
    }

    onMount (() => {
        checkForSession()
    })

    let desiredTickets = 1

    let loadingConditions = {
        fetchDetails: false
    }

    let event

    let user
</script>
<svelte:head>
    <title>Buy tickets</title>
</svelte:head>
{#if loadingConditions.fetchDetails}
<div class="text-center">
    <p class="text-lg">{JSON.parse(event.event_details).name}</p>
    <p class="text-md text-gray-400">{JSON.parse(event.event_details).date}</p>
</div>
<div class="price-con-outer mt-8">
    <div class="price-con-inner">
        <button class="caret" on:click={subtractItem}><CaretLeft /></button>
        <input type="number" class="item-amout" placeholder="Amount" bind:value={desiredTickets} readonly>
        <button class="caret" on:click={addItem}><CaretRight /></button>
    </div>
</div>
<p class="mt-5 text-center">MK {desiredTickets * (event.price + (event.price * 5 / 100))}</p>
{#if desiredTickets > 0 && desiredTickets < 5 && (event.target_amount - event.sold) >= desiredTickets}
<div class="price-con-outer mt-10">
    <div class="price-con-inner">
        <button class="rounded" on:click={makeTickets}>Make tickets</button>
    </div>
</div>
{/if}
{:else}
<Loader />
{/if}
<style>
    .price-con-outer {
        display: flex;
        justify-content: center;

    }

    .price-con-inner {
        width: 400px;
        display: flex;
    }


    button, input {
        padding: 1rem 1.5rem;
        width: 100%;
        display: flex;
        background-color: rgb(146 151 179 / 13%);
		border: none;
        margin: 0;
        outline: none;
        text-align: center;
    }

    .rounded {
        border-radius: 15px;
        text-align: center;
        background-color: rgb(146 151 179 / 40%);
    }

    .item-amout {
        background-color: rgb(146 151 179 / 20%);
        width: 60%;
    }

    .caret {
        width: 20%;
        border-radius: 15px;
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
    }

    .caret:last-child {
        border-radius: 0;
        border-top-right-radius: 15px;
        border-bottom-right-radius: 15px;

    }
</style>