

document.getElementById('submit-btn').addEventListener('click', function(){
  
  const emailField = document.getElementById('user-email');
  const email = emailField.value;
  console.log(email);


  const passwordField = document.getElementById('user-password');
  const password = passwordField.value;

  

  if(email === "arad" && password === "fatemaa"){

    location.href = "development/bank.html";

  }
  else{
    alert("Invalid");
  }





})