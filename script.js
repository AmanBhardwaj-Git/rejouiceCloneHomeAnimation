
function locomotiveanimation(){
gsap.registerPlugin(ScrollTrigger);


const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, 
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
    pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});


ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

ScrollTrigger.refresh();
}
locomotiveanimation();


function cursorEffect() {
    let page1Content = document.querySelector("#page1-content")
    let cursor = document.querySelector("#cursor")

    page1Content.addEventListener('mousemove', function (details) {
        gsap.to(cursor, {
            x: details.x + 'px',
            y: details.y + 'px',

        })
    })
    page1Content.addEventListener('mouseenter', function () {
        gsap.to(cursor, {
            scale: 1,
            opacity: 1,
        })
    })
    page1Content.addEventListener('mouseleave', function () {
        gsap.to(cursor, {
            scale: 0,
            opacity: 0,

        })
    })
}
cursorEffect();

function page2Animation() {
    gsap.from('#page2 #lowerpage2 h1 ,#upperpage2 h2,#page2 #line', {
        y: 120,
        stagger: 0.2,
        duration: 1,
        scrollTrigger: {
            trigger: "#page2",
            scroller: "#main",
            start: "top 47%",
            end: "top 46%",
            scrub: 2
        }
    })
}
page2Animation();


function page4Animation() {
    gsap.from('#page4 #page4-top h1', {
        y: 120,
        stagger: 0.2,
        duration: 1,
        scrollTrigger: {
            trigger: "#page4",
            scroller: "#main",
            start: "top 47%",
            end: "top 45%",
            scrub: 2,
        }
    })
}
page4Animation();