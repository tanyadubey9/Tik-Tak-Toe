let btns = document.querySelectorAll('.btn');
let resetBtn = document.querySelector('.reset-btn');
let startBtn = document.querySelector('.start-btn');
let msg = document.querySelector('.msg');
let box = document.querySelector('.box');

let turn0 = true;
let count = 0;
 
const winPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

const resetGame = () => {
    let turn0 = true;
    enableBtn();
    box.classList.add('hide');
    msg.textContent = '';
    count = 0;
}

btns.forEach((btn) => {
    btn.addEventListener('click', () => {
        if (turn0) {
            btn.innerText = '0';
            btn.style.color = '#8c2604';
            turn0 = false;
        } else{
            btn.innerText = 'X';
            btn.style.color = '#ff8800';
            turn0 = true;
        }
        btn.disabled = true;
        count++;

        let isWinner = checkWinner();

        if(count === 9 && !isWinner){
            gameDraw();
        }
    })
});

const gameDraw = () => {
    msg.textContent = 'It\'s a draw!';
    box.classList.remove('hide');
    disableBtn();
}

const enableBtn = () => {
    for(let btn of btns){
        btn.disabled = false;
        btn.innerText = "";
    }
}
const disableBtn = () => {
    for(let btn of btns){
        btn.disabled = true;
    }
}

const showWinner = (winner) => {
    msg.innerText = `Player ${winner} is Winner!`;
    box.classList.remove("hide");
    disableBtn();
}

const checkWinner = () => {
    winPatterns.forEach((pattern) => {
        let a = btns[pattern[0]].innerText;
        let b = btns[pattern[1]].innerText;
        let c = btns[pattern[2]].innerText;

        if(a != '' && b != '' && c != ''){
            if (a == b && b == c) {
                showWinner(a);
            }
        }
    })
};

resetBtn.addEventListener('click', resetGame);
startBtn.addEventListener('click', resetGame);