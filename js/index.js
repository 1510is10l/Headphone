let header = document.querySelector('header');

window.addEventListener('scroll', () =>{
    header.classList.toggle('shadow', window.scrollY > 0);
});

let menu = document.querySelector('#menu_icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

window.onscroll = () =>{
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
}

const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
})

sr.reveal('.home_text, .buds_text',{origin: 'right'});
sr.reveal('.home_img, .buds_img',{origin: 'left'});
sr.reveal('.heading',{delay: 200});
sr.reveal('.specs_details .box',{origin: 'right', interval: 200});
sr.reveal('.specs_img',{delay: 600});
sr.reveal('.shop_container .box, .footer .logo, .footer .footer_box',{interval: 150});
