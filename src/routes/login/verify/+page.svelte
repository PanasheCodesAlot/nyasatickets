<script>
	import Check from "../../../dashboard/sidebar/icons/check.svelte";

</script>
<svelte:head>
    <title>Verify your account</title>
</svelte:head>
<div class="container">
    <div class="panel p-4">
        <div class="check-con"><Check /></div>
        <p class="mt-5 text-center">Check your email. We have sent a verification link. Click it now and buy some tickets</p>
    </div>
</div>

<style>
    .container {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 80%;
    }

    .check-con {
        width: 100%;
        display: flex;
        justify-content: center;
    }
    .panel {
        border-radius: 15px;
        background-color: rgb(146 151 179 / 13%);
        width: 300px;
        
    }
</style>