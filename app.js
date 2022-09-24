// pseudocode

// when the doted icon is clicked 
// navbar menu slides to the right
// when the x is clicked 
// the navbar menu slides to the leght

// window.onload = function (){

        const openNav = document.querySelector("input");
        const closeNav = document.querySelector("button");

        closeNav.addEventListener("click", function() {
            console.log("this element has been clicked")
            // openNav.classList.toggle("check");
            // closeNav.classList.toggle("checked");
        });
        // const navigation = function (openNav) {
        // return("this element has been clicked")
        //  }
        // const closeNav = document.querySelector(".check");

        

    // }



    // Notes:
    // HTML elements seem to work in querySelector method 
    // but CSS selectors don't work - not sure why
    // the x button to close navbar is not on the page to be able and experiment with console.log fxn