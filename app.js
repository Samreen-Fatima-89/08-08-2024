var uesrNam = document.getElementById("uesrname");
var uesrFathername = document.getElementById("uesrFathername");
var uesremail = document.getElementById("uesremail");
var uesrpassword = document.getElementById("uesrpassword");
function uesrData() {
  if (uesrNam.value === "")
    return Swal.fire({
      icon: "error",
      text: "Please enter your name!",
    });
  if (uesrFathername.value === "")
    return Swal.fire({
      icon: "error",
      text: "Please enter your fathername!",
    });
  if (uesremail.value === "")
    return Swal.fire({
      icon: "error",
      text: "Please  your email!",
    });
  if (uesrpassword.value === "")
    return Swal.fire({
      icon: "error",
      text: "Please enter your password!",
    });
  if (uesrpassword.value.length <= 6)
    return Swal.fire({
      icon: "error",
      text: "Please enter your abcpassword!",
    });
  else {
    console.log(
      uesrNam.value,
      uesrFathername.value,
      uesremail.value,
      uesrpassword.value
    );
    uesrNam.value = "";
    uesrFathername.value = "";
    uesremail.value = "";
    uesrpassword.value = "";
  }
}
// var eye = document.querySelector(".eye");
// function toogle() {
//   if (uesrpassword.type === "password") {
//     uesrpassword.type = "text";
//     eye.style.src = "./eye-line.png";
//   } else {
//     uesrpassword.type = "password";
//     eye.style.src = "./eye-off-line.png";
//   }
//  console.log(eye);
 
// }
localStorage.setItem(
  'uesrNam.value',
  ' uesrFathername.value,'
  'uesrpassword.value'
  'uesremail.value,'

)