<script>
	//Loader animations
	import Loader from "../../../components/loadingAnimations/loader.svelte";

	//DB connections
	import { checkSession } from "../../../resources/API";
	import { createEventForUser } from "../../../resources/API";
	import { notify } from "../../../resources/API";

	//Navigation
	import { redirectTo } from "../../../resources/API";

	//Validation
	import { isValidInput } from "../../../resources/inputChecking";

	//Cookies
	import { getCookie } from "../../../resources/cookies";
	import { setCookie } from "../../../resources/cookies";

	//From svelte
	import { onMount } from "svelte";

	//Check if user is logged in. Else redirect to homepage
    async function checkForSession () {
        const request = await checkSession()
		
		console.log(request)

        if (request.data.user != null) {
			user = request.data.user
			loadingCondtions.createEvent = true

        } else {
			redirectTo('../../login?accessError=Sign in to use this feature')
		}
    }

	async function establishEvent () {
		//Establishing a new event
		loadingCondtions.requestForCreation = true

		const request = await createEventForUser (
			user.email,
			inputs.name,
			inputs.location,
			inputs.desc,
			inputs.date,
			inputs.time,
			inputs.amount,
			inputs.price,
			inputs.airtelMoney,
			inputs.mpamba
		)

		if (request.error == null) {
			const title = 'New Event🎈!'
			const message = `${inputs.name} has been created (${inputs.date})! However, for other users to buy tickets for it, we will have to verify. We might send emails to your adress. The verification process takes about a day`

			const notifyRequest = await notify (
				user.email,
				title,
				message
			)

			redirectTo('../admin/events')

		} else {
			accessError.status = true
			accessError.text = 'Cannot create event. Try again later'
			loadingCondtions.requestForCreation = false

			console.log(request.error)
		}
	}

	//Checks for input erroes
	const clearNeccesaryInputs = () => {
		const showError = () => {
			accessError.status = true
			accessError.text= 'Incomplete details'
		}

		//Hiding error DIV
		accessError.status = false

		//Name and location
		if (steps == 1) {
			const validateName = isValidInput(inputs.name)
			const validateLocation = isValidInput(inputs.location)

			if (
				validateName.isValid && validateLocation.isValid
			) {
				return true
			} else {
				showError()
				return false
			}
		}

		//Description
		if (steps == 2) {
			const validateDescription = isValidInput(inputs.desc)

			if (
				validateDescription.isValid
			) {
				return true
			} else {
				showError()
				return false
			}
		}

		//Price and amount
		if (steps == 3) {

			if (
				inputs.amount > 0 && inputs.amount > 0
			) {
				return true
			} else {
				showError()
				return false
			}
		}	

		//Date and time
		if (steps == 4) {
			const validateDate = isValidInput(inputs.date)
			const validateTime = isValidInput(inputs.time)

			if (
				validateDate.isValid && validateTime.isValid
			) {
				return true
			} else {
				showError()
				return false
			}
		}
		
		//Payment gateway
		if (steps == 5) {
			if (
				inputs.airtelMoney > 100000000 || inputs.mpamba > 100000000
			) {
				const gateways = {
					airtelMoney: inputs.airtelMoney,
					mpamba: inputs.mpamba
				}

				setCookie('payemnt_gateways', JSON.stringify(gateways), 180)
				
			} else {
				accessError.status = true
				accessError.text = 'Complete atleast one gateway'
			}
		}

		establishEvent()
		return true
	}

	const addStep = () => {
		if (clearNeccesaryInputs()) {
			if (steps < 5) {
				steps++
			}
		}

		
	}

	const subtractStep = () => {
		if (steps > 1) {
			steps--
		}
	}

	const getGateways = () => {
		let gateways = getCookie('payemnt_gateways')

		if (gateways != null) {
			gateways = JSON.parse(gateways)

			inputs.airtelMoney = gateways.airtelMoney
			inputs.mpamba = gateways.mpamba
		}
	}

	onMount (() => {
		checkForSession()
		getGateways()
	})

	//User
	let user

	let steps = 1
	let accessError = {
        status: false,
        text: ''
    }
	let inputs = {
		name: '',
		location: '',
		desc: '',
		amount: '',
		price: '',
		time: '',
		date: '',
		airtelMoney: '',
		mpamba: ''
	}

	let loadingCondtions = {
		createEvent: false,
		requestForCreation: false

	}
</script>

<svelte:head>
	<title>Create an event</title>
</svelte:head>
<div class="container">
	<div class="form-con">
		<div class="text-con">
			<div class="hd-text">Create a new event</div>
			<div class="mt-1 mb-3 text-gray-400">
				{#if steps == 1}
					Lets celebrate!
				{:else if steps == 2}
					Help your audience understand
				{:else if steps == 3}
					How much exactly?
				{:else if steps == 4}
					Date and time
				{:else if steps == 5}
					Choose a payment gateway
				{/if}
			</div>
		</div>
		{#if accessError.status}
		<button class="error" on:click={() => {accessError.status = false}}>{accessError.text}</button>
		{/if}
		{#if loadingCondtions.createEvent}
		{#if steps == 1}
			<div class="mt-3"><input type="text" placeholder="Name of event" bind:value={inputs.name}></div>
			<div class="mt-3"><input type="text" placeholder="Location" bind:value={inputs.location}></div>
		{:else if steps == 2}
			<div class="mt-3"><textarea placeholder="Description" bind:value={inputs.desc}></textarea></div>
		{:else if steps == 3}
			<div class="mt-3"><input type="number" placeholder="Amount of audience" bind:value={inputs.amount}></div>
			<div class="mt-3"><input type="number" placeholder="Cost per ticket" bind:value={inputs.price}></div>
			<div class="mt-1 text-con mb-3 text-gray-400">Cost of one ticket with interest: MK {inputs.price + (5 * inputs.price / 100)}</div>
		{:else if steps == 4}
			<div class="mt-3"><input type="time" bind:value={inputs.time}></div>
			<div class="mt-3"><input type="date" placeholder="Date" bind:value={inputs.date}></div>
		{:else if steps == 5}
		<div class="mt-3"><input type="number" placeholder="Airtel money mobile" bind:value={inputs.airtelMoney}></div>
		<div class="mt-3"><input type="number" placeholder="Mpamba mobile" bind:value={inputs.mpamba}></div>
		{/if}
		{#if !loadingCondtions.requestForCreation}
		<button class="mt-3" on:click={addStep}>
			{#if steps == 5}
				Establish
			{:else}
				Next
			{/if}
		</button>
		{:else}
		<Loader />	
		{/if}
		{#if steps > 1}
		<button class="mt-2" on:click={subtractStep}>Back</button>	
		{/if}
		{:else}
		<Loader />
		{/if}
	</div>
</div>

<style>
	.form-con {
		width: 400px;
	}

	.container {
		display: flex;
		justify-content: center;
	}

	input, textarea {
        padding: 1rem 1.5rem;
        background-color: rgb(146 151 179 / 20%);
        border-radius: 15px;
    }

	
	input, button, textarea {
        border: none;
        margin: 0;
        outline: none;
		width: 100%;
    }

    button {
        padding: 1rem 1.5rem;
        width: 100%;
        background-color: rgb(146 151 179 / 40%);
        border-radius: 15px;
    }

	textarea {
		height: 20rem;
	}

	.mt-3 {
		margin-top: 1rem;
	}

	.mt-2 {
		margin-top: .5rem;
	}

	.hd-text {
		font-size: 2rem;
	}

	.text-con {
		text-align: center;
	}

    .error {
        background: rgba(145 16 16 / 70%);
        margin-bottom: 1.5rem;
    }
</style>
