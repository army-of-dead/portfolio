const menuItems = document.querySelectorAll('.menu ul li a');

const menuAccueil = menuItems[0];
const menuApropos = menuItems[1];
const menuContact = menuItems[2];

menuAccueil.addEventListener('click', () => {
    menuItems.forEach(item => {
        item.classList.remove('active');
    })

    menuItems[0].classList.add('active')
})

menuApropos.addEventListener('click', () => {
    menuItems.forEach(item => {
        item.classList.remove('active');
    })

    menuItems[1].classList.add('active')
})

menuContact.addEventListener('click', () => {
    menuItems.forEach(item => {
        item.classList.remove('active');
    })

    menuItems[2].classList.add('active')
})

const buttonApropos = document.querySelector('.more');

buttonApropos.addEventListener('click', () => {
    window.location.href = '#about-link';
})

const buttonContact = document.querySelector('.btn button');

buttonContact.addEventListener('click', () => {
    window.location.hash = '#contact-link';
})

const buttonSubmit = document.querySelector('form');

buttonSubmit.addEventListener('submit', (e) => {
    alert("Merci pour votre message !!");
})