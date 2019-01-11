pragma solidity >= 0.4.21 < 0.6.0;

contract Dummy {

  address public owner; 
  mapping (address => uint) balance;

  constructor() public payable{
    owner = msg.sender;
  }

  function increaseBalance() public payable {
    require(msg.value >= 0, "value must be greater than 0");
    //increase the balance in the mapping 
    balance[msg.sender] += msg.value; 
  }

  function getBalance(address person) public view returns (uint) {
    return balance[person];
  }

  function getWord() public pure returns (uint) {
    return 5;
  }

}

