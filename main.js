let sudoku;

function setup() {
    createCanvas(310, 290);
    frameRate(5);

    sudoku = new Sudoku();
}

function draw() {
    background(50);
    noStroke();
    fill(255);

    for(let row = 0; row < 9; row++) {
        for(let col = 0; col < 9; col++) {
            text(sudoku.grid[row][col] ? sudoku.grid[row][col] : '', (col + 1) * 30, (row + 1) * 30);
        }
    }

    stroke(192);
    line(108, 0, 108, height);
    line(199, 0, 199, height);
    line(0, 100, width, 100);
    line(0, 190, width, 190);

    stroke(192);

    //sudoku.clearCells(sudoku.grid);
}
