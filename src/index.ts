import {
  Multicall,
  ContractCallResults,
  ContractCallContext,
} from "ethereum-multicall";
import Web3 from "web3";

const web3 = new Web3(
  "https://rinkeby.infura.io/v3/6429a308b4d646399b1ea170bb406c61"
);

const multicall = new Multicall({ web3Instance: web3, tryAggregate: true });

const contractCallContext: ContractCallContext[] = [
  {
    reference: "increment",
    contractAddress: "0xB6B8bB1e16A6F73f7078108538979336B9B7341C",
    abi: [
      {
        inputs: [],
        name: "increment",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [],
        name: "x",
        outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        stateMutability: "view",
        type: "function",
      },
    ],
    calls: [
      { reference: "x", methodName: "x", methodParameters: [] },
      { reference: "x", methodName: "x", methodParameters: [] },
    ],
  },
];

start();
async function start() {
  const results: ContractCallResults = await multicall.call(
    contractCallContext
  );
  console.log(results);
}
