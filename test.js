
alert('oh hai!');

const yourAnswer =prompt('You Want a Battle?');
let action = null;

//while(action !== 'stop'){
action =  prompt("What do you want to do now, type Stop to stop ", "Space Battle")
//}

const spaceBattle = [];

// Space Ship Characteristics
let spaceShip = {
    name: 'USS Schwarzenger',
    hull: 20,
    firepower: 5,
    accuracy: 0.7,
}

// Alien Ship Characteristics

class alienShipOne  {
    constructor(name) {
        this.name = name;
        this.hull = (Math.random() * (6 - 3 +1)) + 3,                         //hull - between 3 and 6
        this.firepower = (Math.random() * (4 - 2 + 1)) + 2,                   //firepower - between 2 and 4
        this.accuracy = (Math.random() * (.8 - .6 + 1)) + .6,                 //accuracy - between .6 and .8
	}
};
        

const spaceAttack = () => {
    for(let i = 0; i < spaceBattle.length; i++)
        while(spaceBattle[i].hull > 0) {
            if(Math.random() < spaceShip.accuracy){
                console.log('You have been destroyed!');
            }
            else if(Math.random() > spaceShip.accuracy){
                console.log('Alien ship is destroyed');
                return spaceAttack;
            }
            else if(alienShipOne.hull > 0.8 ) {
                console.log('Alien attack missed your ship')

            }
            else{
                console.log('your ship is been destroyed!')
            }
    
}
}