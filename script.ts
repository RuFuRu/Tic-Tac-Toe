const gameboardElement = document.querySelector('.gameboard') as HTMLDivElement;
const gameboardDivs = document.querySelectorAll('.gameboard > div');
console.log(gameboardDivs);

const gameboard = (() => {
    //"p" in gameboardArr stands for "placeholder"
    const gameboardArr: string[] = ['p','p','p','p','p','p','p','p','p'];
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
        })
    }

    return {counter};
})();


function getOccurance(array:any[],value:number):number {
    return array.filter((v) => (v === value)).length;
}

