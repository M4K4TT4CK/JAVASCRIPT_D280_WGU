// Declare a game object and call the game object's methods
let game = {
   winner: {
      name: "Broncos",
      score: 24
   },
   loser: {
      name: "Pathers",
      score: 10
   },
   getMarginOfVictory: function(){
      return this.winner.score - this.loser.score
   },
   showSummary: function(){
      console.log(
         this.winner.name + ": " + this.winner.score + "\n" + 
         this.loser.name + ": " + this.loser.score + "\n" +
         "Margin of victory: " + this.getMarginOfVictory())
   }
}

game.showSummary()