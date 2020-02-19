class Sudoku {
    constructor() {
        this.grid = Grid.init();

        this.grid.generate();
        this.clearCells();
    }

    clearCells(attempts = 5) {
        let i;

        while(attempts > 0) {
            while(this.grid.cells[i = Math.floor(random(81))].value === 0);
            let value = this.grid.cells[i].value;
            this.grid.cells[i].value  = 0;
            this.grid.cells[i].stored = false;

            let testGrid = this.grid.clone();
            testGrid.solutions = 0;
            testGrid.solve();

            if(testGrid.solutions !== 1) {
                this.grid.cells[i].value  = value;
                this.grid.cells[i].stored = true;
                attempts--;
            }
        }
    }

    setFocusedCell(value) {
        let cell;

        for(let i = 0; i < 81; i++) {
            if((cell = this.grid.cells[i]).focused) {
                cell.value   = value;
                cell.focused = false;
                break;
            }
        }
    }
}
