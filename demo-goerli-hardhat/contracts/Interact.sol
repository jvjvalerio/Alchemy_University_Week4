//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

interface IContract {
    function attempt() external;
}

contract Interact {
    address attemptAddress = 0xcF469d3BEB3Fc24cEe979eFf83BE33ed50988502;

    function interact() external {
        IContract(attemptAddress).attempt();
    }
}
