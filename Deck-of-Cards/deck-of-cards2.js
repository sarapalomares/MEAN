function Deck(){
      var suites = ["Diamonds", "Clubs", "Hearts", "Spades"];
      var values = ["Ace", 2, 3, 4, 5, 6, 7, 8, 9, 10, "Jack", "Queen", "King"];
      var self = this;

      this.cards = [];

      suites.forEach(function(suite){
            values.forEach(function(value){
                  self.cards.push(new Card(value, suite));
            });
      });
}

Deck.prototype.shuffle = function(){
      var unshuffledEdge = this.cards.length;
      var cardToShuffleIdx = 
      var temp =
}

Deck.prototype.reset = function(){
      //something
}

Deck.prototype.dealRandomCard = function(){
      //something
}

function Card(value, suite){
      this.value = value;
      this.suite = suite;
}

function Player(name){
      this.name = name;
      this.hand = [];
}

Player.prototype.takeCard = function(){
      //something
}

Player.prototype.discard = function(){
      //something
}
