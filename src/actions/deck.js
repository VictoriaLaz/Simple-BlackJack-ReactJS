export default class Deck {
  // setup and create a new deck. (removed some values for faster testing)
  constructor() {
    this.value = [/*'2', '3', '4', '5', '6', '7', '8', '9', */'10', 'J', 'Q', 'K', 'A'];
    this.suits = ['S', 'D', 'C', 'H'];


    this.deck = this.generateDeck();
  }

  //Create a new deck
  generateDeck() {
    let deck = [];

    for (let i = 0; i < this.value.length; i++) {
      for (let j = 0; j < this.suits.length; j++) {
        let card = this.value[i] + this.suits[j];
        deck.push(card);
      }
    }
    return deck;
  }

  //Get a random card and remove it from the deck
  drawCard() {
    let randomCard = Math.floor((Math.random() * this.deck.length));
    return this.deck.splice(randomCard, 1)[0];
  }

  getDeck() {
    return this.deck;
  }
}