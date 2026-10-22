function spellFactory(nameSpell) {
    let count = 0;
    return (nameSpell)=> {count++; console.log(nameSpell, " level ", count);};
}
const fireball = spellFactory("fireball");
fireball()
const advancedFireball = spellFactory("adfireball");
advancedFireball()
