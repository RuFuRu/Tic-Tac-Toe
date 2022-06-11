"use strict";
const gameboardElement = document.querySelector('.gameboard');
const gameboardDivs = document.querySelectorAll('.gameboard > div');
const turnInfo = document.querySelector('.turn-info');
console.log(gameboardDivs);
const gameboard = (() => {
    //"p" in gameboardArrs stands for "placeholder"
    const gameboardArr = ['p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p'];
    const gameboardArrFirstCol = ['p', 'p', 'p'];
    const gameboardArrSecondCol = ['p', 'p', 'p'];
    const gameboardArrThirdCol = ['p', 'p', 'p'];
    const gameboardArrDiagonalFirst = ['p', 'p', 'p'];
    const gameboardArrDiagonalSecond = ['p', 'p', 'p'];
    let counter = 0;
    for (let i = 0; i < gameboardDivs.length; i++) {
        gameboardDivs[i].addEventListener('click', () => {
            if (counter % 2 === 0) {
                const circle = document.createElement('p');
                circle.textContent = 'O';
                turnInfo.textContent = "X's turn";
                turnInfo.setAttribute('style', 'color: hsl(241, 73%, 46%);');
                gameboardDivs[i].setAttribute('style', 'pointer-events: none');
                gameboardDivs[i].appendChild(circle);
                gameboardArr[i] = 'O';
                counter++;
            }
            else if (counter % 2 !== 0) {
                const x = document.createElement('p');
                x.textContent = 'X';
                turnInfo.textContent = "O's turn";
                turnInfo.setAttribute('style', 'color: hsl(0, 86%, 36%);');
                gameboardDivs[i].setAttribute('style', 'pointer-events: none');
                gameboardDivs[i].appendChild(x);
                gameboardArr[i] = 'X';
                counter++;
                console.log(counter);
            }
            gameboardArrFirstCol[0] = gameboardArr[0];
            gameboardArrFirstCol[1] = gameboardArr[3];
            gameboardArrFirstCol[2] = gameboardArr[6];
            gameboardArrSecondCol[0] = gameboardArr[1];
            gameboardArrSecondCol[1] = gameboardArr[4];
            gameboardArrSecondCol[2] = gameboardArr[7];
            gameboardArrThirdCol[0] = gameboardArr[2];
            gameboardArrThirdCol[1] = gameboardArr[5];
            gameboardArrThirdCol[2] = gameboardArr[8];
            gameboardArrDiagonalFirst[0] = gameboardArr[0];
            gameboardArrDiagonalFirst[1] = gameboardArr[4];
            gameboardArrDiagonalFirst[2] = gameboardArr[8];
            gameboardArrDiagonalSecond[0] = gameboardArr[2];
            gameboardArrDiagonalSecond[1] = gameboardArr[4];
            gameboardArrDiagonalSecond[2] = gameboardArr[6];
            if (getOccurance(gameboardArr.slice(0, 3), 'X') === 3 ||
                getOccurance(gameboardArr.slice(3, 6), 'X') === 3 ||
                getOccurance(gameboardArr.slice(6), 'X') === 3 ||
                getOccurance(gameboardArrFirstCol, 'X') === 3 ||
                getOccurance(gameboardArrSecondCol, 'X') === 3 ||
                getOccurance(gameboardArrThirdCol, 'X') === 3 ||
                getOccurance(gameboardArrDiagonalFirst, 'X') === 3 ||
                getOccurance(gameboardArrDiagonalSecond, 'X') === 3) {
                console.log("'X' wins!");
                gameboardDivs.forEach(gameboardDiv => {
                    gameboardDiv.setAttribute('style', 'pointer-events: none');
                });
            }
            else if (getOccurance(gameboardArr.slice(0, 3), 'O') === 3 ||
                getOccurance(gameboardArr.slice(3, 6), 'O') === 3 ||
                getOccurance(gameboardArr.slice(6), 'O') === 3 ||
                getOccurance(gameboardArrFirstCol, 'O') === 3 ||
                getOccurance(gameboardArrSecondCol, 'O') === 3 ||
                getOccurance(gameboardArrThirdCol, 'O') === 3 ||
                getOccurance(gameboardArrDiagonalFirst, 'O') === 3 ||
                getOccurance(gameboardArrDiagonalSecond, 'O') === 3) {
                console.log("'O' wins!");
                gameboardDivs.forEach(gameboardDiv => {
                    gameboardDiv.setAttribute('style', 'pointer-events: none');
                });
            }
            else if (getOccurance(gameboardArr, 'p') === 0) {
                console.log("A tie!");
            }
        });
    }
    return { counter };
})();
function getOccurance(array, value) {
    return array.filter((v) => (v === value)).length;
}
