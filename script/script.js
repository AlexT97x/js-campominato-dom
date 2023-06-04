"use strict";

function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function fillExplosiveCell(array_explosive_tnt, max) {
       
    let control = false;
    let random;

    while (control === false) {
        random = generateRandomNumber(1, max);
        
        if (!array_explosive_tnt.includes[random]) {
            control = true;
        }
    }
    return random;
}

function newGame() {
    const grid = document.getElementById('grid'); 
    const array_explosive_tnt = []; 

    
    const difficulty_level = parseInt(document.getElementById('difficulty_level').value); 

    
    let cellNumber;
    switch (difficulty_level) {
        case 0:
        cellNumber = 100;
        break;
        case 1:
        cellNumber = 81;
        break;
        case 2:
        cellNumber = 49;
        break;
    }

    for (let i = 0; i < 16; i++) {
        let number = fillExplosiveCell(array_explosive_tnt, cellNumber); 
        array_explosive_tnt.push(number);
    }
    console.log(array_explosive_tnt)

    grid.innerHTML = ''; 

    createCell(cellNumber, array_explosive_tnt); 
}


function createCell(cellx, array_explosive_tnt) { 

    
    let gameTheEnd = false;

    
    let score = 0;

    
    for (let i = 0; i < cellx; i++) {

        const cell = document.createElement('div');
        let cellForRow = Math.sqrt(cellx);

        cell.classList.add('cell');
        cell.style.width =`calc(100% / ${cellForRow})`;
        cell.style.height = cell.style.width;
        cell.innerHTML = i + 1;

        cell.addEventListener('click', function(){

            if (gameTheEnd === false) {

                if(!array_explosive_tnt.includes(parseInt(this.innerText))){
                    this.classList.add('clicked_cell');
                    score++;
                    console.log(score);
                }
                else{
                    this.classList.add('cell_exploded');
                    gameTheEnd = true;

                    
                    let cell_all = document.querySelectorAll('.cell')
                    for (let i = 0; i < cell_all.length; i++){
                        if (array_explosive_tnt.includes(i+1)){
                            cell_all[i].classList.add('cell_explode'); 
                        }
                    }

                    alert(`Il tuo punteggio è: ${score} . Premi Play e prova a fare di meglio! :)`);
                   

                }
            }
        })
        grid.append(cell);
    }
}


btn.addEventListener('click', function(){
    const btn = document.getElementById('btn'); 
    alert("Benvenuto in campo minato, scegli il livello di difficoltà e prova a fare il punteggio migliore :)")
    newGame();
})