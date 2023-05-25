<template>
  <div class="text-center">
    <!-- Hero Section -->
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-5 justify-center items-center lg:m-0 my-10">
      <div class="lg:col-span-2 flex lg:flex-row flex-col justify-between items-start gap-4">
        <div class="hidden lg:flex flex-col justify-start items-start gap-6">
          <h3 class="domains" style="color:#F5AD64;">.core</h3>
          <h3 class="domains" style="color:#00FB19;">.zeta</h3>
          <h3 class="domains" style="color:#E7B9FF;">.caduceus</h3>
          <h3 class="domains" style="color:#7200F7;">.cheetah</h3>
          <h3 class="domains" style="color:#F5AD64;">.tcore</h3>
          <h3 class="domains" style="color:#ffff;">.dns</h3>
          <h3 class="domains" style="color:#F1392B;">.partner</h3>
        </div>


        <div class="flex flex-col justify-center lg:justify-start lg:items-start items-center gap-2 lg:gap-4">
          <h1 class="!text-4xl font-bold sm:!text-6xl lg:!text-7xl xl:text-8xl text-white font-kinn">Your Global</h1>
          <h1 class="!text-4xl sm:!text-6xl lg:!text-7xl xl:text-8xl !text-purple-700 font-poppins font-bold">Domain Name
          </h1>
          <h1 class="!text-4xl sm:!text-6xl lg:!text-7xl xl:text-8xl text-white font-kinn font-bold">Provider</h1>
          <p class="text-sm text-white">Establishing your identity in a permissionless and censorship-resistant way using
            multichain. We give the power back to our users</p>
        </div>

      </div>

      <div class="lg:col-span-1 flex flex-col justify-center items-center ">
        <img style="width: 509px; height: 524px;"
          src="https://res.cloudinary.com/daniel23/image/upload/v1683626678/Group_176_1_1_ueq5tc.png" alt=""
          class="d-inline-block navbar-img">
      </div>
    </div>

    <!-- /Hero Section -->



    <div class="d-flex justify-content-center text-white domain-input-container">
      <div class="input-group mb-3 domain-input input-group-lg">
        <input style="" v-model="chosenDomainName" placeholder="Start core Searching" type="text"
          class="form-control text-start domain-text-input" aria-label="Text input with dropdown button">

        <button class="btn btn-primary dropdown-toggle text-white" type="button" data-bs-toggle="dropdown"
          aria-expanded="false">
          <span v-if="isActivated && !selectedTld" class="spinner-border spinner-border-sm" role="status"
            aria-hidden="true"></span>
          {{ selectedTld }}
        </button>

        <ul class="dropdown-menu dropdown-menu-end">
          <li><span class="dropdown-item" :key="tld" v-for="tld in enabledBuyingTlds"
              @click="changeTld(tld)">{{ tld }}</span></li>
        </ul>
      </div>
    </div>

    <p class="error" v-if="buyNotValid(chosenDomainName).invalid">
      <small>
        <em>{{ buyNotValid(chosenDomainName).message }}</em>
      </small>
    </p>

    <p class="text-white mt-3">
      Domain price: {{ this.parseValue(this.selectedPrice) }} {{ getNetworkCurrency }}
    </p>

    <button class="btn text-white btn-primary btn-lg mt-1 buy-button hover:!bg-purple-500 hover:!text-white" @click="buyDomain"
      :disabled="waiting || buyNotValid(chosenDomainName).invalid">
      <span v-if="waiting" class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
      Buy domain
    </button>


    <div class="hidden lg:block card-container">
      <div class="spec-card-container">
        <div class="card  ">
          .SHIBA
        </div>
        <div class="card  ">
          .CORE
        </div>
        <div class="card  ">
          .CHT
        </div>
        <div class="card  ">
          .PEPE
        </div>

        <div class="card  ">
          .CAD
        </div>
        <div class="card  ">
          .ZETA
        </div>
        <div class="card  ">
          .EOS
        </div>
        <div class="card  ">
          .ZK
        </div>
        <div class="card  ">
          .SOLIMAX
        </div>

      </div>
      <div class="spec-card-container">
        <div class="card  ">
          .CORE
        </div>
        <div class="card  ">
          .CHT
        </div>
        <div class="card  ">
          .PEPE
        </div>

        <div class="card  ">
          .CAD
        </div>
        <div class="card  ">
          .ZETA
        </div>
        <div class="card  ">
          .BRISE
        </div>
        <div class="card  ">
          .BITGERT
        </div>
        <div class="card  ">
          .CMP
        </div>
        <div class="card  ">
          .APE
        </div>
      </div>
    </div>


    <div class="card-container-info gap-4">
      <div class="flex flex-col justify-start items-start gap-2 p-4 bg-[rgba(217,217,217,0.1)] rounded-lg info-card">
        <img class="" src="https://res.cloudinary.com/daniel23/image/upload/v1683769377/boltz_gbo2ee.png" />
        <h3 class="font-kinn">
          Quickly send and receive funds to a human-readable address
        </h3>
        <h3 class="info-card-body">
          Worry no more about long, unmemorable wallet addresses. Transact directly from domain to domain instead of a
          cryptic key.
        </h3>
        <img class="info-card-image info-card-image-1"
          src="https://res.cloudinary.com/daniel23/image/upload/v1683769263/Component_16_1_wlvfk8.png" />
      </div>

      <div class="flex flex-col justify-start items-start gap-2 p-4 bg-[rgba(217,217,217,0.1)] rounded-lg info-card">
        <img class="" src="https://res.cloudinary.com/daniel23/image/upload/v1683769376/gaurd_hsxjv9.png" />
        <h3 class="font-kinn">
          Get verified so everyone knows it’s really you
        </h3>
        <h3 class="info-card-body">
          Confirm your identity by linking your Twitter handle to your wallet address. Enjoy the added advantage of easy
          funds transferring straight to registered handles.
        </h3>

        <div class="flex justify-between items-center gap-y-3 lg:gap-x-2 lg:flex-row flex-col lg:py-3 lg:px-1 p-3">
          <img src="https://res.cloudinary.com/daniel23/image/upload/v1683624963/Group_147_jegqiz.png" />
          <img src="https://res.cloudinary.com/daniel23/image/upload/v1683624962/Group_146_usywrq.png" />
        </div>

      </div>

    </div>

  </div>

  <FeaturedDomains class="mt-3" />
  <!-- <Auctions/> -->
  <Host />
  <!-- <ListedList/> -->
  <!-- <Partners/> -->
  <Networks />
</template>

<script lang="ts">
import { ethers } from 'ethers';
import { displayEther, useBoard, useEthers } from 'vue-dapp';
import { mapActions, mapGetters, mapMutations } from 'vuex';
import { useToast, TYPE } from "vue-toastification";
import WaitingToast from "../components/toasts/WaitingToast.vue";
import useDomainHelpers from "../hooks/useDomainHelpers";
import useChainHelpers from "../hooks/useChainHelpers";
import FeaturedDomains from '../components/FeaturedDomains.vue';
import Auctions from '../components/Auctions.vue';
import ListedList from '../components/ListedList.vue';
import Partners from "../components/Partners.vue";
import Networks from "../components/Networks.vue";
import Host from "../components/Host.vue";


export default {
  name: "Home",

  components: {
    FeaturedDomains,
    Auctions,
    ListedList,
    Partners,
    Networks,
    Host
  },

  data() {
    return {
      chosenDomainName: null,
      enabledBuyingTlds: [],
      selectedTld: null,
      selectedPrice: null,
      waiting: false, // waiting for TX to complete
    }
  },

  created() {
    if (this.getDomainPrices) {
      this.checkEnabledBuying();
    }
  },

  computed: {
    ...mapGetters("network", ["getBlockExplorerBaseUrl", "getNetworkName", "getNetworkCurrency", "getSupportedNetworks", "getSupportedNetworkNames"]),
    ...mapGetters("punk", ["getTlds", "getTldAddresses", "getDomainPrices", "getTldAbi"]),

    domainLowerCase() {
      return this.chosenDomainName.toLowerCase();
    }
  },

  methods: {
    ...mapActions("user", ["fetchUserDomainNames"]),
    ...mapMutations("user", ["addDomainManually"]),

    async buyDomain() {
      this.waiting = true;
      const fullDomainName = this.domainLowerCase + this.selectedTld;

      // create TLD contract object
      const intfc = new ethers.utils.Interface(this.getTldAbi);
      const contract = new ethers.Contract(this.getTldAddresses[this.selectedTld], intfc, this.signer);

      // check if price is missing
      if (!this.selectedPrice) {
        this.selectedPrice = await contract.price();
      }

      // check if domain is already taken
      const existingHolder = await contract.getDomainHolder(this.domainLowerCase);

      if (existingHolder !== ethers.constants.AddressZero) {
        this.toast("Sorry, but this domain name is already taken...", { type: TYPE.ERROR });
        this.waiting = false;
        return;
      }

      // buy/mint domain
      try {
        let referral = localStorage.getItem("referral");

        if (!referral || !ethers.utils.isAddress(referral)) {
          referral = ethers.constants.AddressZero;
        }

        const tx = await contract.mint(
          this.domainLowerCase,
          this.address,
          referral,
          {
            value: String(this.selectedPrice)
          }
        );

        if (tx) {
          const toastWait = this.toast(
            {
              component: WaitingToast,
              props: {
                text: "Please wait for your transaction to confirm. Click on this notification to see transaction in the block explorer."
              }
            },
            {
              type: TYPE.INFO,
              onClick: () => window.open(this.getBlockExplorerBaseUrl + "/tx/" + tx.hash, '_blank').focus()
            }
          );

          const receipt = await tx.wait();

          if (receipt.status === 1) {
            this.toast.dismiss(toastWait);
            this.toast("You have successfully bought the domain!", {
              type: TYPE.SUCCESS,
              onClick: () => window.open(this.getBlockExplorerBaseUrl + "/tx/" + tx.hash, '_blank').focus()
            });
            this.fetchUserDomainNames();
            this.addDomainManually(fullDomainName);
            this.waiting = false;
          } else {
            this.toast.dismiss(toastWait);
            this.toast("Transaction has failed.", {
              type: TYPE.ERROR,
              onClick: () => window.open(this.getBlockExplorerBaseUrl + "/tx/" + tx.hash, '_blank').focus()
            });
            console.log(receipt);
            this.waiting = false;
          }
        }

      } catch (e) {
        console.log(e)
        this.waiting = false;
        this.toast(e.message, { type: TYPE.ERROR });
      }

      this.waiting = false;
    },

    changeNetwork(networkName) {
      const networkData = this.switchNetwork(networkName);

      window.ethereum.request({
        method: networkData.method,
        params: networkData.params
      });
    },

    changeTld(tldName) {
      this.selectedTld = tldName;
      this.selectedPrice = this.getDomainPrices[tldName];
    },

    async checkEnabledBuying() {
      const oldSelectedTld = this.selectedTld;

      this.enabledBuyingTlds = [];


      let counter = 0;

      if (this.getTlds) {
        for (let tld of this.getTlds) {
          // construct contract
          const intfc = new ethers.utils.Interface(this.getTldAbi);
          const tldContract = new ethers.Contract(this.getTldAddresses[tld], intfc, this.signer);

          const canBuy = await tldContract.buyingEnabled();

          if (canBuy) {
            this.enabledBuyingTlds.push(tld);

            if (counter === 0) {
              this.selectedTld = tld;
              counter++;
            } else if (tld === oldSelectedTld) {
              this.selectedTld = oldSelectedTld;
            }
          }
        }
      }

      if (this.enabledBuyingTlds && !this.selectedTld) {
        this.selectedTld = this.enabledBuyingTlds[0];
      }

      this.selectedPrice = this.getDomainPrices[this.selectedTld];
    },

    openUrl(url) {
      window.open(url, '_blank').focus();
    },

    parseValue(someVal) {
      if (someVal) {
        return ethers.utils.formatEther(someVal);
      }
    }
  },

  setup() {
    const { open } = useBoard()
    const { address, chainId, isActivated, signer } = useEthers()
    const toast = useToast();
    const { buyNotValid } = useDomainHelpers();
    const { switchNetwork } = useChainHelpers();

    return { address, buyNotValid, chainId, isActivated, displayEther, open, signer, switchNetwork, toast }
  },

  watch: {
    chainId(newVal, oldVal) {
      if (newVal != oldVal) {
        this.selectedTld = null;
      }
    },

    getTlds(newVal, oldVal) {
      if (newVal && this.getDomainPrices) {
        this.checkEnabledBuying();
      }
    },

    getDomainPrices(newVal, oldVal) {
      if (newVal) {
        this.checkEnabledBuying();
      }
    }
  }
}
</script>

<style scoped>
.buy-button {
  margin-bottom: 50px;
  background-color: black;
}

.domain-input {
  width: 50%;
}

.domain-input-container {
  margin-top: 0.8rem;
}

.domain-text-input {
  width: 600px;
}

.dropdown-item {
  cursor: pointer;
}

.card {
  background-color: black;
  border-radius: 10px;
  border: 1px solid #7200F7;
  color: white;
  padding: 20px;
  margin: 15px;
}

.card-container {
  margin-left: 40px;
  margin-right: 40px;
  padding: 50;
}

.spec-card-container {
  display: flex;
  flex-direction: row;
  margin-right: 88px;
  margin-left: 88px;
}

.bg-gradient-image {
  background-image: url("https://res.cloudinary.com/daniel23/image/upload/v1683620278/Vector_43_q82faa.png");
}

.hero-bg {
  background-image: url("https://res.cloudinary.com/daniel23/image/upload/v1683621030/Group_176_we8z1l.png")
}

.hero-star {
  background-image: url("https://res.cloudinary.com/daniel23/image/upload/v1683623718/Group_176_2_z02byk.png");
}

.info-card {
  background: rgba(217, 217, 217, 0.1);
  border: 1px solid;
  border-color: #7200F7;
}

/* .font-kinn{

font-family: 'Kinn';
font-style: normal;
font-weight: 500;
font-size: 32px;
line-height: 32px;
padding-right:158px;
text-align:left;
margin-top: 28px;
color: #CBCBCB;
} */


.info-title-image {
  margin-left: 43px;
  margin-right: 564px;
}

.info-card-body {
  font-family: 'Kinn';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 16px;
  letter-spacing: 0.01em;
  margin-top: 20px;
  margin-bottom: 25px;
  padding-right: 154px;

  text-align: left;


  color: #F3F3F3;
}

.hero-section {
  display: flex;
  flex-direction: row;
}

.hero-section-domains {
  display: flex;
  flex-direction: column;
  margin-top: 60px;
}

.info-card-image {
  padding-right: 25px;
  padding-left: 25px;
}

.card-container-info {
  display: flex;
  flex-direction: row;
  margin-left: 10px;
  margin-right: 41px;
}


@media only screen and (max-width: 767px) {
  .domain-input {
    width: 100%;
  }

  .hero-section-domains {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
  }

  .domains {
    margin-right: 10px;
  }

  .hero-section {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
  }

  .spec-card-container {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
  }

  .domain-input-container {
    margin-top: 80px;
  }

  .domain-text-input {
    width: fit-content;
  }

  .card-container {
    margin-left: auto;
    margin-right: auto;
    padding: 50;
  }

  .card-container-info {
    display: flex;
    flex-direction: column;
    margin-left: 10px;
    margin-right: auto;
  }

  .info-card-image-1 {
    padding-right: 25px;
    padding-left: 25px;
    width: 300px;
  }

  .info-card-body {
    font-family: 'Kinn';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 16px;
    letter-spacing: 0.01em;
    margin-top: 20px;
    margin-bottom: 25px;
    padding-right: 50px;

    text-align: left;


    color: #F3F3F3;
  }

  .font-kinn {
    font-family: 'Kinn';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
    padding-right: auto;
    text-align: left;
    margin-top: auto;
    /* Grey/Text8 */

    color: #CBCBCB;
  }

}</style>
