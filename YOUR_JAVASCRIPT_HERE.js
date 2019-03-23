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

// Define rest, pickUpItem and equipWeapon
function rest(object){
    if (object.health === 10){
        window.alert('Max Health already');
        return object;
    } else {
        object.health = 10;
        return object;
    } 
}

function pickUpItem(hero, dagger){
    hero.inventory.push(dagger);
    return hero;
    console.log(hero);
}

function equipWeapon(hero){
    if (hero.inventory.length > 0){
        hero.weapon = hero.inventory[0];
        return hero;
    }
}

function displayStats(hero){
    const stats = document.getElementById("stats");
    const heroStats = `Name: ${hero.name} | Health: ${hero.health} | Weapon: ${hero.weapon.type} | Damage: ${hero.weapon.damage}`;
    stats.innerHTML = heroStats;
    console.log("it refreshed");
    return hero
}

displayStats(hero);

function removeEnemy(){
    const enemy = document.getElementById("enemy");
    enemy.parentNode.removeChild(enemy);
}

function changeName (hero){
    const stats = document.getElementById("stats");
    const newName = document.getElementById("name").value;
    const caps = /[A-Z]/g;
    const lows = /[a-z]/g;
    const firstChar = name.charAt(0);

    hero.name = newName;
    displayStats(hero);
    return hero;
}
