var animatedSection = document.querySelector(".animated-section");
var sectionPosition = animatedSection.getBoundingClientRect().top;
var windowHeight = window.innerHeight;

window.onscroll = function() {
  var scrollPosition = window.scrollY;
  var sectionInView = scrollPosition + windowHeight > sectionPosition && scrollPosition < sectionPosition + animatedSection.offsetHeight;

  if (sectionInView) {
    animatedSection.style.animation = "pop-in-out 5s forwards";
  } else {
    animatedSection.style.animation = "pop-in-out 5s reverse forwards";
  }
}




  
  