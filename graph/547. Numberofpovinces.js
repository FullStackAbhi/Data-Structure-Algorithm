var findCircleNum = function (isConnected) {
  let l = isConnected.length;
  let vis = new Set();
  let prov = 0;

  var dfs = (j) => {
    for (let i = 0; i < l; i++) {
      if (!vis.has(i) && isConnected[j][i] == 1) {
        vis.add(i);
        dfs(i);
      }
    }
  };

  for (let i = 0; i < l; i++) {
    if (!vis.has(i)) {
      vis.add(i);
      prov++;
      dfs(i);
    }
  }

  return prov;
};
