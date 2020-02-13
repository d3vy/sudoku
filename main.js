let sudoku;
let status;
let gen;

function setup() {
    createCanvas(310, 290);
    //noLoop();
    frameRate(2);

    sudoku = new Sudoku();
    status = createP();
    gen = 1;
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

    if(!sudoku.solving && sudoku.valid === null) {
        sudoku.solving = true;
        this.validate();
    } else if(!sudoku.solving && sudoku.valid === false) {
        sudoku.init();
        gen++;
    }

    stroke(192);
    status.html(
        (sudoku.solving ? 'In progress' : (sudoku.valid ? 'Valid' : 'Invalid'))
        + '<br>' + gen
    );
}

async function validate() {
    sudoku.valid = sudoku.solve();
    sudoku.solving = false;
}
