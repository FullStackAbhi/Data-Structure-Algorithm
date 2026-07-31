/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    let temp1 = list1
    let temp2 = list2
    let newList = new ListNode(-1)
    let temp = newList

    while(temp1 && temp2){
        if(temp1.val <= temp2.val){
            temp.next = temp1
            temp1 = temp1.next
        }else{
            temp.next = temp2
            temp2 = temp2.next
        }
        temp = temp.next
    }
    if(temp1 || temp2){
        if(!temp1){
            temp.next = temp2
        }else{
            temp.next = temp1
        }
    }
    
    return newList.next
    
};