/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
var deleteNode = function(node) {
    let tmpnode = "";
    
    // ex: [4, 5, 1, 9], head => 5
    while(node.next) {
        // 先取當前node作為臨時node
        // before tmpnode = node
        // l1: null
        // l2: [1 => 1, 1 => 9, 9 => null], head => 1 // ！！！引用關係，原來第1結點的val由 5 改為 1
        // l3: node.next === null, loop break;
        tmpnode = node;
        // after tmpnode = node
        // l1: [5 => 1, 1 => 9, 9 => null], head => 5
        // l2: [1 => 9, 9 => null], head => 1
        // l3: node.next === null, loop break;
        
        // 將node的下一個結點值覆鈣當前結點值
        node.val = node.next.val;    // ！！！因為tmpnode 引用自 node，它們的值會同時改變(tmpnode.val = node.val)
        node = node.next;
        // after node = node.next
        // l1: [1 => 9, 9 => null], head => 1
        // l2: [9 => null], head => 9
        // l3: node.next === null, loop break;
    }
    // tmpnode: [9 => 9, 9 => null]，留意引用的影響，令第1結點的val由 1 改為 9
    // node: [9 => null]
    tmpnode.next = node.next;
    node = tmpnode;
};