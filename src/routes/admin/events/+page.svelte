<script>
	//Loaders
	import Loader from "../../../components/loadingAnimations/loader.svelte";

	//DB Connections
	import { checkSession } from "../../../resources/API";
	import { getUserEvents } from "../../../resources/API";
	import { getAllEvents } from "../../../resources/API";

	//Navigation
	import { redirectTo } from "../../../resources/API";

	//From svelte
	import { onMount } from "svelte";

	//Get events for the user
	async function getEventsForUser (range) {
		loadingConditions.userEventsDisplay = false

		const request = await getUserEvents(user.email, range)
		const evtsFromRequest = request.data

		for (let i = 0; i < evtsFromRequest.length; i++) {
			const thisEvt = evtsFromRequest[i]
			userEvents.push(thisEvt)
		}

		userEvents = userEvents
		loadingConditions.userEventsDisplay = true
	}

	//Get all events
	async function getAllOfEvents (range) {
		loadingConditions.eventsDispaly = false

		const request = await getAllEvents(range)
		const evt_arr = request.data

		for (let i = 0; i < evt_arr.length; i++) {
			const thisEvt = evt_arr[i]
			events.push(thisEvt)
			
		}

		events = events
		loadingConditions.eventsDispaly = true
	}

    async function checkForSession () {
        const request = await checkSession()

        if (request.data.user != null) {
			user = request.data.user

			const userRange = {min: 0, max: 2}
			const allRange = {min: 0, max: 4}

			getEventsForUser(userRange)
			getAllOfEvents(allRange)

        } else {
			redirectTo('../../login?accessError=Sign in to use this feature')
		}
    }

	//Spawns more user events
	const getMoreUserEvts = () => {
		const range = {min: userEventCount, max: userEventCount * 2}
		getEventsForUser(range)

		userEventCount *= 2
	}

	//Spawns more events
	const getMoreEvts = () => {
		const range = {min: eventCount, max: eventCount * 2}
		getAllOfEvents(range)

		eventCount *= 2
	}

	//Redirects to view event
	const viewEvt = (evt) => {
		const url = `events/view/?event=${JSON.stringify(evt)}`
		redirectTo(url)
	}

	onMount (() => {
		checkForSession()
	})
	
	let loadingConditions = {
		userEventsDisplay: false,
		eventsDispaly: false
	}

	let user

	let userEvents = []

	let userEventCount = 3
	let eventCount = 5

	let events = []
</script>
<svelte:head>
    <title>Events</title>
</svelte:head>

{#if loadingConditions.userEventsDisplay}
<p class="text-lg">Your Events</p>
<div class="user-event-con mt-1">
	{#if userEvents.length > 0}
	{#each userEvents as event}
		<div class="p-4 user-event-details-con" on:click={() => {viewEvt (event)}}>
			<div>
				<div><p class="bold">{JSON.parse(event.event_details).name}</p></div>
				<p class="text-sm text-gray-400">{JSON.parse(event.event_details).date}</p>
			</div>
			<div>
				<div class="text-right">{event.sold} Sold</div>
				<p class="text-sm text-gray-400">
					MK {((event.price) + (event.price * 5 / 100)) * event.sold}
					{#if !event.veified}
					- Inactive
					{/if}
				</p>
			</div>
		</div>
	{/each}
	<div class="mt-5 mb-3 text-gray-400"><a on:click={getMoreUserEvts}>See more</a></div>
	{:else}
	<button class="custom-bg p-3 mt-5 mb-3" on:click={() => {redirectTo('../newEvent')}}>Create an event</button>
	{/if}
</div>
{:else}
<Loader />
{/if}

<p class="text-lg mt-10">Available events</p>
<div class="mt-8 rounded-2xl" style="background: rgb(146 151 179 / 13%)">
	<div class="container mx-auto">
		<div class="py-8">
			<div class="py-4">
				<div class="max-w-full overflow-x-auto rounded-lg">
					<table class="w-full leading-normal text-white">
						<thead>
							<tr>
								<th
									scope="col"
									class="
					px-5
					py-3
					border-b border-gray-200
					text-left text-sm
					uppercase
					font-normal
				  "
								>
									Event
								</th>
								<th
									scope="col"
									class="
					px-5
					py-3
					border-b border-gray-200
					text-left text-sm
					uppercase
					font-normal
				  "
								>
									Date
								</th>
								<th
									scope="col"
									class="
					px-5
					py-3
					border-b border-gray-200
					text-left text-sm
					uppercase
					font-normal
				  "
								>
									Price
								</th>
								<th
									scope="col"
									class="
					px-5
					py-3
					border-b border-gray-200
					text-left text-sm
					uppercase
					font-normal
				  "
								>
									Tickets
								</th>
								<th
									scope="col"
									class="
					px-5
					py-3
					border-b border-gray-200
					text-left text-sm
					uppercase
					font-normal
				  "
								/>
							</tr>
						</thead>
						<tbody class="text-white">
							{#if loadingConditions.eventsDispaly}
							{#each events as event}
							<tr>
								<td class="px-5 py-5 border-b border-gray-200 text-sm">
									<div class="flex items-center">
										<div class="ml-3">
											<p class="whitespace-no-wrap">{JSON.parse(event.event_details).name}</p>
										</div>
									</div>
								</td>
								<td class="px-5 py-5 border-b border-gray-200 text-sm">
									<p class="whitespace-no-wrap">{JSON.parse(event.event_details).date}</p>
								</td>
								<td class="px-5 py-5 border-b border-gray-200 text-sm">
									<p class="whitespace-no-wrap">{event.price + (event.price * 5 / 100)}</p>
								</td>
								<td class="px-5 py-5 border-b border-gray-200 text-sm">
									<p class="whitespace-no-wrap">{event.target_amount - event.sold}</p>
								</td>
								<td class="px-5 py-5 border-b border-gray-200 text-sm">
									<span class="text-indigo-600 hover:text-indigo-900" on:click={() =>{viewEvt(event)} }>View</span>
								</td>
							</tr>
							{/each}
							{:else}
							<tr><Loader /></tr>
							{/if}
						</tbody>
					</table>
					<div
						class="
			  px-5
			  py-5
			  flex flex-col
			  xs:flex-row
			  items-center
			  xs:justify-between
			"
					>
					{#if loadingConditions.eventsDispaly}
					<div class="mb-3 text-gray-400"><a on:click={getMoreEvts}>See more</a></div>
					{/if}
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
<style>
	.user-event-con {
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
	}

	.user-event-details-con {
		background-color: rgb(146 151 179 / 20%);
		width: 95%;
		margin-top: 1rem;
		cursor: pointer;
		transition: .5s;
		border-radius: 15px;
		display: flex;
		justify-content: space-between;
	}

	.user-event-details-con:hover {
		width: 100%;
	}


	.bold {
		font-weight: bold;
	}

	.custom-bg {
		background-image: linear-gradient(
			to left top,
			#cf4af3,
			#e73bd7,
			#f631bc,
			#fd31a2,
			#ff3a8b,
			#ff4b78,
			#ff5e68,
			#ff705c,
			#ff8c51,
			#ffaa49,
			#ffc848,
			#ffe652
		);
		width: 100%;
		border-radius: 15px;
	}
</style>