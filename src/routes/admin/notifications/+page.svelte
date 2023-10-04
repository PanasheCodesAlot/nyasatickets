<script>
	//Db connections
	import { getNotifications } from "../../../resources/API";
	import { checkSession } from "../../../resources/API";
	import { viewAllNotifications } from "../../../resources/API";
	
	//Navigation
	import { redirectTo } from "../../../resources/API";

	//Loading animations
	import Loader from "../../../components/loadingAnimations/loader.svelte";
	import { onMount } from "svelte";

	//Sets all notifications to viewed
	async function setAllNotifsToViewed() {
		const request = await viewAllNotifications(user.email)

		console.log(request)
	}

	//Get all notifications
	async function getAllNotifs () {
		const request = await getNotifications(user.email)
		notifs = request.data?.reverse()
		loadingCondtions.fetchNotifs = true

		setAllNotifsToViewed()
		
	}
	
	//Extract date from time and date string
	function extractDate (dateString) {
		const date = dateString.substring(0, 10);
		return date
	}

    async function checkForSession () {
        const request = await checkSession()
		
		console.log(request)

        if (request.data.user != null) {
			user = request.data.user
			getAllNotifs()

        } else {
			redirectTo('../../login?accessError=Sign in to use this feature')
		}
    }

	onMount (() => {
		checkForSession()
	})

	let user
	let notifs = []
	let loadingCondtions = {
		fetchNotifs: false
	}
</script>

<svelte:head>
	<title>Notifications</title>
</svelte:head>

{#if loadingCondtions.fetchNotifs}
<div class="notifs">
	{#each notifs as notif}
	<div class="notifcon p-4 mt-3">
		<div>
			<div class="notifcon-inner">
				<p>
					<strong>{notif.title}</strong>
					{#if notif.viewed == false}
					<span class="text-gray-400">- New</span>
					{/if}
				</p>
				<p class="desc">{notif.message}</p>
			</div>
			<div class='mt-3'><p class="text-gray-400"><strong>{extractDate(notif.created_at)}</strong></p></div>
		</div>
		<p class="mt-5 text-gray-400">NyasaTickets Team</p>
	</div>
	{/each}
</div>
{:else}
<Loader />
{/if}
<style>
	.notifcon {
		background-color: rgb(146 151 179 / 20%);
		width: 95%;
		margin-top: 1rem;
		cursor: pointer;
		transition: .5s;
		border-radius: 15px;
	}

	.notifcon-inner {
		display: flex;
		justify-content: space-between;
		overflow: hidden;
	}

	.rd-more {
		color: #ff8c51;
	}
</style>
