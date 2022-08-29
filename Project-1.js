// Space Battle

//console.log('oh hai!');
//
//const yourAnswer =prompt('Some question');
//let action = null;
//
//while(action !== 'stop'){
//    action =  prompt("What do you want to do now, type Stop to stop ", "Space Battle")
//}




// make my space ship move left and right  
const ship = document.getElementById('spaceshipImage');
const board = document.getElementById('board');


window.addEventListener('keydown' , (e) =>{
    let left =  parseInt(window.getComputedStyle(ship).getPropertyValue('left'));
    

    if ((e.key == 'ArrowLeft' && left > 0)) {
        ship.style.left = left - 10 + "px";
    
    }else if (e.key =='ArrowRight' && left < 750){
        ship.style.left = left + 10 + "px";
    }
});



// add the aliens to the board
const adMoreAliens = setInterval(() => {
    let alien = document.createElement("div");
    alien.classList.add('alienship');

//------Error------Aliens are generated horizontally
    // have the alien move in the board
    let alienleft = parseInt(
        window.getComputedStyle(alien).getPropertyValue("left"));

    // have the alien move in the board randomly
    alien.style.left = Math.floor(Math.random() * 750) + "px";

    board.appendChild(alien);

}, 1500);






