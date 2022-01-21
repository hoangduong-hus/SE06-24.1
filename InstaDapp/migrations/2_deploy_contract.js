const InstaDapp = artifacts.require("InstaDapp.sol");

module.exports = function (deployer) {
  deployer.deploy(InstaDapp);
};