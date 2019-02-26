function ValidateForm(){
  
 var validFirstName = false;
 var validLastName = false;
 var validEmail = false;
 var validPhone =false; 
 var validUserName = false;
 var validUserPassword = false;
  
 var validAddress = false;
 var validCity = false; 
 var validCountry = false;
 var validState = false; 
 var validZip = false; 
  
 var errorMessages ="";  // All the error messages are going to stay in this variable
  
/*********** VALIDATES FIRST NAME ******** */
//Required, 20 char
 var firstName = document.getElementById("firstName").value; 
 if (firstName==="null" || firstName==="" || firstName.length > 20)    
   errorMessages += "<p>The first name is required and must be less than 20 characters.</p>";
   else 
 validFirstName =true;
  
/*********** VALIDATES LAST NAME ******** */
//Required, 50 char
 var lastName = document.getElementById("lastName").value; 
 if (lastName==="null" || lastName==="" || lastName.length > 50)   
   errorMessages += "<p>The last name is required and must be less than 50 characters.</p>";
   else 
 validLastName =true;

/*********** VALIDATES EMAIL ******** */
//Required  
var userEmail = document.getElementById("email").value;
var atpos = userEmail.indexOf("@");
var dotpos = userEmail.lastIndexOf(".");
if (atpos< 1 || dotpos<atpos+2 || dotpos+2>=userEmail.length) 
   errorMessages += "<p>Invalid email. </p>";
   else
validEmail = true; 

/*********** VALIDATES PHONE ******** */
var phone = document.getElementById("phone").value;
if (isNaN(phone) || phone.length >15 ||
    phone===null || 
    phone==="")
 errorMessages += "<p>Invalid phone number. </p>";
  else
    validPhone= true;
  
/*********** VALIDATES USER NAME ******** */
 var userName = document.getElementById("userName").value; 
 if (userName==="null" || userName==="" || userName.length > 12)    
   errorMessages += "<p>A username is required and must be less than 12 characters.</p>";
   else 
 validUserName =true;
  
 /*********** VALIDATES PASSWORD ******** */
 var userPassword = document.getElementById("userPassword").value; 
 if (userPassword==="null" || userPassword==="" || userPassword.length > 7)
   errorMessages += "<p>A password is required and must be less than 7 characters.</p>";
   else 
 validUserPassword =true; 
 
/*********** VALIDATES Address  ******** */
 var address = document.getElementById("address").value; 
 if (address==="null" || address==="")    
   errorMessages += "<p>An address is required.</p>";
   else 
 validAddress =true;

/*********** VALIDATES City  ******** */
 var city = document.getElementById("city").value; 
 if (address==="null" || address==="")    
   errorMessages += "<p>A city is required.</p>";
   else 
 validCity =true;
  
/*********** VALIDATES Country  ******** */
 if(document.getElementById('countries').selectedIndex === 0)  
   errorMessages += "<p>A country is required.</p>";
   else 
 validCountry =true;
  
/*********** VALIDATES State  ******** */
 var country = document.getElementById("countries").value;
 if (country === "USA"){
 if(document.getElementById('state').selectedIndex === 0)  
   errorMessages += "<p>A state is required.</p>";
   else 
 validState =true;}
  else 
 validState = true;
  
/*********** VALIDATES Zip  ******** */
 if (country === "USA"){
 var zipcode = document.getElementById("zipcode").value; 
 if (isNaN(zipcode) || zipcode==="null" || zipcode==="" || zipcode.length != 5)    
   errorMessages += "<p>A zipcode is required and must be 5 characters.</p>";
   else 
 validZip =true;}
   else 
 validZip =true;  
    
  
document.getElementById("errorMessages").innerHTML = errorMessages;
  
// Make sure you return all the boolean variables that are checking each field
 return (validFirstName && validLastName && validEmail && validPhone && validUserName && validUserPassword && validAddress && validCity && validCountry && validState && validZip) ;
}
