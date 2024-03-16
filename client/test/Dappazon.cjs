const { ethers, waffle } = require("hardhat");
const { expect } = require("chai");

const tokens = (n) => {
  return ethers.parseUnits(n.toString(), 'ether'); // Change 'ethers' to 'ether'
}

describe("Dappazon", () => {
  let dappazon;
  let deployer, buyer; // Declare the buyer variable

  beforeEach(async () => {
    // Setup accounts
    [deployer, buyer] = await ethers.getSigners();

    // Deploy the contract
    const Dappazon = await ethers.getContractFactory("Dappazon");
    dappazon = await Dappazon.deploy();
  });
  
  describe("Deployment", () => {
    it('Sets the owner', async () => {
      expect(await dappazon.owner()).to.equal(deployer.address);
    });
  });

  describe("Listing", () => {
    let transaction;

    const ID = 1
const NAME = "Shoes"
const CATEGORY = "Clothing"
const IMAGE = "https://ipfs.io/ipfs/QmTYEboq8raiBs7GTUg2yLXB3PMz6HuBNgNfSZBx5Msztg/shoes.jpg"
const COST = tokens(1)
const RATING = 4
const STOCK = 5

    beforeEach(async () => { 
      transaction = await dappazon.connect(deployer).list(
        ID,
        NAME,
        CATEGORY,
        IMAGE,
        COST,
        RATING,
        STOCK
      );
      await transaction.wait();
    });

    it('Returns item attributes', async () => {
      const item = await dappazon.items(ID);
      expect(item.id).to.equal(ID);
      expect(item.name).to.equal(NAME);
      expect(item.category).to.equal(CATEGORY);
      expect(item.image).to.equal(IMAGE);
      expect(item.cost).to.equal(COST);
      expect(item.rating).to.equal(RATING);
      expect(item.stock).to.equal(STOCK);
    });

   it( "Emits list event", () => {
    expect(transaction).to.emit(dappazon, "List")
   })

  });


// // 

//  it( "Updates buyer's order count", async() => {
//   const result = await dappazon.orderCount(buyer.address)

//   expect(result).to.equal(1)
//  })
 
//  it("Adds the order", async ()=> {
//   const order = await dappazon.orders(buyer.address, 1)

//   expect(order.time).to.be.greaterThan(0)
//   expect(order.item.name).to.equal(NAME)
//  })


describe("Buying", () => {
  let transaction;

  const ID = 1
const NAME = "Shoes"
const CATEGORY = "Clothing"
const IMAGE = "https://ipfs.io/ipfs/QmTYEboq8raiBs7GTUg2yLXB3PMz6HuBNgNfSZBx5Msztg/shoes.jpg"
const COST = tokens(1)
const RATING = 4
const STOCK = 5


  beforeEach(async () => { 
    transaction = await dappazon.connect(deployer).list(
      ID,
      NAME,
      CATEGORY,
      IMAGE,
      COST,
      RATING,
      STOCK
    );
    await transaction.wait();

    transaction = await dappazon.connect(buyer).buy(ID, {value: COST})
  });

 
  it( "Updates the contract balance", async() => {
    
    const result = await ethers.provider.getBalance(deployer.address)
    console.log(COST)
    // expect(result).to.be.equal(COST)
})

 it("Updates buyer's order count", async() => {
  const result = await dappazon.orderCount(buyer.address)
  expect(result).to.equal(1)
 })



it("Adds the order", async() =>{
  const order = await dappazon.orders(buyer.address, 1)

  expect(order.time).to.be.greaterThan(0)
  expect(order.item.name).to.equal(NAME)
  })

  it("Emits buy event", () => {
    expect(transaction).to.emit(dappazon, "Buy")
  })
});


describe("Withdrawing", () => {
  let balanceBefore

  const ID = 1
  const NAME = "Shoes"
  const CATEGORY = "Clothing"
  const IMAGE = "https://ipfs.io/ipfs/QmTYEboq8raiBs7GTUg2yLXB3PMz6HuBNgNfSZBx5Msztg/shoes.jpg"
  const COST = tokens(1)
  const RATING = 4
  const STOCK = 5

  beforeEach(async () => {
    // List a item
    let transaction = await dappazon.connect(deployer).list(ID, NAME, CATEGORY, IMAGE, COST, RATING, STOCK)
    await transaction.wait()

    // Buy a item
    transaction = await dappazon.connect(buyer).buy(ID, { value: COST })
    await transaction.wait()

    // Get Deployer balance before
    balanceBefore = await ethers.provider.getBalance(deployer.address)

    // Withdraw
    transaction = await dappazon.connect(deployer).withdraw()
    await transaction.wait()
  })

  it('Updates the owner balance', async () => {
    const balanceAfter = await ethers.provider.getBalance(deployer.address)
    expect(balanceAfter).to.be.greaterThan(balanceBefore)
  })

  it('Updates the contract balance', async () => {
    
    const result = await ethers.provider.getBalance(deployer.address)
    console.log(result)
    // expect(result).to.be.equal(0)
    // const result = await ethers.provider.getBalance(dappazon.address)
    // expect(result).to.be.equal()
  })
})


// 




});