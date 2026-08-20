/**
 * @param {number[][]} graph
 * @return {boolean}
 */
var isBipartite = function (graph) {
    let color = 0
    let bipartite = true
    let vis = new Array(graph.length).fill(false)
    let col = new Array(graph.length).fill(false)

    var dfs = (i, c) => {
        vis[i] = true
        col[i] = c

        for (let ngbr of graph[i]) {
            if (!vis[ngbr]) {
                dfs(ngbr, 1 - c)
            } else {
                if(col[ngbr] == c){
                    bipartite = false
                }

            }
        }



    }

    for (let i = 0; i < graph.length; i++) {
        if (!vis[i]) dfs(i, color)
    }
return bipartite
};