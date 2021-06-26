// const times = x => f => {
//     if (x > 0) {
//         f()
//         times (x - 1)(f)
//     }
// }

const card = document.querySelector("#card")

const gameController = (() => {

})();


const gameBoard = (() => {
    
    const winDisplay = document.querySelector(".win-display")
    const field = Array.from(document.querySelectorAll(".field"))
    const boardData = [];
    
    const displayController = () => {

        field.forEach(button => {

            button.addEventListener("click", e => {
                const position = field.indexOf(e.target)//game
                
                if(boardData.length % 2 == 0 && e.target.innerText === "") {//game
                    e.target.innerText = player1.sign//display

                    player1.setPosi(position)//game
                    
                    boardData.push(position)//game
                    if(checkWin(player1)){winDisplay.innerText = //create function that when checkWin is true changes display
                        `${player1.sign} Wins!`//display
                        boardData.length = 0;//game
                        
                    };
                }
                
                else if (e.target.innerText === "") {
                    e.target.innerText = player2.sign;
                    
                    player2.setPosi(position);
                    
                    boardData.push(position);
                    if(checkWin(player2)){
                        winDisplay.innerText = `${player2.sign} Wins!`
                        boardData.length = 0;
                        boardData = [];
                    };
                }
            })

        })
        
    }
    
    return{
        displayController,
        boardData
    }
    
})();

gameBoard.displayController();

// What positions he holds and  what is his sign

const Player = (sign) => {
    const positions = []

    const setPosi = (position) => {
        positions.push(position)
    }

    const gamesWon = () =>{

    }
    return {
        sign,
        setPosi,
        positions,
        gamesWon
    }
}

//Check every play if the player has won

const checkWin = (player) => {
    const winningSets = [
        [0,1,2],[3,4,5],[6,7,8],[0,3,6],
        [1,4,7],[2,5,8],[0,4,8],[2,4,6]
    ];

    let win = false
    // See if you can make the some function work
    winningSets.forEach(winSet => {
        if (winSet.every(winPos => player.positions.includes(winPos))){win = true}});
    return win;
};

const player1 = Player("X")
const player2 = Player("O")

// console.log(player1)
// console.log(player1.sign)
