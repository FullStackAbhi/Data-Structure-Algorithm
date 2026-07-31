/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    let slow = head
    let fast = head

    while(fast && fast.next){
        slow = slow.next
        fast = fast.next.next
    }
    let temp = slow
    let prev = null
    let next = temp.next;

    while(temp) {
        next = temp.next
        temp.next = prev
        prev = temp
        temp = next
    }
slow = head
    while(prev && slow){
        // console.log(slow.val  , prev.val)
        if(slow.val !== prev.val)return false
        slow = slow.next
        prev = prev.next
    }
    return true
    
};