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
    email: email
  }
  };
  let business = {
  name: "Transition Mode",

  addCustomer(name, phone, address, email) {
    let newCustomer = createCustomer(name, phone, address, email);
    memory.customers.push(newCustomer);
  }
};
  business.addCustomer("Johnson City Country Club", "", "", "");
business.addCustomer("Juan Siao", "", "", "");
business.addCustomer("Southern Craft JC", "", "", "");

console.log(memory);

  

  
  
