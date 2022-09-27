const openNav = document.querySelector("#openSidebarMenu");
const closeNav = document.querySelector(".closeButton");

closeNav.addEventListener("click", function () {
  // console.log("this element has been clicked");
  openNav.checked = false;
});

const goButton = document.querySelector(".secondary");
// const emailAddress = document.querySelector("#email").value;

// alert("Thank you for signing up to our Newsletter")
function emailValidation(value) {
  let txt =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return txt.test(value);
}

goButton.addEventListener("click", function (event) {
  event.preventDefault();
  const emailAddress = document.querySelector("#email").value;
  //   console.log("=====>", emailAddress);
  if (emailAddress !== "") {
    if (emailValidation(emailAddress)) {
      // console.log("this button has been clicked");
      alert(
        `Thank you for signing up with your email address ${emailAddress} to our Newsletter `
      );
    } else {
      alert(
        `The email address ${emailAddress} you provided is not valid. Please enter another email address.`
      );
    }
  }
});

// pseudocode
// user clicks on "add to cart" button
const addItem = document.querySelector(".addToCart");
const removeItem = document.querySelector(".removeFromCart");
// create a variable that updates increases with each click
const cartTotal = document.querySelector("#cartCount");

// create a variable that's the same for all "add" buttons and one for "remove" buttons

let items = 0;

// connect "add" button with counter so that text gets updated on each click
// use an event listener on add button
addItem.addEventListener("click", function () {
  items++;
  cartTotal.textContent = items;
});
removeItem.addEventListener("click", function () {
  if (items > 0) {
    items--;
    // change cart total text
    cartTotal.textContent = items;
  }
});

// uses clicks on "remove from cart" button
// count dereases accordingly
//

// when "shop all" button is clicked
// one item from each category is added to the card
