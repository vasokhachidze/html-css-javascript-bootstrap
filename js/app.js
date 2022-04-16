const topNavbar=document.querySelector('.top-navbar-section');
const header=document.querySelector('.header-section');
const starter=document.querySelector('.starter');
const about=document.querySelector('.about');
const mobileMenu=document.querySelector('.mobile-menu');
const showMobileMenu=document.querySelector('.show-mobile-menu');
const closeMobileMenu=document.querySelector('.close-mobile-menu');






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
var string='vaso';

console.log(string[0]);

