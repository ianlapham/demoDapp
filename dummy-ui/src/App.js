import React, { Component } from 'react';
import './App.css';
import Web3 from "web3";
import {abi, dummyAddress} from "./contractData"
import { callbackify } from 'util';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      isConnected : true,
      web3 : null,
      dummyContract : null,
      account : null
    }
    this.increase = this.increase.bind(this);
    this.getBalance = this.getBalance.bind(this)
  }

  async componentWillMount() {
    await this.setupWeb3();
    const contract = new this.state.web3.eth.Contract(abi, dummyAddress);
    let accounts = []
    this.state.web3.eth.getAccounts().then(res => {
      accounts = res;
      this.setState({
        dummyContract : contract,
        account : accounts[0],
      })
    })
  }

  async setupWeb3() {
    if (typeof window.web3 !== 'undefined') {
      window.ethereum.enable();
      this.setState({
        web3 : new Web3(window.web3.currentProvider),
      })
     } else {
       //force them to use metamask 
     } 
  }

  increase() {
    this.state.dummyContract.methods.increaseBalance().send({
      from : this.state.account, 
      value : '40000000000000000'
    }, function(err, res){
      
    });
  }

  getBalance() {
    this.state.dummyContract.methods.getBalance('0xE98CD5eDA084e71fc1E0b9459EAe0A60a2282045').call({
      from : this.state.account, 
    }, function(err, res){
      console.log(res);
    });
  }

  checkForMetaMask() {
    if (this.state.isConnected){
      return (
        <div className="container">
        <div className="button" id="b1" onClick={this.increase}>
          <p>Click to increase balance</p>
        </div>
        <div className="button" id="b2" onClick={this.getBalance}>
          <p>Click to get balance</p>
        </div>
      </div>
      )
    } else {
      return (
        <div>
          <p>Connect to metamask</p>
        </div>
      )
    }
  }

  render() {
    return (
      <div className="App">
        {this.checkForMetaMask()}
      </div>
    );
  }
}

export default App;
