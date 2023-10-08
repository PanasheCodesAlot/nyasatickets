<script>
	import { data } from './data';
	import { page } from '$app/stores';

	import { checkSession } from '../../resources/API';
	import { getUnreadNotifications } from '../../resources/API';

	import { onMount } from 'svelte';

	function getNotifications (email) {
		const request = getUnreadNotifications(email)

		request.then(data => {
			notifications = data.data
			notifRecieved = true
			console.log(notifications)
		})

	}

	function checkForSession () {
		const request = checkSession()
		request.then(data => {
			console.log(data)
			getNotifications(data.data.user?.email)
		})

	}

	function a () {	
		checkForSession()
	}

	const style = {
		title: `mx-4 text-sm`,
		section: `font-medium mb-4 pl-5 text-gray-500 text-lg lg:pl-6`,
		link: `flex items-center justify-start my-1 p-3 text-white w-full`,
		active: `border-white lg:border-red-300 border-l-4 lg:border-l-0 lg:border-r-4`
	};

	let notifications = []
	let notifRecieved = false

	onMount (() => {
		a()
	})
</script>

<ul class="mt-6 md:pl-6">
	<li>
		{#each data as { section, content } (section)}
			<div class="mb-10">
				<div class={style.section}>{section}</div>
				{#each content as item (item.title)}
					<a
						href={item.link}
						class={`${style.link} ${item.link === $page.url.pathname && style.active}`}
					>
						<span><svelte:component this={item.icon} /></span>
						<span class={style.title}>{item.title}</span>
						{#if item.title == 'Notifications'}
							{#if notifRecieved}
								{#if notifications.length > 0}
									<span class="notif-bubble">{notifications.length}</span>
								{/if}
								{:else}
									...
							{/if}
						{/if}
					</a>
				{/each}
			</div>
		{/each}
	</li>
</ul>

<style>
	.notif-bubble {
		padding: 5px;
		color: rgb(146 151 179 / 40%);
		border-radius: 40px;
		width: 40px;
		height: 40px;
		text-align: center;
	}
</style>
