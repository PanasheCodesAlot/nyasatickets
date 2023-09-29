<script>
	import Loader from "../../../components/loadingAnimations/loader.svelte";

	//DB connections
	import { checkSession } from "../../../resources/API";
	import { getTickets } from "../../../resources/API";

	//Navigation
	import { redirectTo } from "../../../resources/API";

	//From Svelte
	import { onMount } from "svelte";

	let filters = {
		active: false,
		verified: false,
		expired: true
	}

	let loadingConditions =  {
		fetchDetails: false
	}

	let tickets = []

function hasExpired(dateString) {
  var currentDate = new Date();
  var expectedDate = new Date(dateString);

  if (currentDate > expectedDate) {
    return true;
  } else {
    return false;
  }
}


	const filter = (num) => {
		if (num == 0) {
			filters.expired = false
			filters.verified = true

		} else if (num == 1) {
			filters.expired = false
			filters.verified = false
			
		} else if (num == 2) {
			filters.expired = true
			filters.verified = false
			
		}

		const filtBtns = document.querySelectorAll('.filter-btns')
	
		for (let i = 0; i < filtBtns.length; i++) {
			filtBtns[i].classList.remove('active')
			
		}

		filtBtns[num].classList.add('active')
	}

	async function fetchTickets () {
		const request = await getTickets(user.email)
		tickets = request.data

		for (let i = 0; i < tickets.length; i++) {
			const thisTicket = tickets[i]
			const evtDetails = JSON.parse(thisTicket.event_details)
			const date = evtDetails.date

			thisTicket.expired = hasExpired(date) ? true : false
			console.log(thisTicket.expired, date)
		}

		console.log(tickets)
		loadingConditions.fetchDetails = true

	}


    async function checkForSession () {
        const request = await checkSession()
		
		console.log(request)

        if (request.data.user != null) {
			user = request.data.user
			fetchTickets()

        } else {
			redirectTo('../../login?accessError=Sign in to use this feature')
		}
    }

	const viewTicket = (ticket) => {
		const url = `./tickets/view?ticket=${ticket.code}`
		redirectTo(url)
	}

	onMount (() => {
		checkForSession()
		document.querySelector('#fil-btn').click()
	})

	let user

</script>

<svelte:head>
	<title>Tickets</title>
</svelte:head>

<div class="filters">
	<button class="filter-btns active" on:click={() => {filter(0)}}>Active</button>
	<button class="filter-btns" id="fil-btn" on:click={() => {filter(1)}}>Unverified</button>
	<button class="filter-btns" on:click={() => {filter(2)}}>Expired</button>
</div>
{#if loadingConditions.fetchDetails}
{#each tickets as ticket}
	{#if filters.verified && !filters.expired}
	{#if ticket.verified && !ticket.expired}
		<div class="p-4 user-event-details-con" on:click={() => viewTicket(ticket)}>
			<div>
				<p>{JSON.parse(ticket.event_details).name}</p>
				<p class="text-sm text-gray-400">{JSON.parse(ticket.event_details).date}</p>
			</div>
			<div class="bold">{ticket.code}</div>
		</div>
	{/if}
	{/if}
	{#if !filters.verified && !filters.expired}
	{#if !ticket.verified && !ticket.expired}
		<div class="p-4 user-event-details-con" on:click={() => viewTicket(ticket)}>
			<div>
				<p>{JSON.parse(ticket.event_details).name}</p>
				<p class="text-sm text-gray-400">{JSON.parse(ticket.event_details).date}</p>
			</div>
			<div class="bold">{ticket.code}</div>
		</div>
	{/if}
	{/if}
	{#if filters.expired}
	{#if ticket.expired}
		<div class="p-4 user-event-details-con" on:click={() => viewTicket(ticket)}>
			<div>
				<p>{JSON.parse(ticket.event_details).name}</p>
				<p class="text-sm text-gray-400">{JSON.parse(ticket.event_details).date}</p>
			</div>
			<div class="bold">{ticket.code}</div>
		</div>
	{/if}
	{/if}
{#if tickets.length < 1}
	<p class='bold'>Where's the party at?</p>
	<div>You dont have any tickets available. <a href="../events">Look for events</a> and make some tickets!!!!</div>
{/if}
{/each}
{:else}
<Loader />
{/if}
<style>
	.filters .active  {
		color: #ff8c51;
		border: 2px solid #ff8c51;;
	}

	.bold {
		font-weight: bold;
	}

	button, input {
    	padding: 1rem 1.5rem;
        width: fit-content;
        background-color: rgb(146 151 179 / 13%);
		border: none;
        margin: 0;
        outline: none;
		border-radius: 15px;
    }

	.user-event-details-con {
		background-color: rgb(146 151 179 / 20%);
		width: 100%;
		margin-top: 1rem;
		cursor: pointer;
		transition: .5s;
		border-radius: 15px;
		display: flex;
		justify-content: space-between;
	}
</style>