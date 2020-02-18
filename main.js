const size = 40;

let sudoku;

function setup() {
    createCanvas(size * 9, size * 9);
    noLoop();

    sudoku = new Sudoku();
}

function draw() {
    background(32);
    textSize(size / 2);

    for(let row = 0; row < 9; row++) {
        for(let col = 0; col < 9; col++) {
            stroke(92);
            noFill();
            square(col * size, row * size, size);

            noStroke();
            fill(255);
            text(sudoku.grid[row][col] ? sudoku.grid[row][col] : '', col * size + size / 2.5, row * size + size / 1.5);
        }
    }

    stroke(255);
    noFill();
    square(0, 0, width);
    line(width / 3, 0, width / 3, height);
    line(width / 3 * 2, 0, width / 3 * 2, height);
    line(0, height / 3, width, height / 3);
    line(0, height / 3 * 2, width, height / 3 * 2);
}
