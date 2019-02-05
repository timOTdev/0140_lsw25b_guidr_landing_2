

const zero=document.querySelector(".zero");
const two=document.querySelector(".two");
const four=document.querySelector(".four");

$(document).ready(() => {
  $(zero).fadeIn(3000);
  $(two).fadeIn(2500);
  $(four).fadeIn(2700);
  $(".fa-campground").fadeIn(300);
  $(".fa-hiking").fadeIn(700);
  $(".fa-mountain").fadeIn(1100);
  $(".fa-binoculars").fadeIn(1500);
  $("h1").fadeIn(3000);
  $(".site-icons").fadeIn(1100);
  $(".fa-compass").fadeIn(1500);
  $("img").fadeIn(4000);
});

const container = document.querySelector(".container");
TweenMax.to(container, 2.5, { ease: Power3.easeOut, x: 600 });

