var orangesRotting = function (grid) {
    let m = grid.length;
    let n = grid[0].length;
    let queue = []
    let count = -1
    let fresh = 0


    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] == 2) {
                queue.push([i, j])
            } else if (grid[i][j] == 1) {
                fresh++
            }
        }
    }

    if (fresh == 0) return 0

    let dire = [[1, 0], [0, 1], [-1, 0], [0, -1]]

    while (queue.length) {
        let l = queue.length
        count++

        for (let i = 0; i < l; i++) {
            let [x, y] = queue.shift()

            for (let [dx, dy] of dire) {

                let newX = x + dx
                let newY = y + dy

                if (newX >= 0 && newY >= 0 && newX < m && newY < n && grid[newX][newY] == 1) {
                    fresh--
                    grid[newX][newY] = 2
                    queue.push([newX, newY])
                }
            }
        }
    }
    
    return fresh == 0 ? count : -1  





};