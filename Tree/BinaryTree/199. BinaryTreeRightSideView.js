var rightSideView = function (root) {
  if (!root) return [];

  let queue = [root];
  let res = [];

  while (queue.length) {
    let l = queue.length;
    let arr = [];

    for (let i = 0; i < l; i++) {
      let node = queue.shift();
      arr.push(node.val);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    res.push(arr.pop());
  }

  return res;
};
