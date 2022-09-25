// pseudocode

// when the doted icon is clicked 
// navbar menu slides to the right
// when the x is clicked 
// the navbar menu slides to the leght



        const openNav = document.querySelector("#openSidebarMenu");
        const closeNav = document.querySelector(".closeButton");
        
        closeNav.addEventListener("click", function(){
            // console.log("this element has been clicked");
            openNav.checked = false;
        })
     

        

    



    // Notes:
    // HTML elements seem to work in querySelector method 
    // but CSS selectors don't work - not sure why
    // the x button to close navbar is not on the page to be able and experiment with console.log fxn

    // I've narrowed this down to the css selector that is responsive for nav slideout 
    // what do I need to do next ? 
    // I've disabled the css declaration and will try to work with js until I find a response on the browser
    // to find out if js code works I'm assigning the open fxn to another icon on the page like search icon