<div class="load-con mt-10 mb-3">
    <div class="load-btn"></div>
    <div class="load-btn"></div>
    <div class="load-btn"></div>
</div>

<style>
    .load-con {
        width: 100%;
        display: flex;
        justify-content: center;
    }

    .load-btn {
        height: 30px;
        width: 30px;
        background-color: rgb(146 151 179 / 13%);
        animation: sparkle 1s infinite;
        margin-left: .5rem;
        border-radius: 50%;
    }

    .load-btn:nth-child(2) {
        animation-delay: .3s;
    }

    .load-btn:nth-child(3) {
        animation-delay: .6s;
    }


    @keyframes sparkle {
        0% {
            background-color: rgb(146 151 179 / 13%);

        } 50% {
            background-color: rgb(146 151 179 / 20%);

        } 100% {
            background-color: rgb(146 151 179 / 13%);
        }
    }

</style>