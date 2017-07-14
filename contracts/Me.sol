pragma solidity ^0.4.4;

contract Me {
  string first;
  string last;
  string twitter;
  string nick;
  address myAddress;
  uint dateJoined;
  function Me(){
    first = 'Ken';
    last = 'Kappler';
    twitter = '@kapplerken';
    nick ='BlueChain';
    myAddress = msg.sender;
    dateJoined = block.timestamp;
  }   
}
