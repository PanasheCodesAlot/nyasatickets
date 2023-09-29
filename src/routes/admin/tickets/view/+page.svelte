<script>
	import Loader from "../../../../components/loadingAnimations/loader.svelte";
    import Copy from "../../../../dashboard/sidebar/icons/copy.svelte";

	//DB connections
	import { checkSession } from "../../../../resources/API";
	import { getTicketByCode } from "../../../../resources/API";
    import { deleteTicket } from "../../../../resources/API";

	//Navigation
	import { redirectTo } from "../../../../resources/API";
    import { getParameterByName } from "../../../../resources/API";

	//From Svelte
	import { onMount } from "svelte";
    
    async function delTicket () {
        const request = await deleteTicket(ticket.code)
        redirectTo('../../../../admin/tickets')
    }

    async function getTicket () {
        code = getParameterByName('ticket')

        if (code == null) {
            redirectTo('../../')

        } else {
            const request = await getTicketByCode (code)
            ticket = request.data

            if (ticket?.length < 0) {
                redirectTo('../../')

            } else {
                ticket = ticket[0]

                if (ticket.ticket_for != user.email) {
                    redirectTo('../../')

                } else {
                    url = `https://api.qrserver.com/v1/create-qr-code/?size=400x400&ecc=H&data=${code}`
                    loadingConditions.fetchDetails = true
                }
            }
        }
    }

function downloadQR() {
  fetch(url)
    .then(response => response.blob())
    .then(blob => {
      var url = URL.createObjectURL(blob);
      var link = document.createElement("a");
      link.href = url;

      link.download = `${(JSON.parse(ticket.event_details)).name} - ${(JSON.parse(ticket.event_details)).location}, ${(JSON.parse(ticket.event_details)).date}`;

      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    });
}

    async function checkForSession () {
        const request = await checkSession()
		
		console.log(request)

        if (request.data.user != null) {
			user = request.data.user
            getTicket()

        } else {
			redirectTo('../../login?accessError=Sign in to use this feature')
		}
    }
    
    const copyCode = () => {
        const copied = document.querySelector('#copied')
        const input = document.createElement('input')
        input.value = ticket.code

        document.body.appendChild(input)
        input.select()
        document.execCommand('copy')
        document.body.removeChild(input)

        copied?.classList.remove('d-hidden')
        
        setTimeout(() => {
            copied?.classList.add('d-hidden')
            
        }, 1000);

    }

    onMount (() => {
        checkForSession()
    })

    let ticket = {}

    let loadingConditions = {
        fetchDetails: false
    }

    let user
    let code = ''
    $: url = `https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${code}`
</script>
<svelte:head>
    <title>View tickets</title>
</svelte:head>
{#if loadingConditions.fetchDetails}
<div class="text-center">
    <p class="text-lg bold">{(JSON.parse(ticket.event_details)).name}</p>
    <p class="text-md text-gray-400">{(JSON.parse(ticket.event_details)).date}</p>
</div>
<div class="details-con mt-5">
    <div class="w-100">
        <div class="OR-con qr-code p-4">
            <img src={url} alt="">
        </div>
        <div class="w-100 mt-3"><button class="btn-flex"><Copy /> <span class="ml-3" on:click={copyCode}>{ticket.code}</span></button></div>
        <p class="text-gray-400 mt-3 mb-3 text-center d-hidden" id="copied">Copied!</p>
        <div class="w-100 mt-2"><button class="btn-flex" on:click={downloadQR}><span class="ml-3">Download</span></button></div>
        {#if !ticket.verified}
            <div class="w-100 mt-2"><button class="btn-flex" on:click={redirectTo(`./pay?ticket=${ticket.code}`)}><span class="ml-3">Pay</span></button></div>
            <div class="text-gray-400 text-center mt-3">This ticket is inactive</div>
        {:else}
        <div class="text-gray-400 text-center mt-3">Ticket is active</div>
        {/if}
        <div class="w-100 mt-10"><button class="btn-flex error" on:click={delTicket}><span class="ml-3">Delete</span></button></div>
    </div>
</div>
{:else}
<Loader />
{/if}
<style>
    .bold {
        font-weight: bold;
    }
    .details-con {
        display: flex;
        justify-content: center;
    }
    
    .OR-con {
        width: 100%;
        height: 350px;
        background-color: rgb(146 151 179 / 13%);
        border-radius: 15px;
    }

    .btn-flex {
        display: flex;
        justify-content: center;
    }
    .w-100 {
        width: 100%;
        width: 350px;
    }

    .d-hidden {
        display: none;
    }

	button {
        padding: 1rem 1.5rem;
        width: 100%;
        background-color: rgb(146 151 179 / 40%);
        border-radius: 15px;
		border: none;
        margin: 0;
        outline: none;
    }

    .error {
        background: rgba(145 16 16 / 70%);
    }
</style>