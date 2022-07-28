// // migrating the appropriate contracts
// var SquareVerifier = artifacts.require("./SquareVerifier.sol");
// var SolnSquareVerifier = artifacts.require("./SolnSquareVerifier.sol");

// module.exports = function(deployer) {
//   deployer.deploy(SquareVerifier);
//   deployer.deploy(SolnSquareVerifier);
// };
var CustomERC721Token = artifacts.require("CustomERC721Token");
var verifier = artifacts.require("verifier");
var SolnSquareVerifier = artifacts.require("SolnSquareVerifier");

module.exports = function (deployer) {
  deployer.then(async () => {
    await deployer.deploy(CustomERC721Token, "NFT", "VND");
    await deployer.deploy(verifier);
    await deployer.deploy(SolnSquareVerifier, verifier.address, "NFT", "VND");
  });
};