let email = document.getElementById("email");
let password = document.getElementById("password");
let loginForm = document.getElementById("login");

loginForm.addEventListener("submit", function (e) {
  e.preventDefault();
  //lấy users từ trong local storage
  let users = localStorage.getItem("Users");
  //kiểm tra users có tồn tại không
  if (users) {
    users = JSON.parse(users);
    //Kiểm tra thông tin đăng nhập
    let user = users.find(
      (u) => u.email === email.value && u.password === password.value,
    );
    //kiểm tra xem
    if (user) {
      alert("Login successfully!");
      window.location.href = "/";
      //Chuyển hướng sang trang chính
    } else {
      alert("Invalid email or password");
    }
  }
});
