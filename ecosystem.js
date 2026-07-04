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
  customers: [ ],
  services: [ ]
  
};
function createCustomer (name, phone, address, email) {
  return {
    name: name, 
    phone: phone,
    address: address,
    email: email
  }
  };
function createService ( customer, time, date, serviceType, status, cost) {
  return  {
    customer: customer,
    time: time,
    date: date,
    serviceType: serviceType,
    status: status,
    cost: cost
  }
};
    
  let business = {
  name: "Transition Mode",
  mode: "Transition", 

    capabilities: {
      customerContact: false,
      liveScheduling: false,
      invoicing: false, 
      paymentProcessing: false,
      onlineBooking: false, 

      dataCollection: true,
      reporting: true,
      knowledgeEngine: true
    },
    addCustomer(name, phone, address, email) {
      let newCustomer = createCustomer(name, phone, address, email);
      memory.customers.push(newCustomer);
    },
    addService(customer, time, date, serviceType, status, cost) {
    let newService = createService(customer, time, date, serviceType, status, cost);
    memory.services.push(newService);
    
   };

  business.addCustomer("Johnson City Country Club", "", "", "");
business.addCustomer("Juan Siao", "", "", "");
business.addCustomer("Southern Craft JC", "", "", "");
business.addService("Johnson City Country Club", "8:00AM", "July 7th 2026", "Bi-Weekly", "Scheduled", 65);
business.addService("Juan Siao", "8:40AM", "July 7th 2026", "Weekly", "Scheduled", 32.5);
business.addService("Southern Craft JC", "9:13AM", "July 7th 2026", "Weekly", "Scheduled", 75);

 let serviceList = document.getElementById("serviceList");
serviceList.innerHTML = "";
for (let service of memory.services) {
  scheduleList.innerHTML +=
    service.customer +
    " - " + 
    service.serviceType +
    "<br>";



