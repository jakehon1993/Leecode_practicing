/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    const markIsland = (arr, rowI, colI) => {
        if (rowI < 0 || rowI >= arr.length ||           // if row index isn't between the row length
            colI < 0 || colI >= arr[0].length ||        // if col index isn't between the column length
            arr[rowI][colI] !== "1")                   // if this cell isn't an island cell) 
        {         
            return;
        }
        // mark this island cell as "mark", in fact, you can mark whatever you want
        // once this cell marked, we won't count for this cell anymore
        arr[rowI][colI] = "mark";           
        
        // up
        markIsland(arr, rowI - 1, colI);
        // down
        markIsland(arr, rowI + 1, colI);
        // left
        markIsland(arr, rowI, colI - 1);
        // right
        markIsland(arr, rowI, colI + 1);
    }
    
    let rowIndex = 0;
    let colIndex = 0;
    let islandCount = 0;
    
    // loop each row
    for (let i = 0; i < grid.length; i++) {
        colIndex = 0;
        // loop each column
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[i][j] === "1") {
                islandCount++;
                markIsland(grid, i, j);
            }
        }
    }
    return islandCount;
};