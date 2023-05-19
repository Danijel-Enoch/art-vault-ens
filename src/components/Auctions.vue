<template>
    <section class="py-10 lg:py-20">
        <div class="my-4">
            <div class="flex justify-between items-center p-2">
                <h3 class="text-white text-3xl lg:text-5xl font-medium font-kinn">Auctions</h3>
                <button class="text-lg text-white border-[1px] border-white rounded-3xl hover:!text-black hover:bg-gray-100 py-2 px-4 outline-none font-kinn">See all</button>
            </div>

            <div class="grid grid-cols-1 lg:grid-cols-4 gap-5 my-20">
                <Auction  v-for="auction in auctions" :key="auction.id" :auction="auction"/>
            </div>

        </div>
    </section>

</template>

<script>
    import Auction from './Auction.vue';

    export default {
        name: "Auctions",
        components: {
            Auction
        },
        data() {
            return {
                auctions: [
                    {
                        id: 1,
                        content: "cheetah.core"
                    },

                    {
                        id: 2,
                        content: "cheetah.arbi"
                    },

                    {
                        id: 3,
                        content: "cheetah.cadu"
                    },

                    {
                        id: 4,
                        content: "cheetah.zeta"
                    },
                ]
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