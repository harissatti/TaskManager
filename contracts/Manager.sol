// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;
contract Manager{
    struct Ticket{
        uint256 status;
        string name;
    }
    Ticket[] public tickets;
    function createTicket(string memory _name) external{
        tickets.push(Ticket(0,_name));
    }
    function updateTicketName(uint _index,string memory _name) external{
        tickets[_index].name=_name;
    }
    function updateTicketStatus(uint _index,uint _status) external{
        tickets[_index].status=_status;
    }
    function getTickets()external view returns(Ticket[] memory){
         return tickets; 
    }

}