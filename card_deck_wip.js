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


  }
// }

class Game {
  constructor() {
    this.p1 = []
    this.p2 = []
    this.splitDeck()
    this.draw()
  }

   splitDeck() {
    let deck = new Deck()

    this.p1.push(...deck.cards.splice(0, 26));
    this.p2.push(...deck.cards.splice(0, 26));
    console.log('p1', this.p1, this.p1.score) 
    console.log('p2', this.p2, this.p2.score)

    // console.log('p1', this.p1[0], this.p1[0].score) 
    // console.log('p2', this.p2[0], this.p2[0].score)

  } 

  draw() {
    // let deck = this.splitDeck()
    this.p1.shift(...deck.cards)
    console.log()
  do {
  this.p1.shift() && this.p2.shift()
}
while (this.p1.length > 0 && this.p2.length > 0) 
  
  }

          }

let game = new Game()
// console.log(game)
// game.startGame()
