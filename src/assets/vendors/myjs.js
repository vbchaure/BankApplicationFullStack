function showFunction() {
  console.log("hello");
  // document.getElementById("card1").style.display="block";
  if (document.getElementById("card1").style.display="none") {
    document.getElementById("card1").style.display="block";
  } else {
    document.getElementById("card1").style.display="none";
  }
}

function hideFunction() {
  console.log("bye");
  document.getElementById("card1").style.display="none";
}
function myFunction() {

    var name = document.getElementById('name').value;
    var namecheck  = /^[A-Za-z]{3,40}$/;
    if (namecheck.test(name))
      {
          document.getElementById('nameerror').innerHTML=" ";
      }
      else
      {
        document.getElementById('nameerror').style.color="red";
          document.getElementById('nameerror').innerHTML=" **Name Should be between 3 to 40 charcter ";
      }
  }
  
  function myFunction1() {

    var email = document.getElementById('email').value;
    var emailcheck =/^[a-zA-z]([a-zA-Z0-9][\.+\-+\_]){0,5}[a-zA-Z0-9]{2,10}@([a-zA-Z0-9]{2,8}\.){1,4}[a-zA-Z0-9]{2,5}$/;
    if (emailcheck.test(email))
      {
          document.getElementById('emailerror').innerHTML=" ";
      }
      else
      {
        document.getElementById('emailerror').style.color="red";
          document.getElementById('emailerror').innerHTML=" **Email is Invalid ";
      }
  }
  
  function myFunction2() {
  
    var number = document.getElementById('mobile').value;
    var phonecheck =/^[9+8+7+6][0-9]{9}$/;
    if (phonecheck.test(number))
      {
          document.getElementById('mobileerror').innerHTML=" ";
      }
      else
      {
        document.getElementById('mobileerror').style.color="red";
          document.getElementById('mobileerror').innerHTML=" ** Mobile Number is Invalid";
      }
  }
  
function myFunction3() {
  
    var number = document.getElementById('smobile').value;
    var phonecheck =/^[9+8+7+6][0-9]{9}$/;
    if (phonecheck.test(number))
      {
          document.getElementById('smobileerror').innerHTML=" ";
      }
      else
      {
        document.getElementById('smobileerror').style.color="red";
          document.getElementById('smobileerror').innerHTML=" ** Mobile Number is Invalid";
      }
  }
  
function myFunction4() {

var dob = document.getElementById('dob').value;
var dobcheck =/^(19|20)\d\d[- /.](0[1-9]|1[012])[- /.](0[1-9]|[12][0-9]|3[01])$/;
if (dobcheck.test(dob))
  {
      document.getElementById('doberror').innerHTML=" ";
  }
  else
  {
    document.getElementById('doberror').style.color="red";
      document.getElementById('doberror').innerHTML=" ** Date is Invalid";
  }
}
  
  function myFunction5() {
    
    var gender = document.getElementById('gender').value;
    var gendercheck  = /^(M|F){1}$/;
    if (gendercheck.test(gender))
      {
          document.getElementById('gendererror').innerHTML=" ";
      }
      else
      {
        document.getElementById('gendererror').style.color="red";
          document.getElementById('gendererror').innerHTML=" ** Gender Should be of 1 charcter in capital ";
      }
  }