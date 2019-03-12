function ValidateForm(){
  
 var validName = false;
 var validEmail = false; 
 var validComment = false;
  
 var errorMessages ="";  // All the error messages are going to stay in this variable
  
/*********** VALIDATES FIRST NAME ******** */
//Required, 50 char
 var visitorName = document.getElementById("visitorName").value; 
 if (visitorName==="null" || visitorName==="" || visitorName.length > 50)    
   errorMessages += "<p>A name is required, and should be less than 50 characters.</p>";
   else 
 validName = true;
  

/*********** VALIDATES EMAIL ******** */
//Required  
var visitorEmail = document.getElementById("visitorEmail").value;
var atpos = visitorEmail.indexOf("@");
var dotpos = visitorEmail.lastIndexOf(".");
if (atpos< 1 || dotpos<atpos+2 || dotpos+2>=visitorEmail.length) 
   errorMessages += "<p>Invalid email. </p>";
   else
validEmail = true; 

/*********** VALIDATES Comments  ******** */
 var comments = document.getElementById("comments").value; 
 if (comments==="null" || comments==="" || comments==="Enter your comments...")    
   errorMessages += "<p>A comment is required.</p>";
   else 
validComment = true;
  
    
document.getElementById("errorMessages").innerHTML = errorMessages;
  
// Make sure you return all the boolean variables that are checking each field
 return (validName && validEmail && validComment) ;
}