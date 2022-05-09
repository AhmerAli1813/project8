

let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('#mynavbar');

menu.onclick = () =>{
menu.classList.toggle('fa-times');
navbar.classList.toggle('active');
}
 window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
    
 }
window.addEventListener("scroll" ,function(){
    var header = document.querySelector('header');
    header.classList.toggle('sticky' , window.scrollY > 0);

    var downhead = document.querySelector('.down-head');
    downhead.classList.toggle("stocky" , window.scrollY > 0);
    
    
    var navbaritems = document.querySelector('.navbar');
    if(window.scrollY==0){
        navbaritems.classList.remove('navbar-light');
    navbaritems.classList.add('navbar-dark' );
    }
    else{
        
    navbaritems.classList.remove('navbar-dark');
        navbaritems.classList.add('navbar-light' );
    }
    
    
    
});