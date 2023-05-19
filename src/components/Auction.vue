<template>
    <div class="bg-cover bg-center bg-no-repeat overflow-hidden rounded-lg" :style="{ backgroundImage: 'url(' + imageUrl + ')' }">
        <div class="flex  flex-col gap-14 p-2">
            <div class="flex justify-between items-center gap-3">

                <div class="flex items-center gap-1 bg-black p-2 rounded-md">
                    <i class="ri-timer-fill text-white"></i>
                    <span class="text-xs text-white font-semibold">1d 11h 44m 51s</span>
                </div>

                <div class="flex justify-center items-center flex-col">
                    <i class="ri-star-s-fill bg-black rounded-full p-1.5 text-white text-sm font-semibold"></i>
                </div>

            </div>

            <div class="flex flex-col justify-center items-center">
                <p class="text-black font-medium text-xl">{{ auction.content }}</p>
            </div>

            <div class="flex justify-between items-center bg-black rounded-md p-2">
                <div class="flex flex-col items-start gap-2">
                    <h6 class="text-sm text-gray-400 font-medium">Current bid</h6>
                    <div class="flex items-center gap-1">
                        <img :src="logo" alt="Cheetah White">
                        <span class="text-white font-semibold">252583</span>
                    </div>
                    <span class="text-gray-400 text-sm">Price: $1000</span>
                </div>

                <div class="flex justify-center items-center flex-col">
                    <router-link tag="li" class="uppercase bg-gray-300 rounded-md p-2 font-semibold text-black hover:!bg-gray-300 font-kinn" to="#">Place Bid</router-link>
                </div>
            </div>


        </div>
    </div>
</template>

<script>
import auctionBg from "../assets/auction_bg.png";
import cheetahWhite from  "../assets/cheetah-white.png"

export default {
    name: "Auction",
    props: {
        auction: {
            type: Object,
            required: true,
        }
    },

    data() {
        return {
            imageUrl: auctionBg,
            logo: cheetahWhite,
        }
    },

    methods: {

    },

    computed: {

    }
}

</script>

<style scoped>
</style>