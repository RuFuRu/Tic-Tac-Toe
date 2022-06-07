const gameboardElement = document.querySelector('.gameboard') as HTMLDivElement;
const gameboardDivs = document.querySelectorAll('.gameboard > div');
console.log(gameboardDivs);

const gameboard = (() => {
    //"p" in gameboardArr stands for "placeholder"
    const gameboardArr: string[] = ['p','p','p','p','p','p','p','p','p'];
    const gameboardFirstCol: string[] = ['p','p','p'];
    const gameboardSecondCol: string[] = ['p','p','p'];
    const gameboardThirdCol: string[] = ['p','p','p'];
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

            gameboardFirstCol[0] = gameboardArr[0];
            gameboardFirstCol[1] = gameboardArr[3];
            gameboardFirstCol[2] = gameboardArr[6];
            gameboardSecondCol[0] = gameboardArr[1];
            gameboardSecondCol[1] = gameboardArr[4];
            gameboardSecondCol[2] = gameboardArr[7];
            gameboardThirdCol[0] = gameboardArr[2];
            gameboardThirdCol[1] = gameboardArr[5];
            gameboardThirdCol[2] = gameboardArr[8];

            if(getOccurance(gameboardArr.slice(0,3),'X') === 3 ||
               getOccurance(gameboardArr.slice(3,6),'X') === 3 ||
               getOccurance(gameboardArr.slice(6),'X') === 3   ||
               getOccurance(gameboardFirstCol,'X') === 3       ||
               getOccurance(gameboardSecondCol,'X') === 3      ||
               getOccurance(gameboardThirdCol,'X') === 3) {
                console.log("'X' wins!");
                gameboardDivs.forEach(gameboardDiv => {
                    gameboardDiv.setAttribute('style','pointer-events: none');
                })
            }
            else if(getOccurance(gameboardArr.slice(0,3),'O') === 3 ||
                    getOccurance(gameboardArr.slice(3,6),'O') === 3 ||
                    getOccurance(gameboardArr.slice(6),'O') === 3   ||
                    getOccurance(gameboardFirstCol,'O') === 3       ||
                    getOccurance(gameboardSecondCol,'O') === 3      ||
                    getOccurance(gameboardThirdCol,'O') === 3) {
                     console.log("'O' wins!");
                     gameboardDivs.forEach(gameboardDiv => {
                        gameboardDiv.setAttribute('style','pointer-events: none');
                    })
            }
        })
    }

    return {counter};
})();


function getOccurance(array:string[],value:string):number {
    return array.filter((v) => (v === value)).length;
}

