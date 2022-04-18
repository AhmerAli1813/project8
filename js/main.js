

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
    var header = document.querySelector("header");
    header.classList.toggle("sticky" , window.scrollY > 0);

    var downhead = document.querySelector(".down-head");
    downhead.classList.toggle("stocky" , window.scrollY > 0);
    
    var button = document.querySelector(".mycolor");
    button.classList.toggle("btn-outline-dark" ); 
    button.classList.remove("btn-outline-secondary" );   

});