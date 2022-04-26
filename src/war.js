

const war = new War();
const viking1 = new Viking("Ragnar", 200,50);
const saxon1 = new Saxon(100,20);
const viking2 = new Viking('Loki',210,80);
const saxon2 = new Saxon(110,70);
war.addViking(viking1);
war.addViking(viking2);
war.addSaxon(saxon1);
war.addSaxon(saxon2);
war.vikingAttack();
war.vikingAttack();
war.vikingAttack();
war.saxonAttack();
console.log(war.showStatus())