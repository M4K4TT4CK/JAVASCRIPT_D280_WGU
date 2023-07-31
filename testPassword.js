let message = testPassword(password);
if (message) {
   console.log(message);
}
else {
   console.log("Password accepted.");
}
   
function testPassword(password) {
 
   if (password.length < 6) {
      return "Password must be at least 6 characters.";
   }
   
   if (password.indexOf(" ") !== -1) {
      return "Password contains a space.";  
   }
   
   // Check for at least one digit
   let hasDigit = false;
   for (let i = 0; i < password.length && !hasDigit; i++) {
      if (isSingleDigit(password[i])) {
         hasDigit = true;  
      }
   }
   
   if (!hasDigit) {
      return "Password must have at least one digit.";
   }
   
   let beginsWith = password.substr(0, 3);
   let endsWith = password.substr(password.length - 3);
   if (beginsWith === endsWith) {
      return "The password may not begin and end with the same 3 characters.";
   }
   
   // Everything is good
   return "";
}

// Returns true if n is a string with a single digit, false otherwise
function isSingleDigit(n) {
   let unicodeValue = n.charCodeAt(0);
   return n.length === 1 && unicodeValue >= 48 && unicodeValue <= 57;
}
testPassword(password)