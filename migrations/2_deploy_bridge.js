const Bridge = artifacts.require('Bridge')

module.exports = function (deployer) {
  deployer.deploy(Bridge, '0xa155D12C5AB84b9b8B6A1cC714cfE911e29f6D9b')
}
