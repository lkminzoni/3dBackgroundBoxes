   
class backgroundBoxesApp{
    constructor(){

        this.boxesContainer = document.querySelector('#boxes');
        this.btn = document.querySelector('#btn');
        this.btnNext = document.querySelector('#btn-next');
        this.idx = 0;
        this.backgrounds = [
            "https://media1.giphy.com/media/zhGRowTUojQnUKi5uF/giphy.gif?cid=ecf05e47457d51bac7a5a1726117a04a8f60eef0936975d1&rid=giphy.gif&ct=g",
            "https://i.giphy.com/media/l0EwXVZspYdjkXh1S/giphy.webp",
            "https://i.giphy.com/media/lJNoBCvQYp7nq/giphy.webp",
            "https://i.giphy.com/media/BLCHvwl9C5j1u/giphy.webp"
        ];
        this.start();
    }
   
    start(){
        this.btn.addEventListener('click', () => this.boxesContainer.classList.toggle('big').bind(this));
        this.btnNext.addEventListener('click', () => this.createBoxes());
        this.createBoxes();
        
    }

    createBoxes(){
        const selectBox = document.querySelectorAll('.box')
        if(selectBox.length > 0){
            selectBox.forEach(e => e.remove())
        };
        for(let i = 0; i < 4; i++){
            for(let j = 0; j < 4; j++){
                const box = document.createElement('div');
                box.classList.add('box');
                box.style.backgroundImage = `url(${this.backgrounds[this.idx > this.backgrounds.length - 1?this.idx=0:this.idx]})`;
                box.style.backgroundPosition = `${-j * 83.33}px ${-i * 83.33}px`; 
                this.boxesContainer.appendChild(box);
            }
        }
        this.idx++;
    };


}

const background = new backgroundBoxesApp();