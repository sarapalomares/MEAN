module.exports = function (){
  return {
    add: function(num1, num2) {
         console.log("Adding Numbers:", num1 + num2);
    },
    multiply: function(num1, num2) {
         console.log("Multiplying Numbers:", num1 * num2);
    },
    square: function(num) {
         console.log("Squaring Numbers:", num * num);
    },
    random: function(num1, num2) {
         console.log("Random Number between 1 and 500:", Math.floor(Math.random() * num2) + num1)
    }
  }
};
