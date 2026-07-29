/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function (head, left, right) {
    if (!head || !head.next) return head

    let temp = head
    let prev = null
    let next = temp.next
    let i = 1

    while (temp && i < left) {
        prev = temp
        temp = temp.next
        next = temp.next
        i++
    }
    let leftprev = prev
    let leftNode = temp
    prev = null
    // console.log(prev , temp , next)
    while (temp && i <= right) {
        next = temp.next
        temp.next = prev
        prev = temp
        temp = next
        i++
    }
    
    if (leftprev) {
        leftprev.next = prev;
    } else {
        head = prev;
    }
    leftNode.next = temp;

    return head;



};