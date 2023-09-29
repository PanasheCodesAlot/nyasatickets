import HostEvent from './icons/hostEvent.svelte';
import Calender from './icons/calender.svelte';
import ORCode from './icons/ORcode.svelte';
import Bell from './icons/bell.svelte';
import Search from './icons/search.svelte';
import UserData from './icons/userData.svelte';
import Folders from './icons/folders.svelte';
import Lock from './icons/lock.svelte';
import Rocket from './icons/rocket.svelte'

export const data = [
	{
		section: 'Create',
		content: [
			{
				title: 'Host an event',
				icon: HostEvent,
				link: '/admin/newEvent'
			}
		]
	},
	{
		section: 'Home',
		content: [
			{
				title: 'Overview',
				icon: Rocket,
				link: '/admin/overview'
			},
			{
				title: 'Events',
				icon: Calender,
				link: '/admin/events'
			},
			{
				title: 'Tickets',
				icon: ORCode,
				link: '/admin/tickets'
			},
			{
				title: 'Notifications',
				icon: Bell,
				link: '/admin/notifications'
			},
			{
				title: 'Search',
				icon: Search,
				link: '/admin/searchResults'
			}
		]
	},
];
