const gameboardElement = document.querySelector('.gameboard') as HTMLDivElement;
const gameboardDivs = document.querySelectorAll('.gameboard > div');
console.log(gameboardDivs);

const gameboard = (() => {
    const gameboardArr: string[] = ['x','O','x'];
    let counter = 1;
    return {counter};
})();

for(let i = 0; i < gameboardDivs.length; i++) {
    gameboardDivs[i].addEventListener('click', () => {
        if(gameboard.counter % 2 === 0) {
            const circle = document.createElement('p');
            circle.textContent = "O";
            gameboardDivs[i].appendChild(circle);
            gameboardDivs[i].setAttribute('style', 'pointer-events: none');
            gameboard.counter++;
        }
        else if(gameboard.counter % 2 !== 0) {
            const x = document.createElement('p');
            x.textContent = "X";
            gameboardDivs[i].appendChild(x);
            gameboardDivs[i].setAttribute('style', 'pointer-events: none');
            gameboard.counter++;
        }
    })
}
