/* Contact Me */
function myFunction() {
    alert("The form has been submitted. Thank you.");
}

/* Heading */
const burgerMenu = document.getElementById("burgerMenu");
const forMobileMenu = document.getElementById("forMobileMenu");
const header = document.getElementById("header");

burgerMenu.addEventListener("click", () => {
  forMobileMenu.classList.toggle("open");
  burgerMenu.classList.toggle("close");
  header.classList.toggle("open");
})