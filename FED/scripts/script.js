// JavaScript Document
var hamburger = document.querySelector ('.hamburger');
var menu = document.querySelector ('header nav ul');
var button = document.querySelector ('button');
var header = document.querySelector ('h1');



function open(){
    hamburger.classList.toggle('open');
    menu.classList.toggle('oop');
}

button.addEventListener ('click', open);

window.onscroll = function(){
    var top = window.scrollY;
    console.log(top);
    if (top >= 60){
        menu.classList.add('scroll');
        header.classList.add('scroll');
    } else{
        menu.classList.remove('scroll');
        header.classList.remove('scroll');
    }
}