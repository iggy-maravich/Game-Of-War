class Card {
  constructor(suit, rank, score) {
    this.suit = suit; 
    this.rank = rank;
    this.score = score;

  }
}
class Deck {
  constructor() {
    this.cards = [];
    this.makeDeck();
    this.shuffle()
  }

  makeDeck() {
    let suits = ["Clubs", "Diamonds", "Hearts", "Spades"];
    let ranks = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King", "Ace"];
    for (let i = 0; i < suits.length; i++) {
      for (let j = 0; j < ranks.length; j++) {
        this.cards.push(new Card(suits[i], ranks[j], j + 2))
      }
    }
    return this.cards;
  } 
  
  shuffle() {
    let currentIndex = this.cards.length, randomIndex;
  
    while (currentIndex != 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      [this.cards[currentIndex], this.cards[randomIndex]] = [
        this.cards[randomIndex], this.cards[currentIndex]];
    }
    return this.cards;
  }
  draw() {
    return this.cards.pop()
  } 

}


class Game {
  constructor() {
    this.p1 = []
    this.p2 = []
    this.megaPile = []
    this.splitDeck()
  }


  splitDeck() {
    let deck = new Deck()

    this.p1.push(...deck.cards.splice(0, 26));
    this.p2.push(...deck.cards.splice(0, 26));
  }

  
  startGame() {
    while (this.p1.length !== 52 && this.p2.length !== 52) {

    if (this.p2[0].score > this.p1[0].score) {
      console.log("Player 2 Wins!")
      this.p2.push(this.p1.shift, this.p2.shift)
      // winner also gets megapile

    } else if (this.p1[0].score > this.p2[0].score) {
    console.log("Player 1 Wins!") 
    this.p1.push(this.p1.shift, this.p2.shift)
  }
    
    else if (this.p2[0].score === this.p1[0].score) {
      console.log("WAR!") 
      if (this.p1.length < 5) {

        this.p2.push(this.p1.splice(0))

      } else if (this.p2.length < 5) {

        this.p1.push(this.p2.splice(0))

      } else {

        this.megaPile.push(this.p1.shift, this.p2.shift)


        War()

      }
      // gave over

      }

    
      console.log('p1', this.p1[0], this.p1[0].score)
      console.log('p2', this.p2[0], this.p2[0].score)
    
  }
  War() {
    let pile1 = this.p1.splice(0, 3)
      let pile2 = this.p2.splice(0, 3)
      //put  these in megapile
  }

    
    }





let game = new Game()
// console.log(game)
game.startGame()
// console.log(startGame)
