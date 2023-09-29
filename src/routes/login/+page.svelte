<script>
	import { onMount } from "svelte";

    //Icons
    import AddUser from "../../dashboard/sidebar/icons/addUser.svelte";
    import HandWave from "../../dashboard/sidebar/icons/handWave.svelte";
    import User from "../../dashboard/sidebar/icons/user.svelte";

    //Navigation
    import { redirectTo } from "../../resources/API";
    import { getParameterByName } from "../../resources/API";

    //DB connections
    import { createUser } from "../../resources/API";
    import { logIn } from "../../resources/API";
    import { checkSession } from "../../resources/API";
    import { signOut } from "../../resources/API";

    //Input validation
    import { isValidEmail } from "../../resources/inputChecking";
    import { isValidInput } from "../../resources/inputChecking";
    import { isValidPassword } from "../../resources/inputChecking";

    //Cookies
    import { setCookie } from "../../resources/cookies";
    import { getCookie } from "../../resources/cookies";

    //Signing up
    async function signUp () {
        //Hide access error
        accessError.status = false
        
        //Validation
        const validateName = isValidInput(inputs.signUp.name)
        const validateEmail = isValidEmail(inputs.signUp.email)
        const validatePassword = isValidPassword(inputs.signUp.password)

        //Hiding error message
        accessError.status = false
        
        
        //Name
        if (!validateName.isValid) {
            accessError.status = true
            accessError.text = validateName.message
            return
        } 
        //Email
        if (!validateEmail.isValid) {
            accessError.status = true
            accessError.text = validateEmail.message
            console.log(validateEmail)
            return
        }
        //Passowrd
        if (!validatePassword.isValid) {
            accessError.status = true
            accessError.text = validatePassword.message
            return
        }

        const request = await createUser (
            inputs.signUp.name,
            inputs.signUp.email,
            inputs.signUp.password,
        )

        console.log(request)

        //When error occurs
        if (request.error != null) {
            accessError.status = true
            accessError.text = request.error.message
            
        } else {
            redirectTo ('/login/verify')
            
        }
    }

    //To sign in
   async function signIn () {
        //Save name and password
        setCookie('email', inputs.signIn.email, 180)
        setCookie('password', inputs.signIn.password)

        const request = await logIn(inputs.signIn.email, inputs.signIn.password)
        
        if (request.error != null) {
            accessError.status = true
            accessError.text = request.error.message
        } else {
            loggedIn = true
        }
    }

    //To sign out
    async function requestSignOut () {
        const request = await signOut()
        redirectTo('../')
    }

    async function checkForSession () {
        const request = await checkSession()
        
        console.log(request)
        if (request.data.user != null) {
            inputs.signIn.email = request.data.user.email
            loggedIn = true
        }
    }

    function checkForAccessError () {
        const error = getParameterByName('accessError')
        
        if (error != null) {
            accessError.status = true
            accessError.text = error
        }
    }

    const getCookieValues = () => {
        const emailCookie = getCookie('email')
        const passwordCookie = getCookie('password')

        if (emailCookie != null) {
            inputs.signIn.email = emailCookie
            inputs.signIn.password = passwordCookie
        }
    }

    //Onload activities
    onMount (() => {
        checkForSession()
        checkForAccessError()
        getCookieValues()
    })

    let inputs = {
        signIn: {
            email: '',
            password: ''
        },
        signUp: {
            name: '',
            email: '',
            password: ''
        }
    }

	let showLogIn = true
    let loggedIn = false
    let accessError = {
        status: false,
        text: 'Sign in to use feature'
    }
</script>
<svelte:head>
    <title>Login</title>
</svelte:head>
{#if !loggedIn}
<div class="form-con-outer">

    <div class="form-con-inner">
        <div class="header"><p class="nyasa-text">
            {#if showLogIn}
                <HandWave /> Sign in
            {:else}
            <AddUser /> Sign up
            {/if}
        </p></div>
        <div class="p-8 font-normal input-con" >
            {#if accessError.status}
            <button class="error" on:click={() => {accessError.status = false}}>{accessError.text}</button>
            {/if}
            {#if showLogIn}
                <input type="email" placeholder="Email" bind:value={inputs.signIn.email}>
                <div class="mt-3">
                    <input type="password" placeholder="Password"  bind:value={inputs.signIn.password}>
                    <p class="f-pass"><a href="/forgotpassword">Forgot password</a></p>
                </div>
                <button class="submit mt-3" on:click={signIn}>Sign in</button>
            {:else}
                <input type="text" placeholder="Full name" bind:value={inputs.signUp.name}>
                <input type="email" class="mt-3" placeholder="Email" bind:value={inputs.signUp.email}>
                <input type="password" class="mt-3" placeholder="Password"  bind:value={inputs.signUp.password}>
                <button class="submit mt-3" on:click={signUp}>Sign up</button>
            {/if}
            <p class="mt-3 change-form" on:click={() => {showLogIn = !showLogIn}}>
                {#if showLogIn}
                    <a>Create free account</a>
                {:else}
                    <a>Log in instead</a>
                {/if}
            </p>
        </div>
        
    </div>
</div>
{:else}
<div class="p-8 logged-in-panel">
    <div><User />{inputs.signIn.email}</div>
    <p>Online</p>
</div>
<div class="mt-3">
    <button on:click={requestSignOut}>Log out</button>
</div>
{/if}
<style>
    .form-con-outer {
        display: flex;
        justify-content: center;
    }

    .form-con-inner {
        width: 400px;
        border-radius: 3rem;
        overflow: hidden;
    }

    .input-con {
        background-color: rgb(146 151 179 / 13%);
    }

    .mt-3 {
        margin-top: 1rem;
    }

    .nyasa-text {
        display: flex;
    }

	.header {
        background-color: rgb(146 151 179 / 40%);
        height: 70px;
        text-align: center;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 1.3rem;
	}

    input, button {
        border: none;
        margin: 0;
        outline: none;
    }



    .f-pass {
        text-align: right;
    }

    .change-form {
        text-align: center;
    }

    .logged-in-panel {
        background: rgb(146 151 179 / 13%);
        display: flex;
        justify-content: space-between;
    }

    .logged-in-panel > div {
        display: flex;
    }

    .error {
        background: rgba(145 16 16 / 70%);
        margin-bottom: 1.5rem;
    }

    a {
        color: #ff8c51;
    }

    input {
        padding: 1rem 1.5rem;
        width: 100%;
        background-color: rgb(146 151 179 / 20%);
        border-radius: 15px;
    }

    button {
        padding: 1rem 1.5rem;
        width: 100%;
        background-color: rgb(146 151 179 / 40%);
        border-radius: 15px;
    }

</style>