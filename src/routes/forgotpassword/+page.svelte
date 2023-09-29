<script>

    import Verify from "../../dashboard/sidebar/icons/verify.svelte";
    import Loader from "../../components/loadingAnimations/loader.svelte";

    import { isValidEmail } from "../../resources/inputChecking";
    import { forgotpassword } from "../../resources/API";

    async function sendEmail () {
        const validateEmail = isValidEmail(email)

        if (validateEmail.isValid) {
            const request = await forgotpassword(email)

            const deductWorkTime = () => {
                loadTime--

                if (loadTime == 0) {
                    loadingConditions.sendingLink = true
                    loadingConditions.waitForResend = false
                    loadTime = 60
                } else {
                    loadingConditions.waitForResend = true
                    loadingConditions.sendingLink = false
                    
                    setTimeout(() => {
                        deductWorkTime()
                    }, 1000);
                }
            }

            if (request.error != null) {
                loadingConditions.showSuccess = true
                
                setTimeout(() => {
                    loadingConditions.showSuccess = false
                    
                }, 3000);
            }

            deductWorkTime()

        } else {
            accessError = true
        } 
    }

    let loadTime = 60
    let email = ''
    let accessError = false
    const loadingConditions = {
        sendingLink: true,
        waitForResend: false,
        showSuccess: false
    }

</script>
<svelte:head>
    <title>Recover password</title>
</svelte:head>
<div class="con">
    <div class="input-con">
        <p class="text-lg bold mb-3">Forgotten password?</p>
        {#if accessError}
            <p class="err">Incorrect email</p>
        {/if}
        <Verify />
        <p class="mt-3 text-gray-400 mb-5">Enter your email. We will send a login link</p>
        <input type="text p-4" bind:value={email} placeholder="Email">
        <div class="mt-2">
            {#if loadingConditions.sendingLink}
                <button on:click={sendEmail}>Send link</button>
                {:else}
                <Loader />
            {/if}
            {#if loadingConditions.waitForResend}
                Retry in {loadTime} second(s)
                <p class="text-sm text-gray-400 text-center">Check your email</p>
            {/if}
        </div>
        <div class="mt-2">
            {#if loadingConditions.showSuccess}
                <p>Mail sent</p>
            {/if}
        </div>
    </div>
</div>
<style>

    .con, .input-con {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .bold  {
        font-weight: bold;
    }

    .input-con {
        width: 400px;
    }

    .err {
        color: rgb(223, 89, 89);
    }

    input, button {
        border: none;
        margin: 0;
        outline: none;
        background-color: rgb(146 151 179 / 13%);
		width: 100%;
        border-radius: 15px;
        padding: 1rem 1.5rem;
    }

    button {
        width: 100%;
        background-color: rgb(146 151 179 / 40%);
    }
</style>