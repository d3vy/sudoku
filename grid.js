class Grid {
    constructor() {
        this.cells = [];
        this.solutions;
    }

    getCell(row, col) {
        return this.cells[row * 9 + col];
    }

    setCell(row, col, value) {
        this.cells[row * 9 + col] = new Cell(value);
        return this;
    }

    generate() {
        for(let i = 0; i < 81; i++) {
            if(this.cells[i].value === 0) {
                let values = shuffle([1, 2, 3, 4, 5, 6, 7, 8, 9]);
                for(let value of values) {
                    if(this.possible(Math.floor(i / 9), i % 9, value)) {
                        this.cells[i].value = value;
                        if(this.generate()) {
                            return true;
                        }
                        this.cells[i].value = 0;
                    }
                }

                return false;
            }
        }

        return true;
    }

    solve() {
        for(let i = 0; i < 81; i++) {
            if(this.cells[i].value === 0) {
                for(let value = 1; value <= 9; value++) {
                    if(this.possible(Math.floor(i / 9), i % 9, value)) {
                        this.cells[i].value = value;
                        if(this.countEmptyCells() === 0) {
                            this.solutions++;
                            break;
                        } else if(this.solve()) {
                            return true;
                        }
                        this.cells[i].value = 0;
                    }
                }

                return false;
            }
        }

        return true;
    }

    possible(row, col, value) {
        for(let i = 0; i < 9; i++) {
            if(this.getCell(row, i).value === value || this.getCell(i, col).value === value) {
                return false;
            }
        }

        let x = Math.floor(col / 3) * 3;
        let y = Math.floor(row / 3) * 3;
        for(let i = 0; i < 3; i++) {
            for(let j = 0; j < 3; j++) {
                if(this.getCell(y + i, x + j).value === value) {
                    return false;
                }
            }
        }

        return true;
    }

    countEmptyCells() {
        let num = 0;
        for(let i = 0; i < 81; i++) {
            if(this.cells[i].value === 0) {
                num++;
            }
        }

        return num;
    }

    clone() {
        let clone = new Grid();
        for(let i = 0; i < 81; i++) {
            clone.cells[i] = new Cell(this.cells[i].value, this.cells[i].stored);
        }

        return clone;
    }

    static init() {
        let grid = new Grid();

        for(let i = 0; i < 81; i++) {
            grid.cells[i] = new Cell(0);
        }

        return grid;
    }
}
