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