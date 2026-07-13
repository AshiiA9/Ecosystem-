// Digital Ecosystem v0.8 — Clean UI Foundation

const appState = {
  activeSection: "today",
  activeWorkPanel: "dashboard",
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

const sectionIds = {
  today: "todaySection",
  work: "workSection",
  family: "familySection",
  home: "homeSection",
  money: "moneySection",
  health: "healthSection",
  gdd: "gddSection",
  pie: "pieSection"
};

const workPanelIds = {
  dashboard: "workDashboardPanel",
  schedule: "workSchedulePanel",
  spending: "workSpendingPanel",
  notes: "workNotesPanel",
  insights: "workInsightsPanel",
  inventory: "workInventoryPanel"
};

function getElement(id) {
  return document.getElementById(id);
}

function openMenu() {
  getElement("sideNavigation")?.classList.add("open");
  getElement("menuOverlay")?.classList.add("open");
}

function closeMenu() {
  getElement("sideNavigation")?.classList.remove("open");
  getElement("menuOverlay")?.classList.remove("open");
}

function showSection(sectionName) {
  const targetId = sectionIds[sectionName];

  if (!targetId) {
    return;
  }

  appState.activeSection = sectionName;

  document.querySelectorAll(".app-section").forEach(section => {
    section.classList.remove("active-section");
  });

  getElement(targetId)?.classList.add("active-section");

  document.querySelectorAll(".nav-link").forEach(link => {
    link.classList.toggle("active", link.dataset.section === sectionName);
  });

  closeMenu();
}

function showWorkPanel(panelName) {
  const targetId = workPanelIds[panelName];

  if (!targetId) {
    return;
  }

  appState.activeWorkPanel = panelName;

  document.querySelectorAll(".work-panel").forEach(panel => {
    panel.classList.remove("active-work-panel");
  });

  getElement(targetId)?.classList.add("active-work-panel");

  document.querySelectorAll(".work-tab").forEach(tab => {
    tab.classList.toggle("active", tab.dataset.workTab === panelName);
  });
}

function askPie() {
  const input = getElement("pieInput");
  const responseBox = getElement("pieResponse");

  if (!input || !responseBox) {
    return;
  }

  const question = input.value.trim().toLowerCase();

  if (!question) {
    responseBox.innerHTML = "Ask me about work, schedule, health, products, or today.";
    return;
  }

  if (question.includes("work")) {
    responseBox.innerHTML =
      "Your Work section is the first serious module. We’ll connect schedule intake, product needs, route summaries, and cost insights here.";
  } else if (question.includes("health")) {
    responseBox.innerHTML =
      "Your Health section is starting with daily checklist tracking. Later, I can help with routines, goals, and patterns.";
  } else if (question.includes("schedule")) {
    responseBox.innerHTML =
      "Schedule Intake is next: CSV import, manual quick add, pasted schedule text, and later screenshot/OCR.";
  } else if (question.includes("product")) {
    responseBox.innerHTML =
      "Once jobs are imported, I’ll compare service types against your product map and predict what you likely need.";
  } else if (question.includes("today")) {
    responseBox.innerHTML =
      "Today’s Snapshot is designed to merge work, family, health, and notes into one quick daily operating screen.";
  } else {
    responseBox.innerHTML =
      "Pie is awake. I can help explain Work, Schedule, Health, Products, and Today’s Snapshot.";
  }
}

function updateTodaySnapshot() {
  const services = appState.memory.services;

  const jobCount = getElement("todayJobCount");
  const startTime = getElement("todayStartTime");
  const endTime = getElement("todayEndTime");
  const jobTypes = getElement("todayJobTypes");

  if (jobCount) jobCount.innerText = services.length;
  if (startTime) startTime.innerText = "Not set";
  if (endTime) endTime.innerText = "Not set";
  if (jobTypes) jobTypes.innerText = "None yet";
}

function setupEventListeners() {
  getElement("menuToggle")?.addEventListener("click", openMenu);
  getElement("headerPieButton")?.addEventListener("click", () => showSection("pie"));
  getElement("menuOverlay")?.addEventListener("click", closeMenu);
  getElement("askPieButton")?.addEventListener("click", askPie);

  document.addEventListener("click", event => {
    const navLink = event.target.closest(".nav-link");

    if (navLink) {
      showSection(navLink.dataset.section);
      return;
    }

    const sectionJump = event.target.closest("[data-section-jump]");

    if (sectionJump) {
      showSection(sectionJump.dataset.sectionJump);

      if (sectionJump.dataset.workJump) {
        showWorkPanel(sectionJump.dataset.workJump);
      }

      return;
    }

    const workTab = event.target.closest(".work-tab");

    if (workTab) {
      showWorkPanel(workTab.dataset.workTab);
    }
  });
}

function startApp() {
  setupEventListeners();
  updateTodaySnapshot();
  showSection("today");
  showWorkPanel("dashboard");
}

document.addEventListener("DOMContentLoaded", startApp);
