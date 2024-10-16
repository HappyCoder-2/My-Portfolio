// Scroll down button
function nextDiv() {
  const scrollAmount = window.innerHeight; 
  window.scrollBy(0, scrollAmount);
}

function html_container() {
  const skillsSection = document.querySelector('.html-title');
  skillsSection.scrollIntoView({ behavior: 'smooth' });
}

function css_container() {
  const skillsSection = document.querySelector('.css-title');
  skillsSection.scrollIntoView({ behavior: 'smooth' });
}

function js_container() {
  const skillsSection = document.querySelector('.js-title');
  skillsSection.scrollIntoView({ behavior: 'smooth' });
}
