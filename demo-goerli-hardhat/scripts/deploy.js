const hre = require("hardhat");

async function main() {
  const Interact = await hre.ethers.getContractFactory("Interact");
  const interact = await Interact.deploy();

  await interact.deployed();

  console.log(
    `Interact Smart Contract has been deployed to ${interact.address}`
  );
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
