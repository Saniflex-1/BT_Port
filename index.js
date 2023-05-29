const links = document.querySelector(".active");
const togAct = document.querySelector(".toggles");

togAct.addEventListener("click", ()=>{
    links.classList.toggle("links-active");
})
