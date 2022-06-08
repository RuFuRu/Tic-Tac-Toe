const gameboardElement = document.querySelector('.gameboard') as HTMLDivElement;
const gameboardDivs = document.querySelectorAll('.gameboard > div');
console.log(gameboardDivs);

const gameboard = (() => {
    //"p" in gameboardArrs stands for "placeholder"
    const gameboardArr: string[] = ['p','p','p','p','p','p','p','p','p'];
    const gameboardArrFirstCol: string[] = ['p','p','p'];
    const gameboardArrSecondCol: string[] = ['p','p','p'];
    const gameboardArrThirdCol: string[] = ['p','p','p'];
    const gameboardArrDiagonalFirst: string[] = ['p','p','p'];
    const gameboardArrDiagonalSecond: string[] = ['p','p','p'];
    let counter = 0;
    
    for(let i = 0; i < gameboardDivs.length; i++) {
        gameboardDivs[i].addEventListener('click', () => {
            if(counter % 2 === 0) {
                gameboardDivs[i].textContent = 'O';
                gameboardDivs[i].setAttribute('style', 'pointer-events: none');
                gameboardArr[i] = 'O';
                counter++;
                console.log(counter);
            }
            else if(counter % 2 !== 0) {
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
            
            gameboardArrDiagonalFirst[0] = gameboardArr[0];
            gameboardArrDiagonalFirst[1] = gameboardArr[4];
            gameboardArrDiagonalFirst[2] = gameboardArr[8];

            gameboardArrDiagonalSecond[0] = gameboardArr[2];
            gameboardArrDiagonalSecond[1] = gameboardArr[4];
            gameboardArrDiagonalSecond[2] = gameboardArr[6];

            if(getOccurance(gameboardArr.slice(0,3),'X') === 3    ||
               getOccurance(gameboardArr.slice(3,6),'X') === 3    ||
               getOccurance(gameboardArr.slice(6),'X') === 3      ||
               getOccurance(gameboardArrFirstCol,'X') === 3       ||
               getOccurance(gameboardArrSecondCol,'X') === 3      ||
               getOccurance(gameboardArrThirdCol,'X') === 3       ||
               getOccurance(gameboardArrDiagonalFirst,'X') === 3  ||
               getOccurance(gameboardArrDiagonalSecond,'X') === 3) {
                console.log("'X' wins!");
                gameboardDivs.forEach(gameboardDiv => {
                    gameboardDiv.setAttribute('style','pointer-events: none');
                })
            }
            else if(getOccurance(gameboardArr.slice(0,3),'O') === 3    ||
                    getOccurance(gameboardArr.slice(3,6),'O') === 3    ||
                    getOccurance(gameboardArr.slice(6),'O') === 3      ||
                    getOccurance(gameboardArrFirstCol,'O') === 3       ||
                    getOccurance(gameboardArrSecondCol,'O') === 3      ||
                    getOccurance(gameboardArrThirdCol,'O') === 3       ||
                    getOccurance(gameboardArrDiagonalFirst,'O') === 3  ||
                    getOccurance(gameboardArrDiagonalSecond,'O') === 3) {
                     console.log("'O' wins!");
                     gameboardDivs.forEach(gameboardDiv => {
                        gameboardDiv.setAttribute('style','pointer-events: none');
                    })
            }
            else if(getOccurance(gameboardArr,'p') === 0) {
                console.log("A tie!");
            }
        })
    }

    return {counter};
})();


function getOccurance(array:string[],value:string):number {
    return array.filter((v) => (v === value)).length;
}

