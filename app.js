//Setup variables
let currentPlayer = "coral";
let grid = [];
//Show board and restart board

$(document).ready(function() {
  restart = () => {
    grid = [
      [{}, {}, {}, {}, {}, {}, {}],
      [{}, {}, {}, {}, {}, {}, {}],
      [{}, {}, {}, {}, {}, {}, {}],
      [{}, {}, {}, {}, {}, {}, {}],
      [{}, {}, {}, {}, {}, {}, {}],
      [{}, {}, {}, {}, {}, {}, {}]
    ];

    render();
  };

  const render = () => {
    const svg = document.getElementById("svg");
    let doc = ``;
    //builds board
    for (let i = 0; i < grid.length; i++) {
      let row = grid[i];
      for (let j = 0; j < row.length; j++) {
        //access to specific circle-tile
        const circle = grid[i][j];
        //switches 'token' color
        const color = (circle && circle.color) || "white";
        //styles the circle-tiles
        doc =
          doc +
          `<circle onclick="clickCircle(${j},${i})" fill='${color}' r='30px' cx='${j *
            70 +
            50}px' cy='${i * 70 + 50}px'></circle>`;
      }
    }
    svg.innerHTML = doc;
  };
  /*  Set up Player moves,
     Allow for first player to move
     switches between player's colors
     Set color in last cell*/
  window.clickCircle = (x, y) =>{
    for (let i = grid.length - 1; i >= 0; i--) {
      let row = grid[i];
      let lastEmptyCircle = row[x];
      if (!lastEmptyCircle.color) {
        row[x] = { color:currentPlayer };
        //switches color to siginify player
        currentPlayer = currentPlayer === "coral" ? "black" : "coral";
        render();
        winner();
        return;
      }
    }
  };
  /*Set up Game loop
    make the move
    check for win*/
  function winner(){
    console.log("Who won?");
  //check for wins looping over the board
    veritcalWin();
    horizontalWin();
    diagonalWinLeft();
    diagonalWinRight();
    return;
  };

  restart();
  render();

// checks verticals
function veritcalWin() {
  for (let i = 0; i < grid.length; i++) {
    let row = grid[i];
    for (let j = 0; j < row.length; j++) {
      let circle = grid[i][j];
      if (circle && circle.color) {
        if (i === 0 || i === 1) {
          if (
            grid[i + 1][j].color === circle.color &&
            grid[i + 2][j].color === circle.color &&
            grid[i + 3][j].color === circle.color
          ) {
            alert("Color "+ circle.color + " wins!");
            return;
          }
        }
      }
    }
  }
};
//checks horizontals
function horizontalWin() {
  for (let i = 0; i < grid.length; i++) {
    let row = grid[i];
    for (let j = 0; j < row.length; j++) {
      let circle = grid[i][j];
      if (circle && circle.color) {
        if (j === 0 || j === 1 || j === 2 || j === 3) {
          if (
            grid[i][j + 1].color === circle.color &&
            grid[i][j + 2].color === circle.color &&
            grid[i][j + 3].color === circle.color
          ) {
            alert("Color " + circle.color + " wins!");
            return;
          }
        }
      }
    }
  }
};
//checks right diagonals
function diagonalWinRight() {
  for (let i = 0; i < grid.length; i++) {
    let row = grid[i];
    for (let j = 0; j < row.length; j++) {
      let circle = grid[i][j];
      if (circle && circle.color) {
        if (j === 3 || j === 4 || j === 5 || j === 6) {
          if (
            grid[i + 1][j - 1].color === circle.color &&
            grid[i + 2][j - 2].color === circle.color &&
            grid[i + 3][j - 3].color === circle.color
          ) {
            alert("Color " + circle.color + " wins!");
            return;
          }
        }
      }
    }
  }
};
//checks left diagonals
function diagonalWinLeft() {
  for (let i = 0; i < grid.length; i++) {
    let row = grid[i];
    for (let j = 0; j < row.length; j++) {
      let circle = grid[i][j];
      if (circle && circle.color) {
        if (i === 0 || i === 1 || i === 2) {
          if (j === 0 || j === 1 || j === 2 || j === 3){
            if (
              grid[i + 1][j + 1].color === circle.color &&
              grid[i + 2][j + 2].color === circle.color &&
              grid[i + 3][j + 3].color === circle.color
            ) {
              alert("Color "+ circle.color + " wins!");
              return;
              debugger;
            }
          }
        }
      }
    }
  }
};

//Win modal
// function Win (){

// }

// Exit game modal
// function exitGame{

// }

// play music
// function playMusic(){
//     let music = new Audio('FKJ - Tui.mp3');
//     music.play();
// };

});
