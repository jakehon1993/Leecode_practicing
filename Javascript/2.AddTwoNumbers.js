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
// 位與位運算（自動補零）： ［0，1，2］＋［1，2］＝》［0 ＋ 1，1 ＋ 2，2 ＋ 0］
var addTwoNumbers = function(l1, l2) {
    let x = 0;
    let y = 0;
    let carry = 0;
    // head為0，過程中不處理該值，所以答案要用next跳過head
    const newNode = new ListNode(0);
    let currNode = newNode;
    
    while(l1 || l2) {
        x = l1 && l1.val ? l1.val : 0;
        y = l2 && l2.val ? l2.val : 0;
        let sum = x + y + carry;
        carry = parseInt(sum / 10, 10);
        l1 = l1 ? l1.next : null;
        l2 = l2 ? l2.next : null;
        // 因為倒敍，每個新結點都是計算結果(sum)的個位數數字，而進位(carry)會在下一次循環連同結果(sum)一起處理
        currNode.next = new ListNode(sum % 10);
        currNode = currNode.next;
    }
    
    // 經while後，如果最後1位的計數結果有進位，則要新的結點"補位"（因為while已經結束）
    if (carry >= 1) {
        currNode.next = new ListNode(carry);
    }
    return newNode.next;
};