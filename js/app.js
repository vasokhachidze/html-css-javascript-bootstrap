const topNavbar=document.querySelector('.top-navbar-section');
const header=document.querySelector('.header-section');
const starter=document.querySelector('.starter');
const about=document.querySelector('.about');
const mobileMenu=document.querySelector('.mobile-menu');
const showMobileMenu=document.querySelector('.show-mobile-menu');
const closeMobileMenu=document.querySelector('.close-mobile-menu');
const whyUsTitle=document.querySelector('.why-us-title');
const whyUsBoxChild=document.querySelectorAll('.why-us-box-child')
const menuTitle=document.querySelector('.menu-title');
const specials=document.querySelector('.specials');
const eventss=document.querySelector('.events');
const reservation=document.querySelector('.reservation');
const testimonials=document.querySelector('.testimonials');
const gallery=document.querySelector('.gallery');
const chefs=document.querySelector('.chefs');
const contact=document.querySelector('.contact');
const footer=document.querySelector('footer');
const events=[
    {
        img:'<img src="images/event-birthday.jpg" alt="">'
    },
    {
        img:'<img src="images/event-birthday.jpg" alt="">'
    },
    {
        img:'<img src="images/event-birthday.jpg" alt="">'
    }
]



showMobileMenu.addEventListener('click',()=>{
    mobileMenu.style.visibility='visible';
})
closeMobileMenu.addEventListener('click',()=>{
    mobileMenu.style.visibility='hidden';
})
setTimeout(start,1500)
function start(){
    starter.style.display='none';
}
window.addEventListener('scroll',()=>{
    headerScroll();
    aboutScroll();
    whyYsScroll();
    menuScroll();
    specialsScroll();
    eventsScroll();
    reservationScroll();
    testimonialsScroll();
    galleryScroll();
    chefsScroll();
    contactScroll();
    footerScroll();
})
function headerScroll(){

    const scrollto=scrollY;
    if(scrollto>=200){
        topNavbar.classList.add('scrolled-topbar');
        header.classList.add('header-scrolled')
    }else{
        topNavbar.classList.remove('scrolled-topbar');
        header.classList.remove('header-scrolled')
    }
}
function aboutScroll(){
    aboutTop=about.getBoundingClientRect().top;
    if(aboutTop<=scrollY){
        about.classList.add('about-scrolled')
    }
}
function whyYsScroll(){
    whyUsTitleTop=whyUsTitle.getBoundingClientRect().top;
    if(whyUsTitleTop<=scrollY-200){
        whyUsTitle.classList.add('why-us-title-scrolled')
    }
    whyUsBoxChild.forEach(box=>{
        whyUsTop=box.getBoundingClientRect().top;
        if(whyUsTop<=scrollY-200){
            box.classList.add('why-us-box-child-scrolled')
        }
        
    })
    
}
function menuScroll(){
    menuTitleTop=menuTitle.getBoundingClientRect().top;

    if(menuTitleTop<=scrollY-200){
        menuTitle.classList.add('menu-title-scroll');
        
    }
}
function specialsScroll(){
    specialsTop=specials.getBoundingClientRect().top;

    if(specialsTop<=scrollY){
        specials.classList.add('specials-scroll');
        
    }
}
function eventsScroll(){
    eventsTop=eventss.getBoundingClientRect().top;

    if(eventsTop<=scrollY-200){
        eventss.classList.add('events-scroll');
        
    }
}
function reservationScroll(){
    reservationTop=reservation.getBoundingClientRect().top;

    if(reservationTop<=scrollY-200){
        reservation.classList.add('reservation-scroll');
        
    }
}
function testimonialsScroll(){
    testimonialsTop=testimonials.getBoundingClientRect().top;

    if(testimonialsTop<=scrollY-200){
        testimonials.classList.add('testimonials-scroll');
        
    }
}
function galleryScroll(){
    galleryTop=gallery.getBoundingClientRect().top;

    if(galleryTop<=scrollY-200){
        gallery.classList.add('gallery-scroll');
        
    }
}
function chefsScroll(){
    chefsTop=chefs.getBoundingClientRect().top;

    if(chefsTop<=scrollY-200){
        chefs.classList.add('chefs-scroll');
        
    }
}
function contactScroll(){
    contactTop=contact.getBoundingClientRect().top;

    if(contactTop<=scrollY-200){
        contact.classList.add('contact-scroll');
        
    }
}
function footerScroll(){
    footerTop=footer.getBoundingClientRect().top;

    if(footerTop<=scrollY-200){
        footer.classList.add('footer-scroll');
        
    }
}



let   counter=0;

const slider=document.querySelector('.slider');

const sliderImg=document.querySelectorAll('.slider img');

const size=sliderImg[0].clientWidth;

const btn=document.querySelectorAll('.btnn');
btn.forEach(el=>{
    el.style.backgroundColor='red'
})
btn[0].style.backgroundColor='white'
setInterval(timer,3000);
function timer(){
    btn[counter].style.backgroundColor='red';
    slider.style.transition='0.5s ease-in-out'
    counter++;
    slider.style.transform='translateX('+(-size * counter)+'px)';
    if(sliderImg[counter].id==='lastClone'){
        slider.style.transition='none'
        counter=0
        slider.style.transform='translateX('+(-size * counter)+'px)';
    }
    btn[counter].style.backgroundColor='#fff';
}









