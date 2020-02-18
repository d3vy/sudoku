class Sudoku {
    constructor() {
        this.grid = Grid.init();

        this.grid.generate();
        this.clearCells();
    }

    clearCells(attempts = 5) {
        let i;

        while(attempts > 0) {
            while(this.grid.cells[i = Math.floor(random(81))] === 0);
            let value = this.grid.cells[i];
            this.grid.cells[i] = 0;

            let testGrid = this.grid.clone();
            testGrid.solutions = 0;
            testGrid.solve();

            if(testGrid.solutions !== 1) {
                this.grid.cells[i] = value;
                attempts--;
            }
        }
    }
}
