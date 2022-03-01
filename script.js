const boxesContainer = document.querySelector('#boxes');
const btn = document.querySelector('#btn');
const btnNext = document.querySelector('#btn-next');

btn.addEventListener('click', () => boxesContainer.classList.toggle('big'));

btnNext.addEventListener('click', () => createBoxes());

const backgrounds = [
    "https://media1.giphy.com/media/zhGRowTUojQnUKi5uF/giphy.gif?cid=ecf05e47457d51bac7a5a1726117a04a8f60eef0936975d1&rid=giphy.gif&ct=g",
    "https://i.giphy.com/media/l0EwXVZspYdjkXh1S/giphy.webp",
    "https://i.giphy.com/media/lJNoBCvQYp7nq/giphy.webp",
    "https://i.giphy.com/media/BLCHvwl9C5j1u/giphy.webp"
]

let idx = 0;

function createBoxes(){
    const selectBox = document.querySelectorAll('.box')
    if(selectBox.length > 0){
        selectBox.forEach(e => e.remove())
    }
    for(let i = 0; i < 4; i++){
        for(let j = 0; j < 4; j++){
            const box = document.createElement('div');
            box.classList.add('box');
            box.style.backgroundImage = `url(${backgrounds[idx > backgrounds.length - 1?idx=0:idx]})`
            box.style.backgroundPosition = `${-j * 83.33}px ${-i * 83.33}px` 
            boxesContainer.appendChild(box)
        }
    }
    idx++
};

createBoxes();