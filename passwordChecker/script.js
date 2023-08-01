// Register event handlers
let passwordInput = document.querySelector("#password");
passwordInput.addEventListener("keydown", preventSpaces);
passwordInput.addEventListener("input", checkPassword);

function preventSpaces(event) {
   // Ignore space input 
   if (event.key === " ") {
      event.preventDefault();      
   }
}

function checkPassword() {
   let password = this.value;      
   let passwordStrength = 0;
   
   // Password should be long enough
   if (password.length >= 6) {
      passwordStrength++;      
   }
   
   // Password should contain at least one uppercase letter
   if (password.toLowerCase() !== password) {   
      passwordStrength++;
   }
      
   // Password should have at least one digit 
   let containsDigit = false;
   for (let i = 0; i < password.length; i++) {
      if (password[i] >= "0" && password[i] <= "9") {
         containsDigit = true;
      }
   }
   
   if (containsDigit) {
      passwordStrength++;
   }   
   
   // Convert passwordStrength into a descriptive word 
   let strengthWord = "Weak";
   if (passwordStrength === 1) {
      strengthWord = "Stronger";
   }
   else if (passwordStrength === 2) {
      strengthWord = "Moderate";
   }
   else if (passwordStrength === 3) {
      strengthWord = "Strong";
   }
   
   // Display strengthWord
   document.querySelector("#strength").innerHTML = strengthWord;
}
