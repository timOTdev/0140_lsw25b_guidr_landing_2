
// --- Fade-ins 

const zero=document.querySelector(".zero");
const two=document.querySelector(".two");
const four=document.querySelector(".four");

$(document).ready(() => {
  $(".fade-text").fadeIn(100);
  $(zero).fadeIn(3000);
  $(two).fadeIn(2500);
  $(four).fadeIn(2700);
  $(".fa-campground").fadeIn(700);
  $(".fa-hiking").fadeIn(1400);
  $(".fa-mountain").fadeIn(2100);
  $(".fa-binoculars").fadeIn(2800);
  $("h1").fadeIn(3000);
  $(".site-icons").fadeIn(1100);
  $(".fa-compass").fadeIn(1500);
  $(".bar-right").fadeIn(3500);
  $("img").fadeIn(4000);
  $(".fa-facebook").fadeIn(1400);
  $(".fa-twitter-square").fadeIn(2100);
  $(".fa-instagram").fadeIn(2800);
});

// --- Slide

const container = document.querySelector(".container");
TweenMax.to(container, 2.5, { ease: Power3.easeOut, x: 600 });

// --- Icons and Instruction class Highlights and Lowlights. 

class IconSelect {
  constructor(x){
  this.x=x;
  this.data=x.dataset.select;
  this.item=document.querySelector(`p[data-select='${this.data}']`);
  this.item=new Instruction(this.item);
  this.x.addEventListener('mouseover', () => this.highLight());
  this.x.addEventListener('mouseleave', () => this.lowLight());
  }
  highLight(){
    this.item.display();
  }
  lowLight(){
    this.item.hide();
  }
}

class Instruction {
  constructor(x){
    this.x=x;
  }
  display(){
    const items=document.querySelectorAll('p').forEach(x => x.classList.remove('green'));
    this.x.classList.add('green');
    this.x.style.fontSize="4rem";
  }
  hide(){
    this.x.classList.remove('green');
    this.x.style.fontSize="3rem";
  }
}

const icons=document.querySelectorAll(".main-fa").forEach(x => new IconSelect(x));
