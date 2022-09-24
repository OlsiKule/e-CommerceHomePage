// pseudocode

// when the doted icon in clicked 
// navbar menu slides to the right
// when the x is clicked 
// the navbar menu slides to the leght



const openNav = document.querySelector(".slideOutNav");
const closeNav = document.querySelector(".check");

openNav.addEventListener("click", () => {
    openNav.classList.toggle("checkbox");
    closeNav.classList.toggle("checkbox");
});