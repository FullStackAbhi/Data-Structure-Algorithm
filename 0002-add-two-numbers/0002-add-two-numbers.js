/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
    let temp1 = l1
    let temp2 = l2
    let newList = new ListNode(-1)
    let temp = newList
    let carry = 0

    // while (temp1 && temp2) {
    //     let sum = temp1.val + temp2.val + carry
    //     if (sum < 10) {
    //         temp.next = new ListNode(sum)
    //         carry = 0
    //     } else {
    //         temp.next = new ListNode(sum % 10)
    //         carry = Math.floor(sum / 10)
    //     }
    //     temp1 = temp1.next
    //     temp2 = temp2.next
    //     temp = temp.next
    // }


    // while (temp1) {
    //     // console.log(temp1.val , carry , temp)
    //     let sum = temp1.val + carry
    //     if (sum < 10) {
    //         temp.next = new ListNode(sum)
    //         carry = 0
    //     } else {
    //         temp.next = new ListNode(sum % 10)
    //         carry = Math.floor(sum / 10)
    //     }

    //     temp1 = temp1.next
    //     temp = temp.next
    // }
    // while (temp2) {
    //     let sum = temp2.val + carry
    //     if (sum < 10) {
    //         temp.next = new ListNode(sum)
    //         carry = 0
    //     } else {
    //         temp.next = new ListNode(sum % 10)
    //         carry = Math.floor(sum / 10)
    //     }
    //     temp2 = temp2.next
    //     temp = temp.next
    // }
    // // console.log(newList , carry , temp)
    // if(carry) {
    //     temp.next = new ListNode(carry)
    //     temp = temp.next

    // }

    // return newList.next



    // ###########Cleaner Code of this

    while (temp1 || temp2 || carry) {
        let sum = carry
        if (temp1) {
            sum += temp1.val
            temp1 = temp1.next

        }
        if (temp2) {
            sum += temp2.val
            temp2 = temp2.next

        }
        carry = Math.floor(sum / 10)
        temp.next = new ListNode(sum % 10)
        temp = temp.next
    }
    return newList.next
};