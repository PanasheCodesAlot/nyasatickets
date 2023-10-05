<script>
	import Ballon from "../dashboard/sidebar/icons/ballon.svelte"
	import Loader from "./loadingAnimations/loader.svelte";
	import Warning from "../dashboard/sidebar/icons/warning.svelte";

    //DB connection
    import { checkSession, redirectTo } from "../resources/API";
	import { getAllEvents } from "../resources/API";
	import { getTickets } from "../resources/API";

    //From svelte
    import { onMount } from "svelte";

	async function getUserTickets () {
		console.log(shows)
		if (user != null) {
			const request = await getTickets(user.email)
			const tcks = request.data

			tickets = tcks
			
			for (let i = 0; i < tickets.length; i++) {
				const thisTicket = tickets[i]
				const date = JSON.parse(thisTicket.event_details).date
				
				
				if (hasExpired(date)) {

					tickets.splice(i, 1)
					tickets = tickets
				}
				
			}

			if (tickets.length < 1) {
				tktError = 'What are you waiting for? Lets party!'
			}
			loadingConditions.tickets = true
			
		} else {
			tktError = 'Sign to use this feature'
			loadingConditions.tickets = true
		}
	}

	const viewEvt = (evt) => {
		const url = `../../../../../admin/events/view/?event=${encodeURIComponent(JSON.stringify(evt))}`
		console.log(url)
		redirectTo(url)
	}

	const viewTicket = (ticket) => {
		const url = `/admin/tickets/view?ticket=${ticket.code}`
		redirectTo(url)
	}

	async function getEvents () {
		const range = {min: 0, max: 5}
		const request = await getAllEvents(range)
		const evts = request.data

		shows = evts
		if (evts.length > 0) {
			mostApprovedShow = evts[0]
			evts.splice(0, 1)
			shows = evts

		} else {
			noEvt = true
		}

		getUserTickets()
		loadingConditions.availableEvents = true
		loadingConditions.mostApprovedShowDisplay = true

	}

    async function checkForSession () {
        const request = await checkSession()
        if (request.data.user != null) {
			user = request.data.user
        }

		getEvents()

    }

function hasExpired(dateString) {
  var currentDate = new Date();
  var expectedDate = new Date(dateString);

  if (currentDate > expectedDate) {
    return true;
  } else {
    return false;
  }
}

	onMount (() => {
		checkForSession()
	})

	let loadingConditions = {
		availableEvents: false,
		tickets: false,
		mostApprovedShowDisplay: false,
	}

	let mostApprovedShow = {}
	let shows = []
	let tickets = []
	let user
	let tktError = ''

	let noEvt = false


</script>

<div>
	{#if noEvt}
		<p class="text-center mt-3 mb-3 text-gray-400">No events at the moment</p>
	{/if}
	{#if loadingConditions.mostApprovedShowDisplay}
	<div
		class="flex flex-wrap md:flex-nowrap items-center justify-between w-full rounded-2xl py-6 px-12 custom-bg
      "
	>
		<div>
			<h3 class="flex items-center m-0 font-medium text-lg">
				<Ballon /><span class="ml-3">{JSON.parse( mostApprovedShow.event_details).name}</span>
			</h3>
			<div class="font-normal text-sm mt-4 mb-4 text-white overflow-hidden">
				{JSON.parse(mostApprovedShow.event_details).desc}
			</div>
			{#if mostApprovedShow.target_amount - mostApprovedShow.sold > 0}
				<button class="py-2 px-4 bg-blue-700 rounded-2xl" on:click={() => {viewEvt(mostApprovedShow)}}> Buy a ticket</button>
			{:else}
				<p class="text-gray-200">Sold out</p>
			{/if}
		</div>
	</div>
	{:else}
	<Loader />
	{/if}
	{#if shows.length > 0}
	<div class="mt-6 mb-3 text-gray-400">Available events</div>
	{#if loadingConditions.availableEvents}
	<div class="p-4 font-normal rounded-2xl" style="background-color: rgb(146 151 179 / 13%)">
		{#each shows as event}
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
	</div>
	{:else}
	<Loader />
	{/if}
	{/if}
	<div class="mt-6 mb-3 text-gray-400">Tickets</div>
	{#if loadingConditions.tickets}
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
										ID
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
										expires
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
										Verification
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
								{#each tickets as ticket}
								<tr>
									<td class="px-5 py-5 border-b border-gray-200 text-sm">
										<div class="flex items-center">
											<div class="ml-3">
												<p class="whitespace-no-wrap">{JSON.parse(ticket.event_details).name}</p>
											</div>
										</div>
									</td>
									<td class="px-5 py-5 border-b border-gray-200 text-sm">
										<p class="whitespace-no-wrap">{ticket.code}</p>
									</td>
									<td class="px-5 py-5 border-b border-gray-200 text-sm">
										<p class="whitespace-no-wrap">{JSON.parse(ticket.event_details).date}</p>
									</td>
									<td class="px-5 py-5 border-b border-gray-200 text-sm">
										<span
											class="
                          relative
                          inline-block
                          px-3
                          py-1
                          font-semibold
                          leading-tight
                        "
										>
											<span
												aria-hidden="true"
												class="
                            absolute
                            inset-0
                            bg-green-200
                            opacity-50
                            rounded-full
                          "
											/>
											<span class="relative">
												{#if ticket.verified}
													<span style='color: #186F65'>Verified</span>
												{:else}
													<span style='color: #C70039'>Unverified</span>
												{/if}
											</span>
										</span>
									</td>
									<td class="px-5 py-5 border-b border-gray-200 text-sm">
										<span class="text-indigo-600 hover:text-indigo-900" on:click={() => {viewTicket(ticket)}}> Get OR</span>
									</td>
								</tr>
								{/each}
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
						{#if tktError.length > 0}
						<div class="text-center p-2 err-banner mt-6 mb-3">
							<div class="obj-center"><Warning /></div>
							<p class="text-center mt-3" on:click={() => {redirectTo('../../../login')}}>{tktError}</p>
							<a href='../../login' class="text-gray-200">Get a free account</a>
						</div>
						{/if}
					</div>
			</div>
		</div>
	</div>
</div>
</div>
{:else}
<Loader />
	{/if}
</div>

<style>
	.custom-bg {
		background-image: linear-gradient(
			to right top,
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
	}

	.err-banner {
		width: 385px;
		padding: 15px;
		border-radius: 15px;
		background: rgb(146 151 179 / 13%);
	}

	.obj-center {
		display: flex;
		justify-content: center;
		width: 100%;
	}
</style>
