<template>

  <nav class="navbar-dark  navbar navbar-expand-lg ">
    <div class="container-fluid">
      <router-link to="/" class="navbar-brand">
        <img src="https://res.cloudinary.com/daniel23/image/upload/v1697459024/WhatsApp_Image_2023-10-16_at_11.50.22-removebg-preview_wbjswo.png" alt="" width="90"
          class="d-inline-block navbar-img img-fluid">
      </router-link>

      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>


      <div class="collapse navbar-collapse" id="navbarSupportedContent">

        <div class="d-flex ms-auto">
          <div class="navbar-menu-buttons">


            <div v-if="isActivated" class="btn-group mx-2 navbar-menu-btn">
              <router-link tag="button" class="btn btn-primary cht-button" to="/send-tokens">Send Tokens</router-link>
            </div>

            <div v-if="isActivated" class="btn-group mx-2 navbar-menu-btn">
              <button class="btn btn-primary dropdown-toggle cht-button" type="button" id="dropdownMenuButton1"
                data-bs-toggle="dropdown" aria-expanded="false">
                {{ getNetworkName }}
              </button>
              <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                <li>
                  <span class="dropdown-item" :key="network" v-for="network in getSupportedNetworkNames"
                    @click="changeNetwork(network)">{{ network }}</span>
                </li>
              </ul>
            </div>

            <div v-if="isActivated" class="btn-group mx-2">
              <button class="btn btn-primary dropdown-toggle cht-button" type="button" id="dropdownMenuButton2"
                data-bs-toggle="dropdown" aria-expanded="false">
                {{ getNameOrAddress }}
              </button>
              <ul class="dropdown-menu " aria-labelledby="dropdownMenuButton2">
                <router-link tag="li" class="dropdown-item cht-button-list" to="/profile">Profile</router-link>
                <router-link tag="li" class="dropdown-item cht-button-list" to="/">Buy domain</router-link>
                <router-link tag="li" class="dropdown-item cht-button-list" to="/search-domain">Search
                  domain</router-link>
                <router-link tag="li" class="dropdown-item cht-button-list" to="/send-tokens">Send tokens</router-link>

                <li class="dropdown-item cht-button-list" @click="logout">Disconnect</li>
              </ul>
            </div>
          </div>

          <button class="btn btn-primary cht-button cursor-pointer" @click="open">Connect wallet</button>
        </div>

      </div>


    </div>
  </nav>
</template>

<script lang="js">
import { mapGetters } from 'vuex';
import { useBoard, useEthers, useWallet } from 'vue-dapp';
import useChainHelpers from "../hooks/useChainHelpers";

export default {
  name: "Navbar",

  computed: {
    ...mapGetters("user", ["getUserShortAddress", "getUserSelectedName"]),
    ...mapGetters("network", ["getNetworkName", "getSupportedNetworks", "getSupportedNetworkNames"]),

    getNameOrAddress() {
      if (this.getUserSelectedName) {
        return this.getUserSelectedName;
      } else {
        return this.getUserShortAddress;
      }
    },

  },

  methods: {
    changeNetwork(networkName) {
      const networkData = this.switchNetwork(networkName);

      window.ethereum.request({
        method: networkData.method,
        params: networkData.params
      });
    },

    logout() {
      this.disconnect();
      localStorage.clear();
      localStorage.setItem("connected", "null");
    },

    openUrl(url) {
      window.open(url, '_blank').focus();
    }
  },

  setup() {
    const { open } = useBoard();
    const { disconnect } = useWallet();
    const { isActivated } = useEthers();
    const { switchNetwork } = useChainHelpers();

    return {
      isActivated, disconnect, open, switchNetwork
    }
  }
}
</script>

<style scoped>
.dropdown-item {
  cursor: pointer;
}

.collapse {
    visibility: initial;
}

.navbar-brand {
  font-family: 'Poppins', cursive;
}

.navbar-dark .navbar-brand {
  color: black;
}

.navbar-dark {
  /*background: linear-gradient(90deg, hsla(265, 75%, 26%, 1) 0%, hsla(365, 75%, 26%, 1) 100%);*/
  background: rgba(255, 255, 255, 0.1);
  /*background: linear-gradient(90deg, #3b1eca 0%, #793ac7 100%);*/
  border-radius: 14px;
  padding: 20px;
  margin-right: 10px;
  margin-left: 10px;

}

.cht-button {
  background: #9CA3AF;

  /* Grey/White */
  border: 1px solid #FFFFFF;
  border-radius: 10px;
  color: #FFFFFF
}

.cht-button-list {
  background: #9CA3AF;

  /* Grey/White */
  border: 1px solid #FFFFFF;
  color: #FFFFFF
}

.navbar-img {
  margin-right: 5px;
}


@media only screen and (max-width: 767px) {
  .navbar-menu-btn {
    margin-bottom: 5px;
  }

  .navbar-other-item {
    margin-top: 10px;
  }

  .navbar-menu-buttons {
    display: flex;
    flex-direction: column;
  }

}
</style>
