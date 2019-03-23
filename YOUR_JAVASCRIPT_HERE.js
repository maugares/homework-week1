// Write your JS here

// Construct the object 'hero'
const hero = {
    name: "Super Hero",
    heroic: true,
    inventory: [],
    health: 10,
    weapon: {
        type: "",
        damage: 2,
    },
};

// Construct dagger
const dagger = {
    type: 'dagger',
    damage: 2,
}

// Increase the health when this is not at its maximum
function rest(object){
    if (object.health === 10){
        window.alert('Max Health already');
        return object;
    } else {
        object.health = 10;
        return object;
    } 
}

// Pick up the weapon and add it to the inventory
function pickUpItem(hero, dagger){
    hero.inventory.push(dagger);
    return hero;
    console.log(hero);
}

// Assign the weapon from the inventory
function equipWeapon(hero){
    if (hero.inventory.length > 0){
        hero.weapon = hero.inventory[0];
        return hero;
    }
}

// Display the stats of the hero and update them after clicking on one of the features
function displayStats(hero){
    const stats = document.getElementById("stats");
    const heroStats = `Name: ${hero.name} | Health: ${hero.health} | Weapon: ${hero.weapon.type} | Damage: ${hero.weapon.damage}`;
    stats.innerHTML = heroStats;
    console.log("it refreshed");
    return hero
}

// Display initial stats
displayStats(hero);

// Erase the enemy's picture after clicking on it
function removeEnemy(){
    const enemy = document.getElementById("enemy");
    enemy.parentNode.removeChild(enemy);
}

// Change the name of the hero
function changeName (hero){
    const stats = document.getElementById("stats");
    const newName = document.getElementById("name").value;
    hero.name = newName;
    displayStats(hero);
    return hero;
}
