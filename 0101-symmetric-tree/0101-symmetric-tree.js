/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function (root) {
    if (!root) return true
    if(!root.left && !root.right)return true
    if(!root.left || !root.right)return false
    

    var helper = (p, q) => {
        if (!p && !q) return true
        if (!p || !q) return false
        if (p.val !== q.val) return false

        let r1 = helper(p.left, q.right)
        let r2 = helper(p.right, q.left)
        return r1 && r2
    }

     return helper(root.left, root.right)
};