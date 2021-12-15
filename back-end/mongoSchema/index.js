const tokenAbi = require('../contracts-abi/Bridge.json');

const Web3 = require('web3');

const Caver = require('caver-js');

const BAOBAB_TESTNET_RPC_URL = 'https://api.baobab.klaytn.net:8651/'
const rpcURL = BAOBAB_TESTNET_RPC_URL
const caver = new Caver(rpcURL)
const klyContractBridge = new caver.klay.Contract(
  tokenAbi.abi,
    '0x33fB05877C1885146d5CeC305B37B90C6A78B239',
  )
  console.log('>>>>>>>',klyContractBridge.methods);



const database = require('./db.js');

const dbSchema = require('./networkBridgeSchema.js');


// const web3 = new Web3(new Web3('wss://rinkeby.infura.io/ws/v3/a36273ead00942059b6694d4985212dc'));


const infuraKey = '43aac88c007b4aa8bcc84aeb859462ca'
const providerNetwork = `wss://rinkeby.infura.io/ws/v3/${infuraKey}`

const web3 = new Web3(new Web3(providerNetwork))

const contractToken = new web3.eth.Contract(
    tokenAbi.abi,
  '0xb319F4089082EC4e8FdC2070B4470599485c3168',
)

// const contractToken = new web3.eth.Contract(tokenAbi.abi,"0x1FbB76765728EDeA4dF3Dc12Bd8865178a204613");
// // console.log(contractToken.events.TransferToken());



// listing the contract from....
contractToken.events.TransferToken({
    fromBlock: 0,
}, function(error, event){ console.log(event);
// .on("connected", function(subscriptionId){
//     console.log(subscriptionId);

    let transactionAddress = (event.returnValues.sender);
    let Amount = (event.returnValues.amount);
    let Nonce = (event.returnValues.nonce);
    let TimeStamp = (event.returnValues.transferTime);
    let tHash = (event.transactionHash);

    let tAddress = dbSchema();
    tAddress.fromToken = transactionAddress;
    tAddress.amount = Amount;
    tAddress.nonce = Nonce;
    tAddress.transactionHash = tHash;
    tAddress.timeStamp = TimeStamp;
    tAddress.save();





})



