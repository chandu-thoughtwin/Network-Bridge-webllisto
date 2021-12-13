const Web3 = require('web3')
const contractAbi = require('./contracts-abi/AGOVToken.json')
const contractAbiBridge = require('./contracts-abi/Bridge.json')

const infuraKey = '43aac88c007b4aa8bcc84aeb859462ca'
const providerNetwork = `https://rinkeby.infura.io/v3/${infuraKey}`

const web3 = new Web3(new Web3(providerNetwork))
const agovContract = new web3.eth.Contract(
  contractAbi.abi,
  '0x09da68Aa3050054df2adFF77b378cc24d23F5760',
)
const brigeContract = new web3.eth.Contract(
  contractAbiBridge.abi,
  '0xDC99f5C6129b9e9aD6713e29cB7730d946310A9F',
)

console.log(
  agovContract.methods
    .balanceOf('0xDC99f5C6129b9e9aD6713e29cB7730d946310A9F')
    .call()
    .then(console.log),
)

console.log(brigeContract._address)

async function AddToken() {
  await brigeContract.methods
    .addIRC20Token('0x09da68Aa3050054df2adFF77b378cc24d23F5760')
    .send({ from: '0xa155D12C5AB84b9b8B6A1cC714cfE911e29f6D9b' })
}
async function ApporoveToSepend() {
  await brigeContract.methods
    .TransferToken('0xa155d12c5ab84b9b8b6a1cc714cfe911e29f6d9b', 1000)
    .send({ from: brigeContract._address })
}

async function genrateSign() {
  let amount
  let nonce
  let sender
  let fromToken
  let toToken
  let data = amount + nonce + sender + fromToken + toToken

  let _sign = await web3.eth.accounts.sign(
    data,
    '6e2d79a5df892d4ad3a876d4910d8f9e756a128ac3c243c054c9a192b1c320e8',
  )

  console.log(_sign.messageHash)
}

// ApporoveToSepend()
// AddToken()
genrateSign()
