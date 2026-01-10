let username = document.getElementById("username");
let email = document.getElementById("email");
let password = document.getElementById("password");
let signUpForm = document.getElementById("signUp");

signUpForm.addEventListener("submit", function () {
  event.preventDefault();
  if (username.value == "") {
    alert("Please enter your username");
  }
  if (email.value == "") {
    alert("Please enter your email");
  }
  if (password.value == "") {
    alert("Please enter your password");
  }
  if (!email.value.includes("@")) {
    alert("Email format not right");
  }
});
