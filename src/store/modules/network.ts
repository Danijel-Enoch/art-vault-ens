import { ethers } from "ethers";
import { useEthers } from "vue-dapp";
import tokens from "../../abi/tokens.json";

const { chainId } = useEthers();

export default {
	namespaced: true,

	state: () => ({
		networkCurrency: "ETH",
		networkName: "Unsupported Network",
		supportedNetworks: {
			1: "Ethereum Mainnet",
			5: "Ethereum Goerli Testnet",
			10: "Optimism",
			100: "Gnosis Chain",
			137: "Polygon",
			42161: "Arbitrum",
			56: "BNB Smart Chain",
			1115: "Core Testnet",
			943: "Pulse Testnet",
			2221: "Kava Testnet",
			2222: "Kava EVM Mainnet",
		},
	}),

	getters: {
		getBlockExplorerBaseUrl() {
			if (chainId.value === 1) {
				return "https://etherscan.io";
			} else if (chainId.value === 3) {
				return "https://ropsten.etherscan.io";
			} else if (chainId.value === 4) {
				return "https://rinkeby.etherscan.io";
			} else if (chainId.value === 10) {
				return "https://optimistic.etherscan.io";
			} else if (chainId.value === 19) {
				return "https://songbird-explorer.flare.network";
			} else if (chainId.value === 56) {
				return "https://bscscan.com";
			} else if (chainId.value === 69) {
				return "https://kovan-optimistic.etherscan.io";
			} else if (chainId.value === 77) {
				return "https://blockscout.com/poa/sokol";
			} else if (chainId.value === 100) {
				return "https://gnosisscan.io";
			} else if (chainId.value === 137) {
				return "https://polygonscan.com";
			} else if (chainId.value === 250) {
				return "https://ftmscan.com";
			} else if (chainId.value === 4002) {
				return "https://testnet.ftmscan.com";
			} else if (chainId.value === 42161) {
				return "https://arbiscan.io";
			} else if (chainId.value === 80001) {
				return "https://mumbai.polygonscan.com";
			} else if (chainId.value === 421611) {
				return "https://testnet.arbiscan.io";
			} else if (chainId.value === 1313161555) {
				return "https://testnet.aurorascan.dev";
			} else if (chainId.value === 1115) {
				return "https://scan.test.btcs.network/";
			} else if (chainId.value === 943) {
				return "https://scan.v4.testnet.pulsechain.com/";
			} else if (chainId.value === 2221) {
				return "https://evm.testnet.kava.io";
			} else if (chainId.value === 2222) {
				return "https://evm.kava.io";
			}
		},

		getBlockExplorerBaseUrlFromId: () => (netId: Number) => {
			if (netId === 1) {
				return "https://etherscan.io";
			} else if (netId === 3) {
				return "https://ropsten.etherscan.io";
			} else if (netId === 4) {
				return "https://rinkeby.etherscan.io";
			} else if (netId === 10) {
				return "https://optimistic.etherscan.io";
			} else if (netId === 19) {
				return "https://songbird-explorer.flare.network";
			} else if (netId === 56) {
				return "https://bscscan.com";
			} else if (netId === 69) {
				return "https://kovan-optimistic.etherscan.io";
			} else if (netId === 77) {
				return "https://blockscout.com/poa/sokol";
			} else if (netId === 100) {
				return "https://gnosisscan.io";
			} else if (netId === 137) {
				return "https://polygonscan.com";
			} else if (netId === 250) {
				return "https://ftmscan.com";
			} else if (netId === 4002) {
				return "https://testnet.ftmscan.com";
			} else if (netId === 42161) {
				return "https://arbiscan.io";
			} else if (netId === 80001) {
				return "https://mumbai.polygonscan.com";
			} else if (netId === 421611) {
				return "https://testnet.arbiscan.io";
			} else if (netId === 1313161555) {
				return "https://testnet.aurorascan.dev";
			} else if (netId === 1115) {
				return "https://scan.test.btcs.network/";
			} else if (netId === 943) {
				return "https://scan.v4.testnet.pulsechain.com/";
			} else if (netId === 2221) {
				return "https://explorer.testnet.kava.io/";
			} else if (netId === 2222) {
				return "https://explorer.kava.io/";
			}
		},

		getChainId() {
			return chainId.value;
		},

		getFallbackProvider: (state) => (networkId) => {
			let urls;

			if (networkId === 1) {
				// Ethereum
				urls = ["https://rpc.ankr.com/eth"];
			} else if (networkId === 3) {
				// Ropsten testnet
			} else if (networkId === 5) {
				// Rinkeby testnet
				urls = [
					"https://goerli.infura.io/v3/9e9e77871cc04dc182dac2b47f6b0b44",
				];
			} else if (networkId === 10) {
				// Optimism
				urls = ["https://rpc.ankr.com/optimism"];
			} else if (networkId === 19) {
				// Songbird
				urls = ["https://sgb.ftso.com.au/ext/bc/C/rpc"];
			} else if (networkId === 56) {
				// BSC mainnet
				urls = ["https://rpc.ankr.com/bsc"];
			} else if (networkId === 69) {
				// Optimism testnet
				urls = ["https://kovan.optimism.io"];
			} else if (networkId === 77) {
				// Gnosis Chain testnet (Sokol)
				urls = ["https://sokol.poa.network"];
			} else if (networkId === 100) {
				// Gnosis Chain
				urls = ["https://rpc.ankr.com/gnosis"];
			} else if (networkId === 137) {
				// Polygon PoS Chain
				urls = ["https://rpc.ankr.com/polygon"];
			} else if (networkId === 250) {
				// Fantom Mainnet
				urls = ["https://rpc.ankr.com/fantom"];
			} else if (networkId === 4002) {
				// Fantom Testnet
				urls = [
					"https://rpc.ankr.com/fantom_testnet",
					//"https://rpc.testnet.fantom.network",
					"https://fantom-testnet.public.blastapi.io",
				];
			} else if (networkId === 42161) {
				// Arbitrum
				urls = ["https://rpc.ankr.com/arbitrum"];
			} else if (networkId === 80001) {
				// Mumbai testnet (Polygon testnet)
				urls = [
					"https://matic-mumbai.chainstacklabs.com",
					"https://polygon-mumbai.g.alchemy.com/v2/" +
						import.meta.env.VITE_ALCHEMY_MUMBAI_KEY,
				];
			} else if (networkId === 421611) {
				// Arbitrum Rinkeby testnet
				urls = ["https://rinkeby.arbitrum.io/rpc"];
			} else if (networkId === 421613) {
				// Arbitrum Goerli testnet
				urls = ["https://goerli-rollup.arbitrum.io/rpc"];
			} else if (networkId === 1313161555) {
				// Aurora testnet
				urls = ["https://testnet.aurora.dev"];
			} else if (networkId === 1115) {
				// Aurora testnet
				urls = ["https://rpc.test.btcs.network"];
			} else if (networkId === 943) {
				// Aurora testnet
				urls = ["https://rpc.v4.testnet.pulsechain.com"];
			} else if (networkId === 2221) {
				// Aurora testnet
				urls = ["https://evm.testnet.kava.io"];
			} else if (networkId === 2222) {
				// Aurora testnet
				urls = ["https://evm.kava.io"];
			}

			if (urls) {
				const providers = urls.map(
					(url) => new ethers.providers.JsonRpcProvider(url)
				);
				return new ethers.providers.FallbackProvider(providers, 1); // return fallback provider
			} else {
				return null;
			}
		},

		getNetworkCurrency(state) {
			return state.networkCurrency;
		},

		getNetworkName(state) {
			const supportedIds = Object.keys(state.supportedNetworks);

			if (supportedIds && supportedIds.includes(String(chainId.value))) {
				return state.networkName;
			}

			return "Unsupported Network";
		},

		getSupportedNetworks(state) {
			return state.supportedNetworks;
		},

		getSupportedNetworkIds(state) {
			return Object.keys(state.supportedNetworks);
		},

		getSupportedNetworkNames(state) {
			return Object.values(state.supportedNetworks);
		},

		getTokens(state) {
			return tokens[String(chainId.value)];
		},

		isNetworkSupported(state) {
			const supportedIds = Object.keys(state.supportedNetworks);

			if (supportedIds && supportedIds.includes(String(chainId.value))) {
				return true;
			}

			return false;
		},
	},

	mutations: {
		setNetworkData(state) {
			if (chainId.value === 137) {
				state.networkName = "Polygon";
				state.networkCurrency = "MATIC";
			} else if (chainId.value === 1) {
				state.networkName = "Ethereum";
				state.networkCurrency = "ETH";
			} else if (chainId.value === 10) {
				state.networkName = "Optimism";
				state.networkCurrency = "ETH";
			} else if (chainId.value === 19) {
				state.networkName = "Songbird";
				state.networkCurrency = "SGB";
			} else if (chainId.value === 56) {
				state.networkName = "BNB Smart Chain";
				state.networkCurrency = "BNB";
			} else if (chainId.value === 69) {
				state.networkName = "Optimism Testnet";
				state.networkCurrency = "ETH";
			} else if (chainId.value === 77) {
				state.networkName = "Gnosis Testnet";
				state.networkCurrency = "SPOA";
			} else if (chainId.value === 100) {
				state.networkName = "Gnosis Chain";
				state.networkCurrency = "XDAI";
			} else if (chainId.value === 137) {
				state.networkName = "Polygon";
				state.networkCurrency = "MATIC";
			} else if (chainId.value === 250) {
				state.networkName = "Fantom";
				state.networkCurrency = "FTM";
			} else if (chainId.value === 4002) {
				state.networkName = "Fantom Testnet";
				state.networkCurrency = "FTM";
			} else if (chainId.value === 42161) {
				state.networkName = "Arbitrum";
				state.networkCurrency = "ETH";
			} else if (chainId.value === 421611) {
				state.networkName = "Arbitrum Testnet";
				state.networkCurrency = "ETH";
			} else if (chainId.value === 421613) {
				state.networkName = "Arbitrum Goerli Testnet";
				state.networkCurrency = "ETH";
			} else if (chainId.value === 80001) {
				state.networkName = "Polygon Testnet";
				state.networkCurrency = "MATIC";
			} else if (chainId.value === 3) {
				state.networkName = "Ropsten";
				state.networkCurrency = "ETH";
			} else if (chainId.value === 4) {
				state.networkName = "Rinkeby";
				state.networkCurrency = "ETH";
			} else if (chainId.value === 1313161555) {
				state.networkName = "Aurora Testnet";
				state.networkCurrency = "ETH";
			} else if (chainId.value === 1115) {
				state.networkName = "Core Testnet";
				state.networkCurrency = "Core";
			} else if (chainId.value === 943) {
				state.networkName = "PulseChain Testnet v4";
				state.networkCurrency = "PLS";
			} else if (chainId.value === 2221) {
				state.networkName = "KAVA Testnet v4";
				state.networkCurrency = "tKava";
			} else if (chainId.value === 2222) {
				state.networkName = "KAVA EVM Mainnet";
				state.networkCurrency = "Kava";
			} else if (chainId.value === 5) {
				state.networkName = "Ethereum Goerli Testnet";
				state.networkCurrency = "Eth";
			} else {
				state.networkName = "Unsupported Network";
				state.networkCurrency = "ETH";
			}
		},
	},

	actions: {},
};
