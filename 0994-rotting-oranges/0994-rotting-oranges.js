/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function (grid) {
    let m = grid.length
    let n = grid[0].length

    let vis = Array.from({ length: m }, () => new Array(n).fill(false))

    let queue = []
    let count = 0
    let fresh = 0

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] == 2) {
                queue.push([i, j, 0])
                grid[i][j] = -1
            } else if (grid[i][j] == 1) {
                fresh++
            }
        }
    }

    while (queue.length && fresh > 0) {
        let [row, col, time] = queue.shift()
        let dire = [[1, 0], [0, 1], [-1, 0], [0, -1]]

        for (let [dr, dc] of dire) {
            let newRow = row + dr;
            let newCol = col + dc;
            if (newRow >= 0 && newRow < m && newCol >= 0 && newCol < n && grid[newRow][newCol] == 1
            ) {
                queue.push([newRow, newCol, time + 1])
                fresh--
                grid[newRow][newCol] = -1
                count = Math.max(count, time + 1)

            }
        }





    }
    if (fresh > 0) return -1
    return count

};







