// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.24;

// Uncomment this line to use console.log
// import "hardhat/console.sol";

contract Dappazon {
  // string public name;
  address public owner; //blockchain address or ethirium address

   struct Item {
    uint256 id;
    string name;
    string category;
    string image;
    uint256 cost;
    uint256 rating;
    uint256 stock;
   }


struct Order {
  uint256 time;
  Item item;
}


    mapping(uint256 => Item) public items;
    mapping(address => uint256) public orderCount;
    mapping(address => mapping(uint256 => Order)) public orders;

    event Buy(address buyer, uint256 orderId, uint256 itemId);
    event List(string name, uint256 cost, uint256 quantity);

    modifier onlyOwner() {
      require(msg.sender == owner);
      _;
    }

    constructor() {
      // name = "Dappazon";
      owner = msg.sender;
    }
        //list products 
        function list(uint256 _id, 
          string memory _name, 
          string memory _category,
          string memory _image,
          uint256 _cost,
          uint256 _rating,
          uint256 _stock
          ) public onlyOwner {
              //create item struct
              

              // create item struct to blockchain
              Item memory item = Item(
                _id, 
                _name, 
                _category, 
                _image, 
                _cost, 
                _rating, 
                _stock
                
              );

              //save item Struct to blockchain
              items[_id] = item;
              //emit an event
              emit List(_name, _cost, _stock);
        }
       
        //buy products 
        function buy(uint256 _id) public payable {
          // fetch item
          Item memory item =  items[_id];

          //Require engouh ether to buy item
          require(msg.value >= item.cost);

          //Require Items in the stock
          require(item.stock > 0);

          //Recieve Crypto
          Order memory order = Order(block.timestamp, item);
          //create order

          // Save order to chain
          orderCount[msg.sender]++;
          orders[msg.sender][orderCount[msg.sender]] = order;

          //Substrack stock
          items[_id].stock = item.stock - 1;

          //Emit event
          emit Buy(msg.sender, orderCount[msg.sender], item.id);

        }

        //withdraw funds
      function withdraw() public onlyOwner {
        (bool success, ) = owner.call{value: address(this).balance}("");
        require(success);
      }
 
}
