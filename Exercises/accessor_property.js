let musicQueue = {
    songs: ["Party Rock Anthem", "I Gotta Feeling", "Macarena"],
    nextSong: 0,
    
    get next() { // getter
       tmp = this.nextSong;
       this.nextSong++;
       if (this.nextSong > this.songs.length-1){
          this.nextSong = 0;
       }   
       if (this.nextSong < 0)
       {
          this.nextSong = 0;
       }
       return this.songs[tmp];
    },
    
    set next(val) { //setter
       this.nextSong = val;
       if (this.nextSong > this.songs.length-1){
          this.nextSong = 0;
       }
       if (this.nextSong < 0) {
          this.nextSong = 0;
       }
    }
 };
 
 // Run through the queue three times
 for (let c = 0; c < musicQueue.songs.length * 3; c++) {
    console.log("Now playing: " + musicQueue.next);
 }
 
 // Test the next setter
 musicQueue.next = 2;
 console.log(musicQueue.next);   // Macarena
 musicQueue.next = 3;
 console.log(musicQueue.next);   // Party Rock Anthem
 musicQueue.next = -1;
 console.log(musicQueue.next);   // Party Rock Anthem