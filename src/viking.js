// Soldier
class Soldier {
  constructor(health, strength) {}
  attack() {
    return this.strength;
  }
  receiveDamage(damage) {
    health = health - damage;
  }
}

// Viking
class Viking extends Soldier {
  constructor(name, health, strength) {
    this.name = name;
    super(health, strength); 
  }
  receiveDamage(damage) {
    health = health - damage;
    if(health >= 0) {
      return `${this.name} has received ${this.damage} points of damage`
    } else {
      return `${this.name} has died in act of combat`
    }
  }
  battleCry() {
    return "Odín Owns You All!"
  }
}

// Saxon
class Saxon extends Soldier {
  receiveDamange(damage) {
    health = health - damage;
    if(health > 0) {
      return `A Saxon has received ${this.damage} points of damage`
    } else {
      return `A Saxon has died in combat`
    }
  }
}

// War
class War {
  constructor() {
  vikingArmy = [];
  saxonArmy = [];
  };

  addViking(Viking) {
    this.vikingArmy.push(vikingObj);
  }
  addSaxon(Saxon) {
    this.saxonArmy.push(saxonObj);
  }
  vikingAttack() {
    const vikingIndex = Math.floor(Math.random()*this.vikingArmy.length); 
    const saxonIndex = Math.floor(Math.random()*this.saxonArmy.length);
    const result = this.saxonArmy[this.saxonIndex].receiveDamage(this.vikingArmy[this.vikingIndex].strength);
    if(this.saxonArmy[this.saxonIndex].health <= 0) {
      this.saxonArmy.splice(saxonIndex,1);
    }
    return result;
  }
  saxonAttack() {
    const vikingIndex = Math.floor(Math.random()*this.vikingArmy.length);
    const saxonIndex = Math.floor(Math.random()*this.saxonArmy.length);
    const result = this.vikingArmy[this.vikingIndex].receiveDamage(this.saxonArmy[this.saxonIndex].strength);
    if(this.vikingArmy[this.vikingIndex].health <= 0) {
      this.vikingArmy.splice(this.vikingIndex,1);
    }
    return result;
  }
  randomAttack() {
    randomAttack = Math.round(Math.random());
    if(randomAttack === 0) {
      const vikingIndex = Math.floor(Math.random()*this.vikingArmy.length);
      const saxonIndex = Math.floor(Math.random()*this.saxonArmy.length);
      const result = this.vikingArmy[this.vikingIndex].receiveDamage(this.saxonArmy[this.saxonIndex].strength);
      if(this.vikingArmy[this.vikingIndex].health <= 0) {
        this.vikingArmy.splice(this.vikingIndex,1);
      } else if(randomAttack === 1) {
        const vikingIndex = Math.floor(Math.random()*this.vikingArmy.length); 
        const saxonIndex = Math.floor(Math.random()*this.saxonArmy.length);
        const result = this.saxonArmy[this.saxonIndex].receiveDamage(this.vikingArmy[this.vikingIndex].strength);
        if(this.saxonArmy[this.saxonIndex].health <= 0) {
          this.saxonArmy.splice(saxonIndex,1);
        } 
      }
    } return result;
  }
  showStatus() {
    if(this.saxonArmy.length === 0) {
      return "Saxons have won the war of the century!"
    } else if (this.vikingArmy.length === 0) {
      return "Vikings have won the war of the century!"
    } else if (this.vikingArmy.length === 1) 
  }

}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
