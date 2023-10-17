<template>
  <footer class="pt-20">
    <section class="bg-[#0A0A0A] py-14">
      <div class="flex flex-col justify-center items-center my-20">
        <h3 class="text-gray-500 font-extrabold text-center uppercase text-4xl lg:text-6xl font-kinn">Ens Art Vault</h3>
      </div>
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:p-0 p-4">
        <div class="flex flex-col items-start gap-10 ">
          <h3 class="text-5xl lg:text-6xl xl:text-8xl font-normal text-transparent footer-text font-kinn">Community</h3>
          <h3 class="text-5xl lg:text-6xl xl:text-8xl font-normal text-transparent footer-text font-kinn">Developers</h3>
          <h3 class="text-5xl lg:text-6xl xl:text-8xl font-normal text-transparent footer-text font-kinn">Docs</h3>
          <h3 class="text-5xl lg:text-6xl xl:text-8xl font-normal text-transparent footer-text font-kinn">Contact</h3>
        </div>

        <div class="flex flex-col justify-start items-start gap-y-6 lg:gap-y-40">
          <div class="grid grid-cols-2 lg:grid-cols-4 gap-5">
            <a tag="li" :href="social.link" class="flex justify-center items-center" v-for="(social, i) in socials">
              <div class="flex items-center gap-3">
                  <i :class="[social.icon, iconClass]"></i>
                  <span class="text-white text-lg font-kinn font-semibold">{{ social.title }}</span>
                
              </div>
            </a>
          </div>

          <div class="flex flex-col">
            <router-link tag="li" to="#" class="flex gap-3 w-60 bg-gray-100 rounded-lg p-2 text-black hover:bg-gray group">
              <span class="uppercase font-kinn text-lg font-medium text-black">Dev Relations</span>
              <i class="ri-arrow-right-line text-xl text-black font-medium"></i>
            </router-link>
          </div>

          <div class="flex flex-col">
            <i class="ri-link bg-gray-100 p-1 rounded-md w-8 text-center"></i>
          </div>

          <div class="flex gap-2">
            <i class="ri-mail-fill text-white text-xl"></i>
            <span class="text-white font-kinn">hello@EnsArtVault.io</span>
          </div>

        </div>
      </div>
    </section>

    <section class="py-3">
      <div class="flex lg:justify-between justify-center items-center lg:flex-row flex-col flex-wrap lg:flex-nowrap">
          <div class="flex items-center">
            <h4 class="text-white font-medium text-sm font-kinn">Ens Art Vault.Copyright. &copy; {{ getDate }}</h4>
          </div>

          <div class="flex items-center gap-4">
            <router-link tag="li" class="text-white text-sm font-medium font-kinn" to="#">Terms</router-link>
            <router-link tag="li" class="text-white text-sm font-medium font-kinn" to="#">Privacy Policy</router-link>
          </div>
      </div>
    </section>
    
  </footer>
</template>

<script>
  export default {
    name: "Footer",
    data() {
      return {
        iconClass: "text-xl text-white font-bold",
        socials: [
          {
            icon: "ri-telegram-fill",
            title: "Telegram",
            link:"https://t.me/EnsArtVault_ERC"
          },

          {
            icon: "ri-twitter-fill",
            title: "Twitter",
            link:"https://twitter.com/EnsArtVault"
          } 
        ]
      }
    },

    computed: {
      getDate() {
        return new Date().getFullYear();
      }
    }

  }

</script>

<style scoped>
  .footer-text {
    -webkit-text-stroke: 0.4px rgba(255,255,255,0.5);
  }

</style>