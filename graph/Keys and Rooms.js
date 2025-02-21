var canVisitAllRooms = function (rooms) {
  let vis = new Array(rooms.length).fill(false);
  var dfs = (i) => {
    vis[i] = true;

    for (let key of rooms[i]) {
      if (!vis[key]) {
        dfs(key);
      }
    }
  };
  dfs(0, vis);
  return !vis.includes(false);
};
