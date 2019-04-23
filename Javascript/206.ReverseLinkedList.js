/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    // 1. 迭代 (1)
    
    // if (!head || !head.next) {
    //     return head;
    // }
    // 引用的留意點：
    // 如果直接富值，則它們的所引用的地址一致，單方的操作會改變另一方的值，
    // prevNode = head;  直接富值
    // prevNode.val = 999;   則導致   head.val = 999;
    // 或者
    // prevNode = head.next;   直接富值
    // prevNode.val = 999;   則導致   head.next.val = 999;
    
//     let prevNode = head;
//     let currNode = head.next;
//     let tempNode = null;
    
//     // 因為引用，prevNode.next = null 及 head.next = null 的結果一致，
//     // 并且head.next = null;
//     prevNode.next = null;
//     while(currNode) {
//         // 因為引用，第4行的富值會導致node一直指向非null的值，然後無限loop
//         // 用JSON.parse(JSON.stringify(xxx))複制node到tempNode，且不存在引用關係
// //         tempNode = JSON.parse(JSON.stringify(currNode));
// //         currNode.next = prevNode;
// //         prevNode = currNode;
// //         currNode = tempNode.next;
        
//         // 另一解
//         tempNode = currNode.next;
//         currNode.next = prevNode;
//         prevNode = currNode;
//         currNode = tempNode;
//     }
//     // 最後currNode = null, prevNode 已經倒轉，雖然可直接return prevNode; 
//     // 但是鏈表node的核心為head，為避免意外，仍需重新富值給head
//     head = prevNode;
//     return head;
    
    // end of (1)
    
    // 2. 迭代 (2), not recommend
    
    // if (!head || !head.next) {
    //     return head;
    // }
//     let prevNode = head.next;
//     let currNode = null;
//     let tempNode = null;
    
//     while(prevNode && prevNode.next) {
//         currNode = prevNode.next;
//         prevNode.next = currNode.next;
//         currNode.next = head.next;
//         head.next = currNode;
//     }
    
//     prevNode.next = head;
//     head = prevNode.next.next;
//     prevNode.next.next = null;
//     return head;
    
    // 3. 递归，化繁為簡，把一個大問題拆分為n個性質類似的小問題，從而用類似的方法不斷重覆解決所有小問題
    // 一般從後向前解決
    // ex: [1, 2, 3, null]
    const H = head;
    
    // 接收head，如果head.next為null，返回這個head，此行為使自身停止递归
    if (H == null || H.next == null)
        return H;
    
    // 把H.next丟過去（給自己）不斷递归，當head.next（即上一次的H.next.next）為null時，不再递归
    // 目的是一直循环到链尾，而把链尾(即[3, null])設定為新的链頭
    const newHead = reverseList(H.next);
    // 當链頭產生（即停止递归），此時H = [2, 3, null], head = [2, 3, null], newHead = [3, null]
    // newHead = H.next  （引用關係）
    
    H.next.next = H;          //即 newHead.next = H，形成鏈表循環，目的是翻转链表的指向
    // 此時 H = head = [2, 3, 2, 3, 2...], newHead = [3, 2, 3, 2, 3...]

    H.next = null;            //中断循環，防止链表错乱
    // 在newHead裏的H指由index = 1開始的[2, 3, 2, ...]
    // 此時 H = head = [2, null], newHead = [3, 2, null]
    
    return newHead;
    // 最後返回newHead，由88行代碼再開始
    // 此時H = head = [1, 2, 3, null], bewHead = [3, 2, null]
    // 重覆88 至 99 行代碼
    // 此例子递归調用2次，所以整個過程只運行2次
    
};