<script>
	import Loader from "../../../components/loadingAnimations/loader.svelte";

	//DB connections
	import { searchForEvent } from "../../../resources/API";
	import { getAllEvents } from "../../../resources/API";

	//Navigation
	import { redirectTo } from "../../../resources/API";
    import { getParameterByName } from "../../../resources/API";

	//From Svelte
	import { onMount } from "svelte";

	let evtType

	let sQuery

	let pauseTimeout = setTimeout(() => {
		console.log('Hello there! You arent supposed to be here')
	}, 1000);

	let loadingConditions = {
		query: false
	}

	let events = []


	const changeEvtTypes = () => {
		let types = ['Name', 'Code', 'Date']
		let index = 0

		const change = () => {
			evtType = types[index]
			index++

			if (index == types.length) {
				index = 0
			}

			setTimeout(change, 3000)
		}

		change()

	}

	//Determines wheater user has finishes typing or not
	const determinePause = () => {
		clearTimeout(pauseTimeout)

		pauseTimeout = setTimeout(() => {
			beginSearch()
		}, 500);
	}

	//Redirects to view event
	const viewEvt = (evt) => {
		const url = `events/view/?event=${JSON.stringify(evt)}`
		redirectTo(url)
	}

	//Begins search
	async function beginSearch () {
		loadingConditions.query = false

		if (sQuery == '') {
			getEvents()
			return
		}

		const request = await searchForEvent(sQuery)
		const evts = request

		events = evts
		loadingConditions.query = true
	}

	//Gets some events onload
	async function getEvents() {
		const request = await getAllEvents({min: 0, max: 10})
		events = request.data
		loadingConditions.query = true
	}

	//Checks for query o url
	function checkForURLQuery() {
		const q = getParameterByName('q', location.href)

		if (q != null) {
			sQuery = q
			beginSearch()
		} else {
			getEvents()
		}
	}

	onMount (() => {
		changeEvtTypes()
		checkForURLQuery()
	})

</script>
<svelte:head>
    <title>Search: {sQuery}</title>
</svelte:head>
<div><input type="text" bind:value={sQuery} on:keyup={determinePause} placeholder="Search for events by {evtType}"></div>
{#if loadingConditions.query}
<div class="p-4 font-normal rounded-2xl mt-8" style="background-color: rgb(146 151 179 / 13%)">
	{#each events as event}
	<div class="flex justify-end pb-2 mb-6 border-b border-gray-600">
		<div class="mr-auto">
			{JSON.parse(event.event_details).name}
			<span class='text-gray-400 text-sm'>{JSON.parse(event.event_details).date}</span>
			<span class='text-white text-sm'>{event.target_amount - event.sold} Left</span>
		</div>
		<div class="ml-auto flex">
			<div>
				<button
					class="
			border-gray-500
			rounded-full
			px-5
			py-1
			border
			text-gray-500
		  "
				on:click={() => {viewEvt(event)}}
				>
					View
				</button>
			</div>
		</div>
	</div>
	{/each}
	<p class="text-gray-300 text-center">Found {events.length} result(s)</p>
</div>
{:else}
<Loader />
{/if}

<style>

	input {
        padding: 1rem 1.5rem;
        width: 100%;
        background-color: rgb(146 151 179 / 40%);
        border-radius: 15px;
		border: none;
        margin: 0;
        outline: none;
    }
</style>
