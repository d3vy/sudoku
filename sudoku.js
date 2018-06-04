class Sudoku {
    constructor() {
        this.grid = [];

        let options = [];
        for(var i = 1; i <= 9; i++) {
            options.push(i);
        }

        for(let i = 0; i < 9; i++) {
            let row = [];
            let available = options.slice();
            for(let j = 0; j < 9; j++) {
                let index = Math.floor(Math.random() * available.length);
                let num = available[index];
                available.splice(index, 1);
                row.push(new Cell(i, j, num));
            }
            this.grid.push(row);
        }
    }

    findInCol(i, j, num) {
        for(let k = 0; k < i; k++) {
            if(this.grid[k][j] == num) {
                return true;
            }
        }
        return false;
    }
}