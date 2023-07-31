function drawTriangle(size) {

   for (let i = 0; i <= size; i++){
      let line = ' '
      for (let j = 0; j <= size; j++) {
         line = '*'
      }
      console.log(line)
   }
   
}

drawTriangle(4)