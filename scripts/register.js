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
  //Lưu
  // Kiểm tra user có chưa
  let users = localStorage.getItem("Users");
  let user = {
    username: username.value,
    email: email.value,
    password: password.value,
  };
  if (user === null) {
    users = [];
    // thêm user vào trong mảng Users
    users.push(user);
    //lưu lại vào local storage
    localStorage.setItem("Users", JSON.stringify(users));
  } else {
    //Trường hợp này đã có user trong local storage
    //Kiểm tra user đã tồn tại trong mảng user hay chưa
    let userExists = users.some((u) => u.username === user.username);
    if (userExists) {
      alert("User already exists");
      return;
    }
    //thêm user vào trong mảng Users
    users.push(user);
    //lưu lại vào local storage
    localStorage.setItem("Users", JSON.stringify(users));
  }
  //Th1 chuyển hướng tự động sang trang đăng nhập
  alert("Register successfully!");
  window.location.href = "login.html";
});
