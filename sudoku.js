class Sudoku {
    constructor() {
        this.grid = [];
        this.solutions;

        for(let row = 0; row < 9; row++) {
            this.grid[row] = [];
            for(let col = 0; col < 9; col++) {
                this.grid[row][col] = 0;
            }
        }

        this.generate(this.grid);
        this.clearCells(this.grid);
    }

    generate(grid) {
        for(let row = 0; row < 9; row++) {
            for(let col = 0; col < 9; col++) {
                if(grid[row][col] === 0) {
                    let values = shuffle([1, 2, 3, 4, 5, 6, 7, 8, 9]);
                    for(let i = 0; i < 9; i++) {
                        let value = values[i];
                        if(this.possible(grid, row, col, value)) {
                            grid[row][col] = value;
                            if(this.generate(grid)) {
                                return true;
                            }
                            grid[row][col] = 0;
                        }
                    }

                    return false;
                }
            }
        }

        return true;
    }

    solve(grid) {
        for(let row = 0; row < 9; row++) {
            for(let col = 0; col < 9; col++) {
                if(grid[row][col] === 0) {
                    for(let value = 1; value <= 9; value++) {
                        if(this.possible(grid, row, col, value)) {
                            grid[row][col] = value;
                            if(this.countClearCells(grid) === 0) {
                                this.solutions++;
                                break;
                            } else if(this.solve(grid)) {
                                return true;
                            }
                            grid[row][col] = 0;
                        }
                    }

                    return false;
                }
            }
        }

        return true;
    }

    clearCells(grid, attempts = 5) {
        let row;
        let col;

        while(attempts > 0) {
            while(grid[row = Math.floor(random(9))][col = Math.floor(random(9))] === 0);
            let value = grid[row][col];
            grid[row][col] = 0;

            let tmpGrid = [];
            for(let i = 0; i < 9; i++) {
                tmpGrid[i] = [];
                for(let j = 0; j < 9; j++) {
                    tmpGrid[i][j] = grid[i][j];
                }
            }

            this.solutions = 0;
            this.solve(tmpGrid);

            if(this.solutions !== 1) {
                grid[row][col] = value;
                attempts--;
            }
        }
    }

    possible(grid, row, col, value) {
        for(let i = 0; i < 9; i++) {
            if(grid[row][i] === value || grid[i][col] === value) {
                return false;
            }
        }

        let x = Math.floor(col / 3) * 3;
        let y = Math.floor(row / 3) * 3;
        for(let i = 0; i < 3; i++) {
            for(let j = 0; j < 3; j++) {
                if(grid[y + i][x + j] === value) {
                    return false;
                }
            }
        }

        return true;
    }

    countClearCells(grid) {
        let num = 0;
        for(let row = 0; row < 9; row++) {
            for(let col = 0; col < 9; col++) {
                if(grid[row][col] === 0) {
                    num++;
                }
            }
        }

        return num;
    }
}
