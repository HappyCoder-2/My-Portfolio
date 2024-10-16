// Scroll down button
function nextDiv() {
  const scrollAmount = window.innerHeight; 
  window.scrollBy(0, scrollAmount);
}

// About onclick function
function skillsToolsAbout() {
  const skillsSection = document.querySelector('.skills');
  skillsSection.scrollIntoView({ behavior: 'smooth' });
}

// Portfolio onclick function
function toPortfolio() {
  const portfolioSection = document.querySelector('.container-portfolio');
  portfolioSection.scrollIntoView({ behavior: 'smooth' });
}

// Projects onclick function
function travelBlog() {
  const projectOneSection = document.querySelector('.projectTravel');
  projectOneSection.scrollIntoView({ behavior: 'smooth' });
}

function eCommerce() {
  const projectTwoSection = document.querySelector('.projectCommerce');
  projectTwoSection.scrollIntoView({ behavior: 'smooth' });
}

function theFlavourist() {
  const projectThreeSection = document.querySelector('.projectFlavourist');
  projectThreeSection.scrollIntoView({ behavior: 'smooth' });
}

function theApartment() {
  const projectFourSection = document.querySelector('.projectApartment');
  projectFourSection.scrollIntoView({ behavior: 'smooth' });
}

function theShoebox() {
  const projectFiveSection = document.querySelector('.projectShoebox');
  projectFiveSection.scrollIntoView({ behavior: 'smooth' });
}

// Homeworks onclick function
function workOne() {
  const projectOneSection = document.querySelector('.titleTravel');
  projectOneSection.scrollIntoView({ behavior: 'smooth' });
}

function workTwo() {
  const projectTwoSection = document.querySelector('.titleRun');
  projectTwoSection.scrollIntoView({ behavior: 'smooth' });
}

function workThree() {
  const projectThreeSection = document.querySelector('.titleFlavourist');
  projectThreeSection.scrollIntoView({ behavior: 'smooth' });
}

function workFour() {
  const projectFourSection = document.querySelector('.titleApartment');
  projectFourSection.scrollIntoView({ behavior: 'smooth' });
}

function workFive() {
  const projectFiveSection = document.querySelector('.titleMountain');
  projectFiveSection.scrollIntoView({ behavior: 'smooth' });
}

// Footer onclick function
function footAbout() {
  const footerAboutSection = document.querySelector('.about-me-1');
  footerAboutSection.scrollIntoView({ behavior: 'smooth' });
}