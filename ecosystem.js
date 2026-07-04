// ==========================================
// Digital Ecosystem
//
// Founder: Ash
//
// Version: 0.6 Foundation
//
// Started: 2026
//
// ==========================================
/*
==================================================

Digital Ecosystem Principles

1. Objects own information.
2. Functions perform actions.
3. Memory stores facts.
4. Knowledge Engine studies Memory.
5. Business makes final decisions.

==================================================
*/
let memory = { 
  customers: [ ]
};
function createCustomer (name, phone, address, email) {
  return {
    name: name, 
    phone: phone,
    address: address,
    email: email,
  };
}
let customer1 = createCustomer("Johnson City Country Club", " ", " ", " ");
let customer2 = createCustomer("Juan Siao", " ", " ", " ");
let customer3 = createCustomer("Southern Craft JC", " ", " ", " ");

memory.customers.push(customer1);
memory.customers.push(customer2);
memory.customers.push(customer3);
console.log(memory);
  

  
  
