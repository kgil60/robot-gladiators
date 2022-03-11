var playerName= window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;

console.log(playerName, playerHealth, playerAttack);

var enemyName = "Roberto";
var enemyHealth = 50;
var enemyAttack = 12;

function fight() {
    // Alert players when round is starting
    window.alert('Welcome to Robot Gladiators!');

    // Subtract value of playerAttack from value of enemyHealth and use result to update enemyHealth value
    enemyHealth = enemyHealth - playerAttack;

    // Log a resulting message to the console so we know that it worked
    console.log(`${playerName} attacked ${enemyName}. ${enemyName} now has ${enemyHealth} health remaining.`);

    // check player health
    if (playerHealth <= 0) {
        window.alert(`${playerName} has been defeated!`);
    } else {
        window.alert(`${playerName} still has ${playerHealth} health left.`)
    }

    // Subtract the value of enemyAttack from the value of playerHealth and use result to update playerHealth value
    playerHealth = playerHealth - enemyAttack;

    // Log a resulting message to the consol so we know it worked
    console.log(`${enemyName} attacked ${playerName}. ${playerName} now has ${playerHealth} health remaining.`);

    // check enemy's health
    if (enemyHealth <= 0) {
        window.alert(`${enemyName} has been defeated!`);
    } else {
        window.alert(`${enemyName} still has ${enemyHealth} health left.`);
    }
}

fight();

