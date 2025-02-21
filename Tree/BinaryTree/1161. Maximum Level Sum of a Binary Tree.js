var maxLevelSum = function (root) {
  let queue = [root];
  let count = 0;
  let res = 0;
  let maxsum = -Infinity;

  while (queue.length) {
    let l = queue.length;
    let levelsum = 0;

    for (let i = 0; i < l; i++) {
      let node = queue.shift();
      levelsum += node.val;

      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    count++;
    if (levelsum > maxsum) {
      res = count;
      maxsum = levelsum;
    }
  }
  return res;
};
