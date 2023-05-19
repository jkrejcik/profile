// Menu show and hidden
const navMenu = document.getElementById('nav-menu')
const navToggle = document.getElementById('nav-toggle')
const navClose = document.getElementById('nav-close')

if(navToggle) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.add('show-menu')
  });
}

if(navClose) {
  navClose.addEventListener('click', () => {
    navMenu.classList.remove('show-menu')
  });
}

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== Show scroll UP ====================*/
const scrollUp = () => {
  const scrollUpEl = document.getElementById('scroll-up')
  if(this.scrollY >= 560) {
    scrollUpEl.classList.add('show-scroll')
  } else {
    scrollUpEl.classList.remove('show-scroll')
  }
}
window.addEventListener('scroll', scrollUp)
