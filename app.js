 //Setup variables
// const PLAYER_TOKEN ='orange'
// const PLAYER_TWO = "black"

//Show board
    //Setup Player One
    //Setup Player Two
$(document).ready(function(){
const grid = [
    [{},{},{},{},{},{},{}],
    [{},{},{},{},{},{},{}],
    [{},{},{},{},{},{},{}],
    [{},{},{},{},{},{},{}],
    [{},{},{},{},{},{},{}],
    [{},{},{},{},{},{},{}],
    [{},{},{},{},{},{},{}],
];

const render = ()=>{
    const svg = document.getElementById("svg");
    let doc = ``;
    for (let i=0;i < grid.length; i++){
        let row = grid[i];
    for (let j=0; j < row.length; j++){
        doc = doc +`<circle fill='white' r='30px' cx='${j * 70 + 50}px' cy='${i * 70 + 50}px'></circle>`;
    }    
    }
    console.log('hellooooooo');
    svg.innerHTML= doc;
};
render();
});

// Set event listeners here


 


    //Set up Game loop
    //  a button to start the game

        //Allow for first player to move
        // hover for move
        // function moveHover(){ 
            



        // }
    //make the move
    // check for win
    // function horizontalWin(){
    //     for (let i=0;i<7;)
        
    // }
        // function verticalWin() {

        // }
        // function diagonalWinLeft(){

        // }
        // function diagonalWinRight (){

        // }
        //Switch Player
        //Allow for second player to move
        //make the move
        //check for win
        // check for wins looping over the board
        //switch players
        //Win modal
        // function Win (){

        // }
        //Lose modal
        // function Lose{

        // }
        // Exit game modal
        // function exitGame{

        // }
// play music
// function playMusic(){
//     let music = new Audio('musicfile.mp3');
//     music.play();
//     }


// });