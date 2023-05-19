<template>
    <section class="hidden bg-cover bg-center bg-no-repeat h-screen my-10 flex flex-col justify-center items-center" :style="{ backgroundImage: 'url(' + imageUrl + ')' }">

        <div class="flex justify-center items-center flex-col-reverse p-2 my-10">
            <h3 class="text-white text-3xl lg:text-5xl font-medium font-kinn">Partners</h3>
        </div>

        <div class="py-6">
            <div v-if="!isMobile" class="lg:max-w-[80%] lg:mx-auto grid grid-cols-1 lg:grid-cols-4 gap-4">
                <div class="border-[1px] border-white rounded-3xl p-3 flex flex-col justify-center items-center" v-for="i in 12" :key="i">
                    <img src="https://res.cloudinary.com/daniel23/image/upload/v1683772491/main-logo_kr5qrb.png">
                </div>
            </div>

                <swiper
                    :direction="'vertical'"
                    :pagination="{
                        clickable: true,
                    }"
                    :modules="modules"
                    v-if="isMobile">

                    <swiper-slide v-for="i in 12" :key="i">
                        <div class="border-[1px] border-white rounded-3xl p-3 flex flex-col justify-center items-center" >
                            <img src="https://res.cloudinary.com/daniel23/image/upload/v1683772491/main-logo_kr5qrb.png">
                        </div>
                    </swiper-slide>
            </swiper>


        </div>
    </section>

</template>

<script>

      // Import Swiper Vue.js components
    import { Swiper, SwiperSlide } from 'swiper/vue';
    import { Pagination } from 'swiper';
    import partnerBg from "../assets/partner_bg.png";

    export default {
        name: "Partners",
        data() {
            return {
                modules: [ Pagination ],
                imageUrl: partnerBg
            }
        },
        components: {
            Swiper,
            SwiperSlide,
        },
        computed: {
            isMobile() {
                return window.matchMedia('(max-width: 768px)').matches
            }
        },

        mounted() {
            if(this.isMobile){

            }
        }
    }

</script>