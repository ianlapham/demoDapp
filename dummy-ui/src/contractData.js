module.exports = {  
  dummyAddress : "0x50A7b49A50a39e9D280131B4D415969EA49cFC96",
  abi : [
    {
      "constant": true,
      "inputs": [],
      "name": "owner",
      "outputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function",
      "signature": "0x8da5cb5b"
    },
    {
      "inputs": [],
      "payable": true,
      "stateMutability": "payable",
      "type": "constructor",
      "signature": "constructor"
    },
    {
      "constant": false,
      "inputs": [],
      "name": "increaseBalance",
      "outputs": [],
      "payable": true,
      "stateMutability": "payable",
      "type": "function",
      "signature": "0xd003d23e"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "person",
          "type": "address"
        }
      ],
      "name": "getBalance",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function",
      "signature": "0xf8b2cb4f"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "getWord",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "pure",
      "type": "function",
      "signature": "0xed40a8c8"
    }
  ]
}