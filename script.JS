const validCredentials = [
    "petrrr.ahojjjjj",
    "jana.pizza2",
    "karel.kočka3",
    "eva.12345",
    "adam.švarc"
  ];
  
  function checkLogin() {
    const enteredUsername = document.getElementById('Uname').value.trim();
    const enteredPassword = document.getElementById('Pswrt').value.trim();
    const confirmPassword = document.getElementById('cnfrmPswrt').value.trim();
  
  
    if (enteredUsername.length < 5) {
        displayError("Invalid Username", "Username must be at least 5 characters long.");
        return;
    }
  
    if (enteredPassword.length < 7) {
        displayError("Invalid Password", "Password must be at least 7 characters long.");
        return;
    }
  
    
    if (enteredPassword !== confirmPassword) {
        displayError("Password Mismatch", "Password confirmation does not match the entered password.");
        return;
    }
  
if    (validCredentials.includes(enteredUsername + "." +  enteredPassword)){ 
    displayError("Used", "Please enter new username and password.")
    return
    
    }

    const foundUser = enteredUsername < 5  + "." + enteredPassword < 7;
    if (enteredPassword + enteredUsername.includes(foundUser)) {
         console.log("Login successful.");
        window.location.href = "home.html";
       
    } else {
        displayError("Invalid Credentials", "Please enter valid username and password.");
    }
  }
  
  function displayError(title, text) {
    Swal.fire({
        title: title,
        text: text,
        icon: "error"
    });
  }
  
    
    function Login(){
      window.location.href = "login.html"
      }
 
    function Home(){
  window.location.href = "home.html"
    }

  function send(){
  pluh = ""
document.getElementById("fazber").value = pluh
  }
  

document.addEventListener('DOMContentLoaded', function () {
    const stars = document.querySelectorAll('.fa-star');
  
    stars.forEach(function (star) {
      star.addEventListener('click', function () {
        if (this.classList.contains('checked')) {
          this.classList.remove('checked');
        } else {
          this.classList.add('checked');
        }
      });
    });
  });
