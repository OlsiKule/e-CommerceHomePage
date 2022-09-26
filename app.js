const openNav = document.querySelector("#openSidebarMenu");
const closeNav = document.querySelector(".closeButton");

closeNav.addEventListener("click", function () {
  // console.log("this element has been clicked");
  openNav.checked = false;
});

// pseudocode
// user enters email address
// on clicking "go" button
// a pop-up message shows up
// msg confirms that the user registered
//

const goButton = document.querySelector(".secondary");
// const emailAddress = document.querySelector("#email").value;

// alert("Thank you for signing up to our Newsletter")
function emailValidation(value) {

    let txt = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    
    return txt.test(value);
    
    }

goButton.addEventListener("click", function (event) {
  event.preventDefault();
  const emailAddress = document.querySelector("#email").value;
  console.log("=====>", emailAddress);
  if (emailAddress !== "") {
    if (emailValidation(emailAddress)) {
    // console.log("this button has been clicked");
    alert(`Thank you for signing up with your email address ${emailAddress} to our Newsletter `);
     } else {
    alert(`The email address ${emailAddress} you provided is not valid. Please enter another email address.`);
     }
}
  // popUpMessage = emailAddress.
});
