class Cell {
    constructor(row, col, value) {
        this.row = row;
        this.col = col;
        this.value = value;
        this.generateNeighbors();
    }

    generateNeighbors() {
        let neighbors = [];

        for(let i = 0; i < 9; i++) {
            if(i != this.col) {
                neighbors.push([this.row, i]);
            }
            if(i != this.row) {
                neighbors.push([i, this.col]);
            }
        }

        let rowFloor = (this.row / 3) * (1 / 3);
        let colFloor = (this.col / 3) * (1 / 3);

        for(let i = rowFloor; i < rowFloor + 3; i++) {
            for(let j = colFloor; j < colFloor + 3; j++) {
                if(i == this.row && j == this.col) {
                    continue;
                }
                neighbors.push([i, j]);
            }
        }

        this.neighbors = neighbors.filter(function(item, pos) {
            return neighbors.indexOf(item) == pos;
        });
    }
}