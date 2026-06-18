const boxes = document.querySelectorAll('.box');
const resetBtn = document.querySelector('#reset-btn');
const messageContainer = document.querySelector('.msgContainer');
const msg = document.querySelector('#msg')


let turnO = true;

let winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,4,6],
    [2,5,8],
    [3,4,5],
    [6,7,8]
]

boxes.forEach((box)=>{
    box.addEventListener('click',()=>{
        console.log('box was clicked');
        if(turnO){
            box.innerText = 'O';
            turnO = false;
        } else{
            box.innerText = 'X';
            turnO = true;
        }
        box.disabled = true;

        checkWinner();
    })
})

const showWinner = (winner)=>{
    msg.innerText = `Congratulation, winner is ${winner}`
    messageContainer.classList.remove('hide')
}

const checkWinner = ()=> {
    for(let pattern of winPatterns){
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;

        if(pos1 != '' && pos2 != '' && pos3 != ''){
            if(pos1 === pos2 && pos2 === pos3 && pos3 === pos1){
                console.log('winner')
                showWinner(pos1)
            }
        }
    }
};

const resetGame = () => {
    turnO = true;

    boxes.forEach((box) => {
        box.innerText = '';
        box.disabled = false;
    });

    messageContainer.classList.add('hide');
};

resetBtn.addEventListener('click', resetGame);