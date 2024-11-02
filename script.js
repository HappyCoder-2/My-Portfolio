// NAV-BAR MENU Functionality
// Get Menu-Icons

let homeBtn = document.getElementById("icon-home");
let aboutBtn = document.getElementById("icon-about");
let skillsBtn = document.getElementById("icon-skills");
let portfolioBtn = document.getElementById("icon-portfolio");
let blogBtn = document.getElementById("icon-blog");
let learningBtn = document.getElementById("icon-learning");

// Get All Sections
let heroSection = document.querySelector(".hero-container");
let aboutSection = document.querySelector(".about-container");
let skillsSection = document.querySelector(".skills-container");
let portfolioSection = document.querySelector(".portfolio-section");
let blogSection = document.querySelector(".blog-section");
let learningSection = document.querySelector(".learning-section");


// Add Events to the Menu-Icons

homeBtn.addEventListener('click', function() {
    heroSection.style.display = "flex";
    aboutSection.style.display = "none";
    skillsSection.style.display = "none";
    portfolioSection.style.display = "none";
    blogSection.style.display = "none";
    learningSection.style.display = "none";
});

aboutBtn.addEventListener('click', function() {
    heroSection.style.display = "none";
    aboutSection.style.display = "flex";
    skillsSection.style.display = "none";
    portfolioSection.style.display = "none";
    blogSection.style.display = "none";
    learningSection.style.display = "none";
});

skillsBtn.addEventListener('click', function() {
    heroSection.style.display = "none";
    aboutSection.style.display = "none";
    skillsSection.style.display = "flex";
    portfolioSection.style.display = "none";
    blogSection.style.display = "none";
    learningSection.style.display = "none";
});

portfolioBtn.addEventListener('click', function() {
    heroSection.style.display = "none";
    aboutSection.style.display = "none";
    skillsSection.style.display = "none";
    portfolioSection.style.display = "flex";
    blogSection.style.display = "none";
    learningSection.style.display = "none";
});

blogBtn.addEventListener('click', function() {
    heroSection.style.display = "none";
    aboutSection.style.display = "none";
    skillsSection.style.display = "none";
    portfolioSection.style.display = "none";
    blogSection.style.display = "flex";
    learningSection.style.display = "none";
});

learningBtn.addEventListener('click', function() {
    heroSection.style.display = "none";
    aboutSection.style.display = "none";
    skillsSection.style.display = "none";
    portfolioSection.style.display = "none";
    blogSection.style.display = "none";
    learningSection.style.display = "flex";
});

/*// ABOUT SECTION FUNCTIONALITY

// Get html/css/js arrows
let htmlArrow = document.querySelector(".card-hover-title-html");
let cssArrow = document.querySelector(".card-hover-title-css");
let jsArrow = document.querySelector(".card-hover-title-js");

let htmlHiddenText = document.getElementById("hidden-html");
let cssHiddenText = document.getElementById("hidden-css");
let jsHiddenText = document.getElementById("hidden-js");

// Initially HIDE text containers
htmlHiddenText.style.display = "none";
cssHiddenText.style.display = "none";
jsHiddenText.style.display = "none";

// Add Events to the About-arrow-html/css/js
htmlArrow.addEventListener('click', function() {
    if (htmlHiddenText.style.display === "none") {
        htmlHiddenText.style.display = "flex";
    }
    else {
        htmlHiddenText.style.display = "none";
    }
});

cssArrow.addEventListener('click', function() {
    if (cssHiddenText.style.display === "none") {
        cssHiddenText.style.display = "flex";
    }
    else {
        cssHiddenText.style.display = "none";
    }
});

jsArrow.addEventListener('click', function() {
    if (jsHiddenText.style.display === "none") {
        jsHiddenText.style.display = "flex";
    }
    else {
        jsHiddenText.style.display = "none";
    }
});*/

// PORTFOLIO Section Functionality
// Get Menu-Btns 
let appBtn = document.getElementById("menu-icon-app");
let webBtn = document.getElementById("menu-icon-web");

// Get App and Web Grids
let appGrid = document.querySelector(".portfolio-grid-part");
let webGrid = document.querySelector(".portfolio-grid-part-websites");

// Initially HIDE App/Web Grids
// appGrid.style.display = "none"
webGrid.style.display = "none"

// Add Events to the appBtn and webBtn
appBtn.addEventListener('click', function() {
    appGrid.style.display = "grid"
    webGrid.style.display = "none"
});

webBtn.addEventListener('click', function() {
    appGrid.style.display = "none"
    webGrid.style.display = "grid"
});

// BLOG Section Functionallity

// Get html/css/js Checkout Btns
let htmlCheckoutBtn = document.getElementById("check-out-html");
let cssCheckoutBtn = document.getElementById("check-out-css");
let jsCheckoutBtn = document.getElementById("check-out-js");

// Get html/css/js learning containers
let htmlLearnCont = document.getElementById("learning-container-html");
let cssLearnCont = document.getElementById("learning-container-css");
let jsLearnCont = document.getElementById("learning-container-js");

let blogSectionHide = document.querySelector(".blog-section");
let LearningSection = document.querySelector(".learning-section");

// Add Events to the Btns
htmlCheckoutBtn.addEventListener('click', function() {
    htmlLearnCont.style.display = "flex";
    cssLearnCont.style.display = "none";
    jsLearnCont.style.display = "none";
    blogSectionHide.style.display = "none";
    LearningSection.style.display = "flex";
});

cssCheckoutBtn.addEventListener('click', function() {
    htmlLearnCont.style.display = "none";
    cssLearnCont.style.display = "flex";
    jsLearnCont.style.display = "none";
    blogSectionHide.style.display = "none";
    LearningSection.style.display = "flex";
});

jsCheckoutBtn.addEventListener('click', function() {
    htmlLearnCont.style.display = "none";
    cssLearnCont.style.display = "none";
    jsLearnCont.style.display = "flex";
    blogSectionHide.style.display = "none";
    LearningSection.style.display = "flex";
});

// ADD EVENTS TO THE FOOTER MENU ITEMS
// Get the Menu-Items
let footerHomeBtn = document.getElementById("footer-home-btn");
let footerAboutBtn = document.getElementById("footer-about-btn");
let footerSkillsBtn = document.getElementById("footer-skills-btn");
let footerPortfolioBtn = document.getElementById("footer-portfolio-btn");
let footerBlogBtn = document.getElementById("footer-blog-btn");
let footerLearningBtn = document.getElementById("footer-learning-btn");

// Get All Sections

let footerHomeCon = document.querySelector(".hero-container");
let footerAboutCon = document.querySelector(".about-container");
let footerSkillsCon = document.querySelector(".skills-container");
let footerPortfolioCon = document.querySelector(".portfolio-section");
let footerBlogCon = document.querySelector(".blog-section");
let footerLearningCon = document.querySelector(".learning-section");

// Add Events to the Footer Menu Items
footerHomeBtn.addEventListener('click', function() {
    footerHomeCon.style.display = "flex";
    footerAboutCon.style.display = "none";
    footerSkillsCon.style.display = "none";
    footerPortfolioCon.style.display = "none";
    footerBlogCon.style.display = "none";
    footerLearningCon.style.display = "none";
});

footerAboutBtn.addEventListener('click', function() {
    footerHomeCon.style.display = "none";
    footerAboutCon.style.display = "flex";
    footerSkillsCon.style.display = "none";
    footerPortfolioCon.style.display = "none";
    footerBlogCon.style.display = "none";
    footerLearningCon.style.display = "none";
});

footerSkillsBtn.addEventListener('click', function() {
    footerHomeCon.style.display = "none";
    footerAboutCon.style.display = "none";
    footerSkillsCon.style.display = "flex";
    footerPortfolioCon.style.display = "none";
    footerBlogCon.style.display = "none";
    footerLearningCon.style.display = "none";
});

footerPortfolioBtn.addEventListener('click', function() {
    footerHomeCon.style.display = "none";
    footerAboutCon.style.display = "none";
    footerSkillsCon.style.display = "none";
    footerPortfolioCon.style.display = "flex";
    footerBlogCon.style.display = "none";
    footerLearningCon.style.display = "none";
});

footerBlogBtn.addEventListener('click', function() {
    footerHomeCon.style.display = "none";
    footerAboutCon.style.display = "none";
    footerSkillsCon.style.display = "none";
    footerPortfolioCon.style.display = "none";
    footerBlogCon.style.display = "flex";
    footerLearningCon.style.display = "none";
});

footerLearningBtn.addEventListener('click', function() {
    footerHomeCon.style.display = "none";
    footerAboutCon.style.display = "none";
    footerSkillsCon.style.display = "none";
    footerPortfolioCon.style.display = "none";
    footerBlogCon.style.display = "none";
    footerLearningCon.style.display = "flex";
});

// NAV-BAR Responsive Design

// Get Burger Menu Icon
let burgerIcon = document.querySelector(".menu-burger-icon");

// Get Normal Menu Icons
let menuIcons = document.querySelector(".menu-laptop");

// Initially Hide Menu Icons
menuIcons.style.display = "none";

// Toggle Menu on Burger Icon Click
burgerIcon.addEventListener('click', function(event) {
    event.stopPropagation();
    if (menuIcons.style.display === "none") {
        menuIcons.style.display = "flex";
    } else {
        menuIcons.style.display = "none";
    }
});

// Close Menu on Outside Click
document.addEventListener('click', function(event) {
    if (!menuIcons.contains(event.target) && !burgerIcon.contains(event.target)) {
        menuIcons.style.display = "none";
    }
});

// Media query for responsiveness
let mediaQuery = window.matchMedia("(min-width: 375px) and (max-width: 990px)");

function applyMenuEvents() {
    if (mediaQuery.matches) {
        // Initially hide menu icons
        menuIcons.style.display = "none";
        
        // Add event listeners
        burgerIcon.addEventListener('click', toggleMenu);
        document.addEventListener('click', closeMenuOnClickOutside);
    } else {
        // Remove event listeners outside the specified range
        burgerIcon.removeEventListener('click', toggleMenu);
        document.removeEventListener('click', closeMenuOnClickOutside);
        menuIcons.style.display = "flex"; // Always visible on larger screens
    }
}

// Initial setup
applyMenuEvents();

// Listen for changes in screen width
mediaQuery.addEventListener("change", applyMenuEvents);
