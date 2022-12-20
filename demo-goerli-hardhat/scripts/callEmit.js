const { ethers } = require("ethers");
require('dotenv').config();

const contract_address = '0xD42aC14aE24BCE23BBcbEFFC1b83A8D1dA65E438';
const provider = new ethers.providers.JsonRpcProvider(process.env.GOERLI_URL);
const wallet = new ethers.Wallet(process.env.GOERLI_PRIVATE_KEY, provider);

const ERC20_ABI = [
    "function interact() external"
]

const contract = new ethers.Contract(contract_address, ERC20_ABI, wallet);


async function main() {
    const tx = await contract.interact();
    console.log(await tx.wait());
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});