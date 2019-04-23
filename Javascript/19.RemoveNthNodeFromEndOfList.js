/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
var getNodeLength = function(head) {
    let length = 0;
    let currNode = head;
    while(currNode.next) {
        currNode = currNode.next;
        length++;
    }
    return ++length;
}
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let nodeLength = getNodeLength(head);
    if (n > nodeLength) {
        return null;
    }
    if (nodeLength === n) {
        head = head.next;
        return head;
    }
    
    let prevNode = head;
    let currNode = head;
    
    while(--n >= 0) {
        currNode = currNode.next;
    }
    while(currNode && currNode.next) {
        prevNode = prevNode.next;
        currNode = currNode.next;
    }
    prevNode.next = prevNode.next.next;
    // 由於引用，head會跟據prevNode和currNode而改變，
    // 在最後的while loop裏，next的指向屬原生行為（一直指向下一個結點），所以沒有變化，
    // 其後，prevNode.next = prevNode.next.next，使結點指向跳過下一結點，
    // 此時head也因而同時改變
    return head;
};