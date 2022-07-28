
const { expect } = require("chai");
const {ethers}=require("hardhat");

describe("Manager",function(){
  let  manager;
  it("deploying and create new contract",async function(){
    const Manager=await ethers.getContractFactory("Manager");
     manager=await Manager.deploy();
    await manager.deployed();
    await manager.createTicket("IOT");
    let  tickets= await manager.getTickets();
    console.log(tickets);
    expect(tickets[0].name).to.equal("IOT");
  });
  it("should update the ticket name",async function(){
    await manager.updateTicketName(0,"Blockchain");
    let  tickets= await manager.getTickets();
    expect(tickets[0].name).to.equal("Blockchain");
  });
  it("update a ticket status",async function(){
    await manager.updateTicketStatus(0,3);
    let tickets=await manager.getTickets();
    expect(tickets[0].status).to.equal(3);
  });
  it("should return list of ticket",async function(){
    await manager.createTicket("my new ticket");
    await manager.createTicket("my new ticket");
    await manager.createTicket("my new ticket");
    let ticktes=await manager.getTickets();
    expect(ticktes.length).to.equal(4);
  })

})


