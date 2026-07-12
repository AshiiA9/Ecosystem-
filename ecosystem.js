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
// 2. Safe Element Finder
// ==========================================

function getElement(id) {
  return document.getElementById(id);
}


// ==========================================
// 3. Main Navigation
// ==========================================

function openMenu() {
  const sideNavigation = getElement("sideNavigation");
  const menuOverlay = getElement("menuOverlay");

  if (sideNavigation) {
    sideNavigation.classList.add("open");
  }

  if (menuOverlay) {
    menuOverlay.classList.add("open");
  }
}

function closeMenu() {
  const sideNavigation = getElement("sideNavigation");
  const menuOverlay = getElement("menuOverlay");

  if (sideNavigation) {
    sideNavigation.classList.remove("open");
  }

  if (menuOverlay) {
    menuOverlay.classList.remove("open");
  }
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
// 4. Work / Company Tabs
// ==========================================

function showWorkPanel(panelName) {
  const panelMap = {
    dashboard: "workDashboardPanel",
    schedule: "workSchedulePanel",
    spending: "workSpendingPanel",
    notes: "workNotesPanel",
    insights: "workInsightsPanel",
    inventory: "workInventoryPanel"
  };

  const targetPanelId = panelMap[panelName];

  if (!targetPanelId) {
    return;
  }

  const allWorkTabs = document.querySelectorAll(".work-tab");

  for (let tab of allWorkTabs) {
    tab.classList.remove("active");
  }

  const activeTab = document.querySelector(`[data-work-tab="${panelName}"]`);

  if (activeTab) {
    activeTab.classList.add("active");
  }

  const allWorkPanels = document.querySelectorAll(".work-panel");

  for (let panel of allWorkPanels) {
    panel.classList.remove("active-work-panel");
  }

  const targetPanel = getElement(targetPanelId);

  if (targetPanel) {
    targetPanel.classList.add("active-work-panel");
  }
}


// ==========================================
// 5. Pie Assistant
// ==========================================

function askPie() {
  const input = getElement("pieInput");
  const responseBox = getElement("pieResponse");

  if (!input || !responseBox) {
    return;
  }

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
// 6. Today Snapshot Rendering
// ==========================================

function updateTodaySnapshot() {
  const jobCount = getElement("todayJobCount");
  const startTime = getElement("todayStartTime");
  const endTime = getElement("todayEndTime");
  const jobTypes = getElement("todayJobTypes");

  if (jobCount) {
    jobCount.innerText = appState.memory.services.length;
  }

  if (startTime) {
    startTime.innerText = "Not set";
  }

  if (endTime) {
    endTime.innerText = "Not set";
  }

  if (jobTypes) {
    jobTypes.innerText = "None yet";
  }
}


// ==========================================
// 7. Event Listeners
// ==========================================

function setupEventListeners() {
  const menuToggle = getElement("menuToggle");
  const menuOverlay = getElement("menuOverlay");
  const pieButton = getElement("askPieButton");

  if (menuToggle) {
    menuToggle.addEventListener("click", openMenu);
  }

  if (menuOverlay) {
    menuOverlay.addEventListener("click", closeMenu);
  }

  if (pieButton) {
    pieButton.addEventListener("click", askPie);
  }

  document.addEventListener("click", function (event) {
    const clickedNavLink = event.target.closest(".nav-link");

    if (clickedNavLink) {
      const sectionName = clickedNavLink.dataset.section;
      showSection(sectionName);
      return;
    }

    const clickedWorkTab = event.target.closest(".work-tab");

    if (clickedWorkTab) {
      const panelName = clickedWorkTab.dataset.workTab;
      showWorkPanel(panelName);
    }
  });
}


// ==========================================
// 8. App Startup
// ==========================================

function startApp() {
  setupEventListeners();
  updateTodaySnapshot();
}

document.addEventListener("DOMContentLoaded", startApp);
