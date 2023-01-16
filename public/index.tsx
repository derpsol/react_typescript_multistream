import { gsap } from "gsap";

let tween = gsap.to(".mainback", {
    duration: 4, 
    xPercent: -100, // offset by the width of the box
    rotation: 360, 
    ease: "none",
  });

tween.play();