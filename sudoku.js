class Sudoku {
    constructor() {
        this.grid = [];

        for(let row = 0; row < 9; row++) {
            this.grid[row] = [];
            for(let col = 0; col < 9; col++) {
                this.grid[row][col] = 0;
            }
        }

        this.init(false);
    }

    init(fillZeroes = true) {
        this.valid = null;
        this.solving = false;

        if(fillZeroes) {
            for(let row = 0; row < 9; row++) {
                for(let col = 0; col < 9; col++) {
                    this.grid[row][col] = 0;
                }
            }
        }

        for(let i = 0; i < 35; i++) {
            let row, col, value;
            while((value = this.grid[row = Math.floor(Math.random() * 9)][col = Math.floor(Math.random() * 9)]) !== 0);
            while(!this.possible(row, col, value = Math.floor(Math.random() * 9) + 1));
            this.grid[row][col] = value;
        }
    }

    solve() {
        for(let row = 0; row < 9; row++) {
            for(let col = 0; col < 9; col++) {
                if(this.grid[row][col] === 0) {
                    for(let value = 1; value <= 9; value++) {
                        if(this.possible(row, col, value)) {
                            this.grid[row][col] = value;
                            if(this.solve()) {
                                return true;
                            }
                            this.grid[row][col] = 0;
                        }
                    }

                    return false;
                }
            }
        }

        return true;
    }

    possible(row, col, value) {
        for(let i = 0; i < 9; i++) {
            if(this.grid[row][i] === value || this.grid[i][col] === value) {
                return false;
            }
        }

        let x = Math.floor(col / 3) * 3;
        let y = Math.floor(row / 3) * 3;
        for(let i = 0; i < 3; i++) {
            for(let j = 0; j < 3; j++) {
                if(this.grid[y + i][x + j] === value) {
                    return false;
                }
            }
        }

        return true;
    }
}
