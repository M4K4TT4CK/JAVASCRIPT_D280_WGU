function drawTriangle(size) {
   for (let i = 1; i <= size; i++) {
     let line = '*'.repeat(i);
     console.log(line);
   }
 }
 
 // Test the function with size 4
 drawTriangle(4);