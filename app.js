const btn = document.querySelector (".flex_code");
const showcontent = document.querySelector (".progress_br");
const arrow = document.querySelector(".arrow");
const slider = document.querySelector (".sidenav_bar");
const opat = document.querySelectorAll (".textt");
// const hoverwd = document.querySelectorAll(".hoveer_bg");
const label = document.querySelector (".label");
const bodyclr = document.querySelector(".body");
const btncoll = document.querySelectorAll ("button")

arrow.addEventListener("click", ()=>{
    slider.classList.toggle("closee");

    opat.forEach(item => {
        item.classList.toggle("texttt");
    })

})

// btn.addEventListener
// btn.addEventListener("click", function() {
//         showcontent.classList.toggle("active");
//     })

label.addEventListener("click", ()=>{
    bodyclr.classList.toggle("bg_mmnav");
    btncoll.forEach(btt =>{
        btt.classList.toggle("btncolor")
    })
})