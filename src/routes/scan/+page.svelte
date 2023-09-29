<script>
    import { Html5QrcodeScanner } from "html5-qrcode/cjs";
    import { onMount, tick } from "svelte";
    import Loader from "../../components/loadingAnimations/loader.svelte";

    import { getTicketByCode } from "../../resources/API";
    import { verifyTicket } from "../../resources/API";
    import { notify } from "../../resources/API";

    const errOut = text => {
        accessError = text
        steps = 4
    }

    const reset = () => {
        location.href = location.href

    }

    async function notifyUser () {
        const request = await notify(
            ticket.ticket_for,
            'Your ticket has been used✂️!',
            `The ticket ${ticket.code} has been scanned and verified. It is inactive now`
            
        )

        steps++
    }

    async function verifyTkt() {
        const request = await verifyTicket(ticket.code)

        if (request.error == null) {
            notifyUser()
        }

    }

    async function searchCode () {
        steps++
        const request = await getTicketByCode(code)
        const ticketData = request.data

        if (ticketData != null) {
            if (ticketData.length == 1) {
                ticket = ticketData[0]
                verifyTkt()
            } else {
                errOut('Ticket does not exist')
            }
        } else {
            errOut('Network error')
        }
    }

    const setupScan = () => {
        const scanner = new Html5QrcodeScanner ('reader', {
            qrbox: {
                width: 400,
                height: 400
            },
            fps: 20
            },
            true)

        const success = result => {
            code = result
            console.log(code)

            searchCode()
        }
    
        const faliure = result => {
            console.log(result)
        }
    
        scanner.render(success, faliure)
    }

    onMount (() => {
        setupScan()
    })

    let steps = 1
    let code
    let ticket
    let accessError = ''
    $: width = steps * 100 / 3

    
</script>
<svelte:head>
    <title>Scan ticket</title>
</svelte:head>
<div id="animated-gradient mt-4 mb-5" class="animate-gradient" style="width: {width}%"></div>
{#if accessError.length > 0}
<p class="mt-5 mb-3 text-center err p-4">{accessError}</p>
<div class="mt-3"><button on:click={reset}>Restart scan</button></div>
{/if}
<p class="ml-4 text-gray-500">
    {#if steps == 1}
        Waiting for scan
    {:else if steps == 2}
        Accesing database
    {:else if steps == 3}
        Results are ready
    {/if}
</p>
<div class="info-con">
    <div class="info-con-inner">
        {#if steps == 1}
            <p class="phase text-center mt-10">Ticket scan</p>
            <p class="text-gray-400 text-center mt-4 mb-3">Inactive tickets may be scanned, however, they will not verify the existence and validity of your ticket. You will be rejected</p>
            <div id="reader"></div>
            <div class="mt-7"><input type="text" placeholder="Enter code instead" bind:value={code}></div>
            <div class="mt-2"><button on:click={searchCode}>Verify</button></div>
        {/if}
        {#if steps == 2}
            <Loader />
            <p class="text-center">Please wait. We are running a search through our database</p>
        {/if}
        {#if steps == 3}
            <div class="text-center p-4 mt-5 glass">
                <p class="bold">{JSON.parse(ticket.event_details).name}</p>
                <p>{JSON.parse(ticket.event_details).location}</p>
                <p class="text-gray-400 mb-10">{JSON.parse(ticket.event_details).date}</p>
                {#if ticket.verified}
                    <p class="green veri-bubble p-2">Verified</p>
                {:else}
                    <p class="red veri-bubble p-2">Unverified</p>
                {/if}
            </div>
            <div class="mt-3"><button on:click={reset}>Restart scan</button></div>
        {/if}
    </div>
</div>

<style>
  :root {
    --color-one: #cf4af3;
    --color-two: #e73bd7;
    --color-three: #f631bc;
    --color-four: #fd31a2;
    --color-five: #ff3a8b;
    --color-six: #ff4b78;
    --color-seven: #ff5e68;
    --color-eight: #ff705c;
    --color-nine: #ff8c51;
    --color-ten: #ffaa49;
    --color-eleven: #ffc848;
    --color-twelve: #ffe652;
  }

  .animate-gradient {
    background: linear-gradient(to right, var(--color-one), var(--color-two), var(--color-three), var(--color-four), var(--color-five), var(--color-six), var(--color-seven), var(--color-eight), var(--color-nine), var(--color-ten), var(--color-eleven), var(--color-twelve));
    background-size: 200% auto;
    animation: flow 10s linear infinite;
    width: 20%;
    height: 10px;
    border-radius: 15px;
    transition: .5s;
  }

  .phase {
    font-size: 1.5rem;
  }

  .bold {
    font-weight: bold;
    font-size: 1.5rem;
  }

  .info-con {
    width: 100%;
    display: flex;
    justify-content: center;
  }

  .info-con-inner {
    width: 400px;
  }


    button, input {
        padding: 1rem 1.5rem;
        width: 100%;
        background-color: rgb(146 151 179 / 40%);
        border-radius: 15px;
        border: none;
        margin: 0;
        outline: none;
		width: 100%;
    }

    input {
        background-color: rgb(146 151 179 / 13%); 
    }
    
    .glass {
        background-color: rgb(146 151 179 / 13%);
        border-radius: 15px;
        
    }
    
    .veri-bubble  {
        background-color: rgb(146 151 179 / 20%);
        width: fit-content;
        border-radius: 10px;
    }

    .red {
        color: rgba(243, 119, 119, 0.935);
    }

    .green {
        color: rgb(92, 195, 92);
    }

    .err {
        background: red;
        border-radius: 15px;
    }

  @keyframes flow {
    0% {
      background-position: 0% 50%;
    }
    100% {
      background-position: 100% 50%;
    }
  }


</style>

  