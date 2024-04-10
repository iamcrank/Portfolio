function rise(){
  document.querySelectorAll(".rise")
  .forEach(function(elem){
  var outer = document.createElement("span");
  var inner = document.createElement("span");
  
  outer.classList.add("outer");
  inner.classList.add("inner");

  inner.innerHTML = elem.innerHTML;
  outer.appendChild(inner);

  elem.innerHTML = "";
  elem.appendChild(outer);
});
}
rise();

function time(){
  gsap.set(".home .nav a",{y:"-100%", opacity:0})
  gsap.set(".home .outer .inner",{y:"100%"})
  var tl = gsap.timeline();

  tl.from(" .name .inner span",{
    x: 100,
    opacity: 0,
    duration: 1.5,
    stagger: .1,
    delay: 1,
    ease: Power3.easeInOut,
  })
tl.to(".name .outer .inner",{
  y:"-100%",
  duration: 1,
  delay: 1,
  ease: Power3,
})
tl.to(".name",{
  height: 0,
  duration: 1,
  delay: 1,
  ease: Power3,
})
tl.to(".blank",{
  height: "100%",
  top: 0,
  duration: 1,
  delay: -1,
  ease: Power3,
})
tl.to(".blank",{
  height: 0,
  duration: 1,
  ease: Power3,
})
tl.to(".home .nav a",{
  y: 0,
  duration: 1,
  delay: 1,
  opacity:1,
  stagger: .05,
  ease: Expo.easeInOut,
})
tl.to(".home .outer .inner",{
  y:0,  
  stagger: .1,
  ease: Power3,
})
tl.to(".about",{
  y:0,
  height: 500, 
  stagger: .1,
  ease: Expo.easeInOut,
})
tl.to(".abox2 .img",{
  y:0,
  height:350,
  duration: .5,
  ease: Expo.easeInOut,
})
}
time();

function hover() {
  document.querySelector(".img").addEventListener("mousemove", function (dets) {
    document.querySelector(".home").style.backgroundColor = "#fae3dd";
  });
  document.querySelector(".img").addEventListener("mouseleave", function (dets) {
    document.querySelector(".home").style.backgroundColor = "#ededed";
  });
}
hover();




