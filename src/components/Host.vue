<template>
    <section class="py-10 lg:py-20">
        <div class="host-bg py-10 px-7 grid grid-cols-1 lg:grid-cols-2 gap-4 border-[1px] border-transparent overflow-hidden">
            <div class="flex flex-col justify-start items-start gap-4">
                <img :src="imageUrl" alt="icon">
                <h3 class="font-kinn text-2xl lg:text-3xl font-semibold">Host projects with your unique and exotic domain name</h3>
                <p class="text-sm text-gray-300 font-kinn">Benefit from the power of decentralization by hosting your favorite website or app with your personal domain. Think Google, but Web 3.0, uncensorable and 100% private ownership.</p>
                <router-link tag="li" to="#" class="flex gap-4 text-purple-800 hover:border-b-2 hover:border-purple-800">
                    <span class="text-purple-800 font-kinn text-lg">Learn more</span>
                    <i class="text-purple-800 ri-arrow-right-line text-lg font-semibold font-kinn"></i>
                </router-link>
            </div>

            <div class="flex flex-col justify-center items-center">
                <img :src="hostUrl" alt="host-img">
            </div>

        </div>

    </section>
    
</template>

<script>
    import globe from "../assets/globe.svg";
    import hostImg from "../assets/host-img.svg";

    export default {
        name: "Host",
        data(){
            return {
                imageUrl: globe,
                hostUrl: hostImg,
            }
        }
    }

</script>

<style scoped>
    .host-bg {
        background: rgba(199, 139, 139, 0.1);
        background-clip: padding-box;
        border-image-slice: 1;
        border-image-source: linear-gradient(90.91deg, #9CA3AF 8.07%, #F70085 47.44%);
        border-radius: 0.5rem;
    }


</style>