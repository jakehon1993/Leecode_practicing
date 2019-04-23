/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    let newNode = new ListNode(0);
    let refToNewNode = newNode;
    while(l1 && l2) {
        if (l1.val <= l2.val) {
            refToNewNode.next = l1;
            l1 = l1.next;
        } else {
            refToNewNode.next = l2;
            l2 = l2.next;
        }
        refToNewNode = refToNewNode.next;
    }
    
    if (l1) {
        refToNewNode.next = l1;
    }
    if (l2) {
        refToNewNode.next = l2;
    }
    newNode = newNode.next;
    return newNode;
};