document.addEventListener("DOMContentLoaded", () => {
    const tl = gsap.timeline({ defaults: { ease: "power1.inOut", duration: 0.3 } });

    tl.from(".hero-head h1:nth-child(1)", { scaleX: 0, delay: 0.3 })
      .from(".hero-head h1:nth-child(2)", { scaleX: 0, delay: 0.3 })
      .from(".hero-head h1:nth-child(3)", { scaleX: 0, delay: 0.3 });
      var video = document.getElementById('myVideo');
              video.controls = false;
              video.setAttribute('playsinline', '');
              video.play();
});
// Ensure you have included GSAP and ScrollTrigger in your project
var tl = gsap.timeline();
tl.from("nav li",{
    y:-30, 
    opacity:0,
    delay:1,
    duration:0.5,
    stagger:0.15
})
// Function to set up scroll animations
function section2Animation() {
  gsap.registerPlugin(ScrollTrigger);

  var tl2 = gsap.timeline({
      scrollTrigger: {
          trigger: ".section",
          scroller: "body",
          start: "top 50%",
          end: "top -10%",
          scrub: 2   
      }               
  });
  tl2.from(".head1", {
    x: -300,
    opacity: 0,
    duration: 1
}, "a3");

tl2.from(".head2", {
    x: 300,
    opacity: 0,
    duration: 1
}, "a3");
  tl2.from(".left1", {
      x: -300,
      opacity: 0,
      duration: 1
  }, "a");

  tl2.from(".right1", {
      x: 300,
      opacity: 0,
      duration: 1
  }, "a");

  tl2.from(".left2", {
      x: -300,
      opacity: 0,
      duration: 1
  }, "a1");

  tl2.from(".right2", {
      x: 300,
      opacity: 0,
      duration: 1
  }, "a1");
}

section2Animation();

let valueDisplay = document.querySelectorAll(".num");
let interval = 1500;

valueDisplay.forEach((valueDisplay) => {
    let startValue = 0;
    let endValue = parseInt(valueDisplay.getAttribute ("data-val"));
    let duration = Math.floor(interval / endValue);
    let counter = setInterval(function (){
        startValue += 1;
        valueDisplay.textContent = startValue;
        if(startValue == endValue){
            clearInterval(counter);
        }
    }, duration);
});