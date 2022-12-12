// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Votes.sol";

contract Token is ERC20Votes {
     address[] public tokens;
    constructor(
        string memory _name,
        string memory _symbol, 
        address[] memory recipients, 
        uint256[] memory amounts
    ) ERC20(_name, _symbol) ERC20Permit(_name) {
        require(recipients.length > 0);
        require(recipients.length == amounts.length);
        for(uint256 i=0; i < recipients.length ; i++ ){
             _mint(recipients[i],amounts[i] );
             tokens.push(recipients[i]);
        }
       
    }

    // The functions below are overrides required by Solidity.

    function _afterTokenTransfer(
        address from,
        address to,
        uint256 amount
    ) internal override(ERC20Votes) {
        super._afterTokenTransfer(from, to, amount);
    }

    function _mint(address to, uint256 amount) internal override(ERC20Votes) {
        super._mint(to, amount);
    }

    function _burn(address account, uint256 amount)
        internal
        override(ERC20Votes)
    {
        super._burn(account, amount);
    }

    function getTokenHolders()public view returns( address  [] memory){
    return tokens;
}
}