const size = 40;

let sudoku;

function setup() {
    createCanvas(size * 9, size * 9);
    frameRate(10);

    sudoku = new Sudoku();
}

function draw() {
    clear();

    textSize(size / 2);
    for(let i = 0; i < 81; i++) {
        let row = Math.floor(i / 9);
        let col = i % 9;

        let cell = sudoku.grid.getCell(row, col);

        stroke(96);
        if(cell.focused) {
            fill(96);
        } else {
            noFill();
        }
        square(col * size, row * size, size);

        noStroke();
        fill(cell.stored ? 255 : 192);
        textFont(cell.stored ? 'Lemonada' : 'Shadows Into Light');
        text(cell.value ? cell.value : '', col * size + size / 3, row * size + size / 1.5);
    }

    stroke(255);
    noFill();
    square(0, 0, width);
    line(width / 3, 0, width / 3, height);
    line(width / 3 * 2, 0, width / 3 * 2, height);
    line(0, height / 3, width, height / 3);
    line(0, height / 3 * 2, width, height / 3 * 2);
}

function mousePressed() {
    for(let i = 0; i < 81; i++) {
        let row = Math.floor(i / 9);
        let col = i % 9;

        let cell = sudoku.grid.getCell(Math.floor(i / 9), i % 9);
        cell.focused = !cell.stored
            && mouseX >= col * size && mouseX < col * size + size
            && mouseY >= row * size && mouseY < row * size + size;
    }
}

function keyPressed() {
    let value = keyCode - 48;
    if(value >= 0 && value < 10) {
        sudoku.setFocusedCell(value);
    } else {
        value = keyCode - 96;
        if(value >= 0 && value < 10) {
            sudoku.setFocusedCell(value);
        }
    }
}
