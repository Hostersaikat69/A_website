function init() {
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
            return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
        },
        pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
    });

    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    ScrollTrigger.refresh();

}


let cur = document.querySelector("#cursor")
let main = document.querySelector("#main")

document.addEventListener("mousemove", (e) => {
    gsap.to(cur, {
        x: e.x+5,
        y: e.y+5
    })
})

init()

let loader = document.querySelector("#loader")
setTimeout(() => {
    loader.style.top = "-100%"
}, 4000);



let tl = gsap.timeline({
    scrollTrigger: {
        trigger: "#page1 h1",
        scroller: "#main",
        start: "top 35%",
        end: "top 0",
        scrub: 1
    }
})

tl.to("#page1 h1", {
    x: -100,
    filter: "blur(5px)",
}, "anim")

tl.to("#page1 h2", {
    x: 100,
    filter: "blur(5px)"
}, "anim")

tl.to("#page1 video", {
    width: "95%",
    marginTop: "-10vw"
}, "anim")


let tl2 = gsap.timeline({
    scrollTrigger: {
        trigger: "#page1 h1",
        scroller: "#main",
        start: "top -115%",
        end: "top -120%",
        scrub: 3
    }
})


tl2.to("#main", {
    backgroundColor: "#fff",
})


let tl3 = gsap.timeline({
    scrollTrigger: {
        trigger: "#page1 h1",
        scroller: "#main",
        start: "top -350%",
        end: "top -360%",
        scrub: 3
    }
})

tl3.to("#main", {
    backgroundColor: "#0F0D0D"
})


let allBox = document.querySelectorAll(".box")

allBox.forEach((box) => {
    box.addEventListener("mouseenter", () => {
        let boxImage = box.getAttribute("data-image")
        cur.style.width = "400px"
        cur.style.height = "200px"
        cur.style.borderRadius = "5px"
        cur.style.backgroundImage = `url(${boxImage})`
    })
    box.addEventListener("mouseleave", () => {
        box.style.backgroundColor = "transparent"
        cur.style.width = "20px"
        cur.style.height = "20px"
        cur.style.borderRadius = "50%"
        cur.style.backgroundImage = `none`

    })
})


let h4s = document.querySelectorAll("#nav a")
let purple = document.querySelector("#purple")
let navv = document.querySelector("#nav")
let h4_content
h4s.forEach((h4) => {
    h4.addEventListener("mouseenter", () => {
        purple.style.display = "flex"
        purple.style.animation = "purpleAnime 1s ease forwards"
         h4_content = `<span>${h4.innerHTML} ${h4.innerHTML} ${h4.innerHTML} ${h4.innerHTML} ${h4.innerHTML} ${h4.innerHTML}</span>`.repeat(2);
        document.querySelector(".marquee").innerHTML = h4_content     
    })

    navv.addEventListener("mouseleave", () => {
        purple.style.display = "none";
    })
})