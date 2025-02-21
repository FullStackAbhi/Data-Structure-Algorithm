var searchBST = function (root, val) {
  var dfs = (node) => {
    if (!node) return null;
    if (node.val === val) return node;
    else if (val > node.val && node.right) return dfs(node.right);
    else return dfs(node.left);
  };
  return dfs(root);
};
