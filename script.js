// Get all CONTAINERS

let aboutContainer = document.querySelector(".hero-part");
let skillsContainer = document.querySelector(".skills-part");
let projectsContainer = document.querySelector(".project-part");
let tableContainer = document.querySelector(".table-project-container");

// Get BTNS from About section
let aboutBtnAbout = document.getElementById("about-menu-btn-about");
let skillsBtnAbout = document.getElementById("about-menu-btn-skills");
let projectsBtnAbout = document.getElementById("about-menu-btn-projects");
let contactBtnAbout = document.getElementById("about-menu-btn-contact");

// Get BTNS from Skills section
let aboutBtnSkills = document.getElementById("skills-menu-btn-about");
let skillsBtnSkills = document.getElementById("skills-menu-btn-skills");
let projectsBtnSkills = document.getElementById("skills-menu-btn-projects");
let contactBtnSkills = document.getElementById("skills-menu-btn-contact");

// Get BTNS from Projects section
let aboutBtnProjects = document.getElementById("projects-menu-btn-about");
let skillsBtnProjects = document.getElementById("projects-menu-btn-skills");
let projectsBtnProjects = document.getElementById("projects-menu-btn-projects");
let contactBtnProjects = document.getElementById("projects-menu-btn-contact");

// Function to HIDE all Containers
function hideAllContainers() {
    aboutContainer.style.display = "none";
    skillsContainer.style.display = "none";
    projectsContainer.style.display = "none";
    tableContainer.style.display = "none";
};

// Function to SHOW the CORRECT Container
function showCorrectContainer(container) {
    hideAllContainers();
    container.style.display = "flex";
}

// HIDE All Containers but show About container by Default
hideAllContainers();
aboutContainer.style.display = "flex";

// Add Event listeners for Btns in About Section
aboutBtnAbout.addEventListener('click', function() {showCorrectContainer(aboutContainer)});
skillsBtnAbout.addEventListener('click', function() {showCorrectContainer(skillsContainer)});
projectsBtnAbout.addEventListener('click', function() {showCorrectContainer(projectsContainer)});

// Add Event listeners for Btns in Skills Section
aboutBtnSkills.addEventListener('click', function() {showCorrectContainer(aboutContainer)});
skillsBtnSkills.addEventListener('click', function() {showCorrectContainer(skillsContainer)});
projectsBtnSkills.addEventListener('click', function() {showCorrectContainer(projectsContainer)});

// Add Event listeners for Btns in Projects Section
aboutBtnProjects.addEventListener('click', function() {showCorrectContainer(aboutContainer)});
skillsBtnProjects.addEventListener('click', function() {showCorrectContainer(skillsContainer)});
projectsBtnProjects.addEventListener('click', function() {showCorrectContainer(projectsContainer)});

// Get All Projects Btn
let allProjectBtn =  document.querySelector(".left-btn-archive");

// Get Back Arrow from Table Projects Container
let backArrow = document.querySelector(".projects-back-arrow");

// Add Event Listener to the View Full Project Archive Btn
allProjectBtn.addEventListener('click', function() {showCorrectContainer(tableContainer)});

// Add Event Listener to the Back Arrow in Table Project Container
backArrow.addEventListener('click', function() {showCorrectContainer(projectsContainer)});

