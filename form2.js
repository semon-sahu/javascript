function show() {
  let name = document.querySelector("#name").value;
  let email = document.querySelector("#email").value;
  let mob = document.querySelector("#mobile").value;
  let pass = document.querySelector("#password").value;
  let cpass = document.querySelector("#cpass").value;

  console.log(name, email, mob, pass, cpass);

  if (name === "") {
    window.alert("Please enter your name");
    document.querySelector("#name").focus();
    return false;
  } else if (email === "") {
    window.alert("Please enter your email field");
    document.querySelector("#email").focus();
    return false;
  } else if (!email.includes("@gmail.com")) {
    window.alert("Please enter valid enail @gmail.com");
    document.querySelector("#email").focus();
    return false;
  } else if (mob === "") {
    window.alert("Please enter your mobile number");
    document.querySelector("#mobile").focus();
    return false;
  } else if (mob.length !== 10) {
    window.alert("number shouldbe 10 digits");
    document.querySelector("#mobile").focus();
    return false;
  } else if (isNaN(mob)) {
    window.alert("number should be numeric only");
    document.querySelector("#mobile").focus();
    return false;
  } 
  else if (pass === "") {
    window.alert("Please enter your [password]");
    document.querySelector("#pass").focus();
    return false;
  } 

    else if (!pass.match('[/!@#$%^&*()_+~/]')) {
    window.alert("not a  strong password,it should contain special character");
    return false;
  } 
      else if (!pass.match('[/1234567890/]')) {
    window.alert("not a  strong password,it should contain NUMERICAL VALUE");
    return false;
  } 
  
      else if (!pass.match('[/asdfghjklqwertyuiopzxcvbnm/]')) {
    window.alert("not a  strong password,it should contain LOWER CHARECTER");
    return false;
  } 

      else if (!pass.match('[/QWERTYUIOPASDFGHJKLZXCVBNM/]')) {
    window.alert("not a  strong password,it should contain UPPER CHARECTER");
    return false;
  }
      else if (pass.length<8) {
    window.alert("password altest 8 or more charecter");
    return false;
  }  
  else if (cpass === "") {
    window.alert("Please enter your confirm password");
    document.querySelector("#cpass").focus();
    return false;
  } else if (pass !== cpass) {
    window.alert("Please enter your confirm password");
    document.querySelector("#pass").value = "";
    document.querySelector("#cpass").value = "";
    document.querySelector("#pass").focus() = "";
    return false;
  }
}
// sajal sharma is good girl she is very intelligent she looks preety
