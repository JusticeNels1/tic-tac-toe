const times = x => f => {
    if (x > 0) {
        f()
        times (x - 1)(f)
    }
}

const card = document.querySelector("#card")

const gameBoard = (() => {
    
    const boardData = [];
    const board = document.querySelector(".board")
    // console.log(button)
    
    const createBoard = () => times (9)(() => {
        const square = document.createElement("button")
        square.classList += "field"
        boardData.push(square)
        // console.log(boardData)
    });
    
    const displayBoard = () => {
        boardData.forEach(square => {
            board.append(square)
        })
    }
    
    return{
        createBoard,
        displayBoard,
        boardData
    }
    
})();

// What positions he holds and  what is his sign, 

const Players = (name,sign) => {
    const getSign = () => sign;
    const positions = [];
    
}

gameBoard.createBoard();
gameBoard.displayBoard();

