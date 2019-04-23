/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */

// 取鏈表的一半，把該半反轉，再將前半和後半鏈表作比較
var isPalindrome = function(head) {
    if (!head) {
        return true;
    }
    let firsNode = head;
    let lastNode = head.next;
    
    // ex. [1, 2, 3, 2, 1, null]
    // 1. 先找中間節點
    while(lastNode && lastNode.next) {
        firsNode = firsNode.next;
        lastNode = lastNode.next.next;
    }
    // 此時firsNode = [3, 2, 1, null], lastNode = [null]
    
    let currNode = firsNode.next;
    let prevNode = null;
    // 2. 反轉
    while(currNode) {
        const tempNode = currNode.next;
        currNode.next = prevNode;
        prevNode = currNode;
        currNode = tempNode;
    }
    currNode = prevNode;
    // 此時currNode = [1, 2, null]
    
    // 3. 鏈表前半和後半比較
    while(head && currNode && head.val === currNode.val) {
        head = head.next;
        currNode = currNode.next;
    }
    
    // 最後，如果是回文，則currNode = null
    return currNode === null;
};