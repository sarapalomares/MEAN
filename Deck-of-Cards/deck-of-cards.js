var Deck = function Deck(){
        this.deck = [];
        this.reset();
      }

      Deck.prototype.reset = function(){
        var suits = ['Spades', 'Hearts', 'Clubs', 'Diamonds'];
        var pips = ['Ace', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King'];
        this.deck = [];

        for(var suit in suits){
          for(var pip in pips){
            this.deck.push(pips[pip] + ' of ' + suits[suit])
          }
        }
        return this;
      }

      Deck.prototype.shuffle = function(){
          var m = this.deck.length, t, i;
          // While there remain elements to shuffle…
          while (m) {
            // Pick a remaining element…
            i = Math.floor(Math.random() * m--);
            // And swap it with the current element.
            t = this.deck[m];
            this.deck[m] = this.deck[i];
            this.deck[i] = t;
          }
          return this;
      }

      Deck.prototype.deal = function(){
      return this.deck.pop();
}

var Player = function Player(name){
      this.name = name;
      this.hand = [];
}

Player.prototype.draw = function(deck){
      this.hand.push(deck.deal());
      return this;
}

Player.prototype.discard = function(){
      this.hand = [];
      return this;
}
var Card = function Card(){
      this.suite = suite;
      this.pip = pip;
      this.string = pip + " of " + suite;
}

var mydeck = new Deck();
var player1 = new Player ('Sara');

mydeck.reset().shuffle().reset().shuffle();

player1.draw(mydeck).draw(mydeck);
console.log(player1);
