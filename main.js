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

/*==================== Sending email contact ====================*/
const sendEmail = () => {
  let params = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    subject: document.getElementById("subject").value,
    message: document.getElementById("message").value,
  };

  const serviceID = "service_6p5dce4";
  const templateID = "template_z21ab04";

  emailjs
    .send(serviceID, templateID, params)
    .then((response) => {
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("subject").value = "";
    document.getElementById("message").value = "";
    console.log(response);
    alert("Your message was sent succesfully!");
  })
  .catch((err) => console.log(err));
}
