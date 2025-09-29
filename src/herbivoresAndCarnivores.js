'use strict';

class Animal {
  static alive = [];
  constructor(name, health = 100) {
    this.name = name;
    this.health = health;
    this._aliveRecord = { name: this.name, health: this.health };

    if (this instanceof Herbivore) {
      this._aliveRecord.hidden = false;
    }
    Animal.alive.push(this);
  }
  die() {
    Animal.alive = Animal.alive.filter((a) => a.health > 0);
  }
}

class Herbivore extends Animal {
  constructor(name, health) {
    super(name, health);
    this.hidden = false;
  }

  hide() {
    this.hidden = true;
    this._aliveRecord.hidden = true;
  }
}

class Carnivore extends Animal {
  bite(herbivore) {
    if (herbivore instanceof Herbivore && !herbivore.hidden) {
      herbivore.health -= 50;
      herbivore._aliveRecord.health = herbivore.health;

      if (herbivore.health <= 0) {
        herbivore.die();
      }
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
