<script>
    import Clock from "../../../../dashboard/sidebar/icons/clock.svelte";
	import Copy from "../../../../dashboard/sidebar/icons/copy.svelte";
	import Location from "../../../../dashboard/sidebar/icons/location.svelte";
	import Packaged from "../../../../dashboard/sidebar/icons/packaged.svelte";
	import Tag from "../../../../dashboard/sidebar/icons/tag.svelte";
	import Ticket from "../../../../dashboard/sidebar/icons/ticket.svelte";
	import Loader from "../../../../components/loadingAnimations/loader.svelte";

    //Navigation
    import { redirectTo } from "../../../../resources/API";
    import { getParameterByName } from "../../../../resources/API";

    //From svelte
    import { onMount } from "svelte";
	import { space } from "postcss/lib/list";

    onMount (() => {
        const evt = getParameterByName('event')
        
        if (evt == null) {
            redirectTo('../../')

        } else {
            const parsedEvt = JSON.parse(evt)
            console.log(parsedEvt)

            event = parsedEvt
            loadingConditions.fetchDetails = true
        }
    })

    const copyLink = () => {
        const elm = document.createElement('textarea')
        elm.value = location.href

        document.body.appendChild(elm)
        elm.select()

        document.execCommand('copy')
        document.body.removeChild(elm)

        loadingConditions.copied = true

        setTimeout(() => {
            loadingConditions.copied = false
        }, 1000);
    }

    const buyTickets = () => {
        const evt = getParameterByName('event')
        
        if (evt == null) {
            redirectTo('../../')

        } else {
            const parsedEvt = JSON.parse(evt)
            console.log(parsedEvt)

            event = parsedEvt
            redirectTo(`../tickets/buy?event=${JSON.parse(parsedEvt.event_details).evtCode}`)
        }
    }

    let event = {
        name: 'Blantyre Bash',
		location: 'Stadium, Blantyre',
		desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, rem earum? Unde cum rem minima, asperiores expedita similique quaerat voluptates, quos quidem nesciunt illo deleniti nisi eaque deserunt cumque sit.Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, rem earum? Unde cum rem minima, asperiores expedita similique quaerat voluptates, quos quidem nesciunt illo deleniti nisi eaque deserunt cumque sit.',
		amount: 200,
		price: 12000,
		time: '12:00',
		date: '12 Aug 2023',
		sold: 13,
        owned: true,
        verified: false,
    }

    let loadingConditions = {
        fetchDetails: false,
        copied: false
    }
</script>
{#if loadingConditions.fetchDetails}
<div>
    <p class="text-lg bold text-bold">{JSON.parse(event.event_details).name}</p>
    <p class="text-md mt-3 text-gray-400">{JSON.parse(event.event_details).desc}</p>
</div>
<div class="mt-8">
    <div class="detail"><Location /> <span class="ml-3">{JSON.parse(event.event_details).location}</span></div>
    <div class="detail mt-5"> <Clock /> <span class="ml-3">{JSON.parse(event.event_details).time}, {JSON.parse(event.event_details).date}</span></div>
    <div class="detail mt-5"> <Tag /> <span class="ml-3">MK {event.price + (event.price * 5 / 100)}</span></div>
    <div class="detail mt-5"> <Packaged /> <span class="ml-3">
        {event.sold} / {event.target_amount}
    </span></div>
</div>
{#if !event.veified}
    <p class="mt-8 bold">Unverified</p>
    <p class='text-sm text-gray-400'>We are verifying this event request. This usually takes about a day. Once reviewed, this event will be available to the public</p>
{:else}
<div class="mt-10 btn-con">
    <div class="mt-2"><button><Ticket /> <span class="ml-3" on:click={buyTickets}>Buy tickets</span></button></div>
    <div class="ml-3 mt-2"><button on:click={copyLink}><Copy /> <span class="ml-3">Copy link</span></button></div>
    {#if loadingConditions.copied}
    <span class="p-5 ml-1 text-gray-400">Copied!</span>
    {/if}
</div>
{/if}
{:else}
<Loader />
{/if}
<style>
    .btn-con {
        display: flex;
        flex-wrap: wrap;
    }
    .bold {
        font-weight: bold;
    }

    .detail {
        display: flex;
    }

	button {
        padding: 1rem 1.5rem;
        width: 100%;
        max-width: fit-content;
        display: flex;
        background-color: rgb(146 151 179 / 40%);
        border-radius: 15px;
		border: none;
        margin: 0;
        outline: none;
    }
</style>
