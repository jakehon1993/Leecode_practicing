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
// 快慢指針，快指針每次向前多走一步，如果是環形鏈表，快慢指針所指向的值最終會相等（快指針已經走一圈，2個針指會同時指向一個值）
var hasCycle = function(head) {
    while(!head) {
        return false;
    }
    let firsNode = head;
    let lastNode = head.next;
    // 如果是環形，while循環永不結束
    while(lastNode && lastNode.next) {
        if (firsNode.val === lastNode.val) {
            return true;
        }
        firsNode = firsNode.next;
        lastNode = lastNode.next.next;
    }
    // 如果不是環形，while循環會結束
    return false;
};