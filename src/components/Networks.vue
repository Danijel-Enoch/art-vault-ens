<template>
    <section>
        <div class="flex justify-center items-center gap-4">
            <h3 class="font-bold text-3xl lg:text-5xl font-kinn">Integrated</h3>
            <h3 class="font-bold text-3xl lg:text-5xl font-kinn text-purple-800">Networks</h3>
        </div>

        <div class="lg:max-w-[80%] lg:mx-auto grid grid-cols-2 lg:flex justify-center items-center lg:flex-row flex-col lg:flex-nowrap flex-wrap gap-8 lg:gap-6 my-10">
            <div v-for="(network, i) in networks" :key="i" class="flex flex-col gap-2 justify-center items-center p-2 rounded-md bg-[#0E0E0E]">
                <img :src="network.image" :alt="network.title" class="w-20 h-20">
                <h5 class="font-kinn font-semibold text-sm text-white">{{ capitalize(network.title) }}</h5>
            </div>
        </div>
    </section>

</template>

<script>
    
    import arbitrum from "../assets/arbitrum.png";
    import caduceus from "../assets/caduceus.png";
    import coredao from "../assets/coredao.png";
    import zetachain from "../assets/zetachain.png";


    export default {
        name: "Networks",
        data() {
            return {
                networks: [
                    {
                        id: 1, 
                        image: coredao,
                        title: "coredao"
                    },
                    
                    {
                        id: 2, 
                        image: caduceus,
                        title: "caduceus"
                    },
                    
                    
                    {
                        id: 3, 
                        image: zetachain,
                        title: "zetachain"
                    },

                    {
                        id: 4, 
                        image: arbitrum,
                        title: "arbitrum"
                    },
                ]
            }
        },

        methods: {
            capitalize(str) {
                return str.charAt(0).toUpperCase() + str.slice(1);
            }
        }

    }
</script>