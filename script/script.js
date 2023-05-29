
function createGrid() {
    let cell = document.createElement('div');
    cell.classList.add('cell');
    return cell;
}

const play_btn = document.getElementById('play_btn');

play_btn.addEventListener('click', function(){
    const grid = document.getElementById('grid');
    grid.innerHTML = '';

    const maxDifficulty = 100;

    for (let i = 1; i <= maxDifficulty; i++) {
    let cell = createGrid();
    cell.innerHTML = i;

    cell.addEventListener('click', function(){
        
        this.classList.add('clicked_cell');
            console.log(this.innerHTML);
        });

        grid.append(cell);
}
});







