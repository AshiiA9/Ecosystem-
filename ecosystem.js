// ==========================================
// Digital Ecosystem
// Founder: Ash
// Version: 0.7 Clean Slate Foundation
//
// JavaScript Rule:
// JavaScript owns behavior.
// HTML owns structure.
// CSS owns appearance.
// ==========================================


// ==========================================
// 1. App State
// ==========================================

const appState = {
  activeSection: "today",

  memory: {
    services: [],
    customers: [],
    health: {
      water: false,
      brushedTeethMorning: false,
      stretched: false,
      notes: ""
    }
  }
};


// ==========================================
// 2. Element Finder
// ==========================================

function getElement(id) {
  return document.getElementById(id);
}


// ==========================================
// 3. Navigation
// ==========================================

function openMenu() {
  getElement("sideNavigation").classList.add("open");
  getElement("menuOverlay").classList.add("open");
}

function closeMenu() {
  getElement("sideNavigation").classList.remove("open");
  getElement("menuOverlay").classList.remove("open");
}

function showSection(sectionName) {
  appState.activeSection = sectionName;

  const allSections = document.querySelectorAll(".app-section");

  for (let section of allSections) {
    section.classList.remove("active-section");
  }

  const targetSection = getElement(sectionName + "Section");

  if (targetSection) {
    targetSection.classList.add("active-section");
  }

  const allNavLinks = document.querySelectorAll(".nav-link");

  for (let link of allNavLinks) {
    link.classList.remove("active");
  }

  const activeLink = document.querySelector(`[data-section="${sectionName}"]`);

  if (activeLink) {
    activeLink.classList.add("active");
  }

  closeMenu();
}


// ==========================================
// 4. Pie Assistant
// ==========================================

function askPie() {
  const input = getElement("pieInput");
  const responseBox = getElement("pieResponse");

  const question = input.value.toLowerCase();

  if (question.includes("work")) {
    responseBox.innerHTML =
      "Your Work section will connect to schedule intake first. Once services are in Memory, I’ll summarize jobs, times, service types, and products needed.";
  } else if (question.includes("health")) {
    responseBox.innerHTML =
      "Your Health section is starting with water, brushing teeth, stretching, and notes. We can expand it into routines and goals later.";
  } else if (question.includes("schedule")) {
    responseBox.innerHTML =
      "Schedule intake is planned next. We can support CSV, manual quick add, pasted schedule text, and later screenshot/OCR.";
  } else {
    responseBox.innerHTML =
      "Pie is awake. Right now I can help explain Work, Health, and Schedule planning.";
  }
}


// ==========================================
// 5. Today Snapshot Rendering
// ==========================================

function updateTodaySnapshot() {
  getElement("todayJobCount").innerText = appState.memory.services.length;
  getElement("todayStartTime").innerText = "Not set";
  getElement("todayEndTime").innerText = "Not set";
  getElement("todayJobTypes").innerText = "None yet";
}


// ==========================================
// 6. Event Listeners
// ==========================================

function setupEventListeners() {
  getElement("menuToggle").addEventListener("click", openMenu);
  getElement("menuOverlay").addEventListener("click", closeMenu);

  const navLinks = document.querySelectorAll(".nav-link");

  for (let link of navLinks) {
    link.addEventListener("click", function () {
      const sectionName = link.dataset.section;
      showSection(sectionName);
    });
  }

  getElement("askPieButton").addEventListener("click", askPie);
}

// ==========================================
// 7. Work / Company Tabs
// ==========================================

function showWorkPanel(panelName) {
  const allWorkPanels = document.querySelectorAll(".work-panel");

  for (let panel of allWorkPanels) {
    panel.classList.remove("active-work-panel");
  }

  const targetPanel = getElement("work" + capitalizeFirstLetter(panelName) + "Panel");

  if (targetPanel) {
    targetPanel.classList.add("active-work-panel");
  }

  const allWorkTabs = document.querySelectorAll(".work-tab");

  for (let tab of allWorkTabs) {
    tab.classList.remove("active");
  }

  const activeTab = document.querySelector(`[data-work-tab="${panelName}"]`);

  if (activeTab) {
    activeTab.classList.add("active");
  }
}

function capitalizeFirstLetter(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}


// ==========================================
// 8. App Startup
// ==========================================

function startApp() {
  setupEventListeners();
  updateTodaySnapshot();
}

startApp();
