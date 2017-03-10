//Create a JavaScript object called person with the following properties/methods
// Properties:
// name - set this as your own namedistance_traveled - set this initially as zero
// Methods:
// say_name - should alert the object’s name property
//say_something - have it accept a parameter. This function should then say for example “{{your name}} says ‘I am cool’” if you pass ‘I am cool’ as an argument to this method.
//walk - have it alert for example “{{your name}} is walking” and increase distance_traveled by 3
//run - have it alert for example “{{your name}} is running” and increase distance_traveled by 10
//crawl - have it alert for example “{{your name}} is crawling” and increase distance_traveled by 1

var person = {
      name: "Sara",
      distance_traveled: 0,
      say_name: function(){
            console.log(person.name);
      },

      say_something : function(phrase){
            console.log(`${person.name} says: ${phrase}`)
      },

      walk : function(){
            console.log(`${person.name} is walking!`);
            person.distance_traveled += 3;
            return person;
      },

      run : function(){
            console.log(`${person.name} is running!`);
            person.distance_traveled += 10;
            return person;
      },


      crawl : function(){
            console.log(`${person.name} is crawling!`);
            person.distance_traveled += 1;
            return person;
      }
}
console.log(person.distance_traveled);
person.walk().run().crawl().run().walk();
console.log(person.distance_traveled);
