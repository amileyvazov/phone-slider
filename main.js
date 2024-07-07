const  contanEl = document.querySelector(".container");

const leftEl = document.querySelector(".left");

const rightEl = document.querySelector(".right");

leftEl.addEventListener("mouseenter", () =>{
    contanEl.classList.add("active-left");
});

rightEl.addEventListener("mouseleave", () => {
   contanEl.classList.remove("active-left")
});

rightEl.addEventListener("mouseenter",() => {
    contanEl.classList.add("active-right");
});

rightEl.addEventListener("mouseleave",() => {
    contanEl.classList.remove("active-right");
});
