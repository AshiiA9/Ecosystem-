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
function createService ( customer, time, date, serviceType, status, cost, duration) {
  return  {
    customer: customer,
    time: time,
    date: date,
    serviceType: serviceType,
    status: status,
    cost: cost,
    duration: duration
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
    addService(customer, time, date, serviceType, status, cost, duration) {
    let newService = createService(customer, time, date, serviceType, status, cost, duration);
    memory.services.push(newService);
    },
    countScheduledServices( ) {
      return memory.services.length;
    },
    calculateProjectedRevenue( ) {
      let total = 0;
      for (let service of memory.services) {
        total += service.cost;
      }
        return total;
      },
    findNextService() {
      return memory.services[0];
    },
    findLongestService() {
  let longestService = memory.services[0];

  for (let service of memory.services) {
    if (service.duration > longestService.duration) {
      longestService = service;
    }
  }

  return longestService;
   },

    findHighestRevenueService() {
  let highestService = memory.services[0];

  for (let service of memory.services) {
    if (service.cost > highestService.cost) {
      highestService = service;
    }
  }

  return highestService;
},
    findLowestRevenueService() {
     let lowestService = memory.services[0];

      for (let service of memory.services) {
        if (service.cost < lowestService.cost) {
        lowestService = service;
      }
    }

    return lowestService;
}
  };

let knowledgeEngine = {
  studyServices() {
    return "I studied " + memory.services.length
  }
}

    function askPie() {
  let question = document.getElementById("pieInput").value.toLowerCase();
  let responseBox = document.getElementById("pieResponse");

  if (question.includes("services")) {
    responseBox.innerHTML =
      "You have " +
      business.countScheduledServices() +
      " scheduled services today.";
  } else if (question.includes("revenue")) {
    responseBox.innerHTML = 
      "Projected revenue is $" +
      business.calculateProjectedRevenue() +
      ".";
  } else if (question.includes("next")) {
    let nextService = business.findNextService();

    responseBox.innerHTML = 
      "Your next service is " +
      nextService.customer +
      " at " +
      nextService.time +
      ".";
  } else {
    responseBox.innerHTML =
      "Pie is awake, but she does not know how to answer that yet.";
  }
}
 
  


  business.addCustomer("Johnson City Country Club", "", "", "");
business.addCustomer("Juan Siao", "", "", "");
business.addCustomer("Southern Craft JC", "", "", "");
business.addService("Johnson City Country Club", "8:00AM", "July 7th 2026", "Bi-Weekly", "Scheduled", 65, 30);
business.addService("Juan Siao", "8:40AM", "July 7th 2026", "Weekly", "Scheduled", 32.5, 30);
business.addService("Southern Craft JC", "9:13AM", "July 7th 2026", "Weekly", "Scheduled", 75, 30);

                              
 
let serviceList = document.getElementById("serviceList");

serviceList.innerHTML = "";

for (let service of memory.services) {
  serviceList.innerHTML += `
    <div class="serviceCard">
      <strong>${service.customer}</strong><br>
      ${service.time} • ${service.date}<br>
      ${service.serviceType} • ${service.status} • $${service.cost} • ${service.duration} mins
    </div>
  `;
}

serviceList.innerHTML += `<br><strong>Total Services: ${business.countScheduledServices()}</strong>`;
serviceList.innerHTML += `<br><strong>Projected Revenue: $${business.calculateProjectedRevenue()}</strong>`;
serviceList.innerHTML += `<br><strong>Knowledge Engine:</strong>
  ${knowledgeEngine.studyServices()}
`;

let nextService = business.findNextService();
serviceList.innerHTML += `<br><strong>Next Service: ${nextService.customer} at ${nextService.time}</strong>`;

let longestService = business.findLongestService();
serviceList.innerHTML += `<br><strong>Longest Service: ${longestService.customer} - ${longestService.duration} minutes</strong>`;

let highestService = business.findHighestRevenueService();
serviceList.innerHTML += `<br><strong>Highest Revenue Service: ${highestService.customer} - $${highestService.cost}</strong>`;

let lowestService = business.findLowestRevenueService();
serviceList.innerHTML += `<br><strong>Lowest Revenue Service: ${lowestService.customer} - $${lowestService.cost}</strong>`;


