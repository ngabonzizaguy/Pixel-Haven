/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')

if(navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
} 

// MENU HIDE
if(navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () => {
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}

navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== ADD BLUR TO HEADER ===============*/
const blurHeader = () => {
    const header = document.getElementById('header')
    window.scrollY >= 50 ? header.classList.add('blur-header')
                         : header.classList.remove('blur-header')
}

window.addEventListener('scroll', blurHeader)

/*=============== EMAIL JS ===============*/
const contactForm = document.getElementById('contact-form'),
    contactMessage = document.getElementById('contact-message')

const sendEmail = (e) => {
    e.preventDefault()

    // ServiceID - templateID - #form - publickey
    emailjs.sendForm('service_nmufx3m','template_u3cu8lb', '#contact-form', 'XAWXadNPjDhD4VwO2')
        .then(() => {
            // show sent message
            contactMessage.textContent = 'Message sent successfully!'

            setTimeout(() => {
                contactMessage.textContent = ''
            }, 3000)

            contactForm.reset()

        }, () => {
            // show error message
            contactMessage.textContent = 'Message not sent (service error)!'
        })
}

contactForm.addEventListener('submit', sendEmail)

/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp = () => {
    const scrollUp = document.getElementById('scroll-up')

    // when scroll is higher than 350 viewport height, add the show-scroll class to the (a) tag with the scrollup
    window.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                          : scrollUp.classList.remove('show-scroll')
}

window.addEventListener('scroll', scrollUp)

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')

const scrollActive = () => {
    const scrollY = window.pageYOffset

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionID = current.getAttribute('id'),
              sectionClass = document.querySelector('.nav_menu a[href*=' + sectionID + ']')

        if (sectionClass) {  // Check if sectionClass is not null
            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                sectionClass.classList.add('active-link')
            } else {
                sectionClass.classList.remove('active-link')
            }
        }
    })
}

window.addEventListener('scroll', scrollActive)

/*=============== TYPING EFFECT ANIMATION ===============*/
let typingEffect = new Typed(".typedtext", {
    strings: ["Fullstack", "Blockchain"],
    loop: true,
    typeSpeed: 100,
    backSpeed: 80, 
    backDelay: 2000
})

let typingEffect_II = new Typed(".typedtext_II", {
    strings: ["Fullstack", "Blockchain"],
    loop: true,
    typeSpeed: 100,
    backSpeed: 80, 
    backDelay: 2000
})

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400, 
    reset: true // animations repeat
})

sr.reveal(`.home__data, .home__social, .contact__container, .footer__container`)
sr.reveal(`.home__image`, {origin: 'bottom'})
sr.reveal(`.about__data, .skills__data`, {origin: 'left'})
sr.reveal(`.about__image, .skills__content`, {origin: 'right'})
sr.reveal(`.services__card, .projects__card`, {interval: 100})