"use strict";
const gameboardElement = document.querySelector('.gameboard');
const gameboardDivs = document.querySelectorAll('.gameboard > div');
console.log(gameboardDivs);
const gameboard = (() => {
    //"p" in gameboardArr stands for "placeholder"
    const gameboardArr = ['p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p'];
    const gameboardArrFirstCol = ['p', 'p', 'p'];
    const gameboardArrSecondCol = ['p', 'p', 'p'];
    const gameboardArrThirdCol = ['p', 'p', 'p'];
    let counter = 0;
    for (let i = 0; i < gameboardDivs.length; i++) {
        gameboardDivs[i].addEventListener('click', () => {
            if (counter % 2 === 0) {
                gameboardDivs[i].textContent = 'O';
                gameboardDivs[i].setAttribute('style', 'pointer-events: none');
                gameboardArr[i] = 'O';
                counter++;
                console.log(counter);
            }
            else if (counter % 2 !== 0) {
                gameboardDivs[i].textContent = 'X';
                gameboardDivs[i].setAttribute('style', 'pointer-events: none');
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
            if (getOccurance(gameboardArr.slice(0, 3), 'X') === 3 ||
                getOccurance(gameboardArr.slice(3, 6), 'X') === 3 ||
                getOccurance(gameboardArr.slice(6), 'X') === 3 ||
                getOccurance(gameboardArrFirstCol, 'X') === 3 ||
                getOccurance(gameboardArrSecondCol, 'X') === 3 ||
                getOccurance(gameboardArrThirdCol, 'X') === 3) {
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
                getOccurance(gameboardArrThirdCol, 'O') === 3) {
                console.log("'O' wins!");
                gameboardDivs.forEach(gameboardDiv => {
                    gameboardDiv.setAttribute('style', 'pointer-events: none');
                });
            }
        });
    }
    return { counter };
})();
function getOccurance(array, value) {
    return array.filter((v) => (v === value)).length;
}
