// Returns an encrypted or decrypted message using a Caesar cipher.
function caesarCipher(message, key) {
   
    if (!Number.isInteger(key)){
       throw new TypeError('Key must be integer');
    }
    // Make negative keys positive
    if (key < -25 || key > 25) {
       throw new RangeError('Keys mus be between -25 and 25')
    }
    if (key < 0) {
       key += 26;   
    }
    
    message = message.toUpperCase();
    if (typeof message !== "string"){
       throw new TypeError('Must be String');
    }
    let newMessage = "";
    for (let i = 0; i < message.length; i++) {
       let code = message.charCodeAt(i);
       
       // Only convert letters
       if (code >= 65 && code <= 90) {
          code = ((code - 65 + key) % 26) + 65;
       }
       
       newMessage += String.fromCharCode(code);
    }
    return newMessage;
 }
 
 
 let message = "Experience is the teacher of all things.";
 
 // Encrypt the message
 try {
    message = caesarCipher(message, 22);
    console.log(message);
 }
 catch (exception) {
    console.log(exception)
 }
 
 // Decrypt the message
 try {
    message = caesarCipher(message, -22);
    console.log(message);
 }
 catch (exception) {
    console.log(exception);
 }