/* 

Prototype Refactor

1. Copy and paste your code or the solution from yesterday

2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.

*/

/*
=== GameObject ===
* createdAt
* name
* dimensions (These represent the character's size in the video game)
* destroy() // prototype method that returns: `${this.name} was removed from the game.`
*/
function GameObject(attrs) {
this.createdAt = attrs.createdAt,
this.dimensions = attrs.dimensions,
this.name = attrs.name,
this.destroy = function() {
  return `${this.name} was removed from the game.`;
}
}

/*
=== CharacterStats ===
* healthPoints
* takeDamage() // prototype method -> returns the string '<object name> took damage.'
* should inherit destroy() from GameObject's prototype
*/
function CharacterStats(childAttrs) {
GameObject.call(this, childAttrs);
this.healthPoints = childAttrs.healthPoints,
this.takeDamage = function() {
  return  `${this.name} took damage.`;
}
}

CharacterStats.prototype = Object.create(GameObject.prototype);

/*
=== Humanoid (Having an appearance or character resembling that of a human.) ===
* team
* weapons
* language
* greet() // prototype method -> returns the string '<object name> offers a greeting in <object language>.'
* should inherit destroy() from GameObject through CharacterStats
* should inherit takeDamage() from CharacterStats
*/
function Humanoid(grandchildAttrs) {
CharacterStats.call(this, grandchildAttrs);
this.team = grandchildAttrs.team,
this.weapons = grandchildAttrs.weapons,
this.language = grandchildAttrs.language,
this.greet = function() {
  return `${this.name} offers a greeting in ${this.language}.`;
}
} 

Humanoid.prototype = Object.create(CharacterStats.prototype);

// Hero constructor function
function Hero(greatGrndAttrs) {
Humanoid.call(this, greatGrndAttrs);
this.power = function(enemy) {
  return this.healthPoints.call(enemy) - 7;
}
}

Hero.prototype = Object.create(Humanoid.prototype);

//Villain constructor function
function Villain(cousinGrndAttrs) {
Humanoid.call(this, cousinGrndAttrs);
this.strength = function(enemy) {
  return this.healthPoints.call(enemy) - 3;
}
}

Villain.prototype = Object.create(Humanoid.prototype);
/*
* Inheritance chain: GameObject -> CharacterStats -> Humanoid
* Instances of Humanoid should have all of the same properties as CharacterStats and GameObject.
* Instances of CharacterStats should have all of the same properties as GameObject.
*/

// Test you work by un-commenting these 3 objects and the list of console logs below:


const mage = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 2,
    width: 1,
    height: 1,
  },
  healthPoints: 5,
  name: 'Bruce',
  team: 'Mage Guild',
  weapons: [
    'Staff of Shamalama',
  ],
  language: 'Common Tongue',
});

const swordsman = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 2,
    width: 2,
    height: 2,
  },
  healthPoints: 15,
  name: 'Sir Mustachio',
  team: 'The Round Table',
  weapons: [
    'Giant Sword',
    'Shield',
  ],
  language: 'Common Tongue',
});

const archer = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 1,
    width: 2,
    height: 4,
  },
  healthPoints: 10,
  name: 'Lilith',
  team: 'Forest Kingdom',
  weapons: [
    'Bow',
    'Dagger',
  ],
  language: 'Elvish',
});

const savior = new Hero({
  createdAt: new Date(),
  dimensions: {
    length: 3,
    width: 4,
    height: 3,
  },
  healthPoints: 20,
  name: 'Dazer',
  team: 'Loneman',
  weapons: [
    'Sword',
    'Bow'
  ],
  language: 'Dankar'
});

const destroyer = new Villain({
  createdAt: new Date(),
  dimensions: {
    length: 5,
    width: 7,
    height: 7,
  },
  healthPoints: 30,
  name: 'Meldrin',
  team: 'Takari Village',
  weapons: [
    'Barbed Club'
  ],
  language: 'Gratine'
});

console.log(mage.createdAt); // Today's date
console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
console.log(swordsman.healthPoints); // 15
console.log(mage.name); // Bruce
console.log(swordsman.team); // The Round Table
console.log(mage.weapons); // Staff of Shamalama
console.log(archer.language); // Elvish
console.log(archer.greet()); // Lilith offers a greeting in Elvish.
console.log(mage.takeDamage()); // Bruce took damage.
console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.
