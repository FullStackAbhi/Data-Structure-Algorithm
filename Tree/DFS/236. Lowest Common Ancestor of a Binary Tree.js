var lowestCommonAncestor = function (root, p, q) {
  var dfs = (node) => {
    if (!node) return null;

    if (node == p || node == q) return node;

    let left = dfs(node.left);
    let right = dfs(node.right);

    if (left && right) return node;
    return left ? left : right;
  };

  return dfs(root);
};
