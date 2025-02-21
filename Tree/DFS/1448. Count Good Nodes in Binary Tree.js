var goodNodes = function (root) {
  let max = -Infinity;
  let count = 0;

  var dfs = (node, max) => {
    if (!node) return null;
    if (node.val >= max) {
      max = node.val;
      count++;
    }

    if (node.left) dfs(node.left, max);
    if (node.right) dfs(node.right, max);
  };

  dfs(root, max);
  return count;
};
