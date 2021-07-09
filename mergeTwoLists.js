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
var mergeTwoLists = function(l1, l2) {
    let merge = new ListNode();
    let head = merge;
    
    while (l1 !== null && l2 !== null) {
        if (l1.val < l2.val) {
            merge.next = new ListNode(l1.val);
            l1 = l1.next;
        } else {
            merge.next = new ListNode(l2.val);
            l2 = l2.next;
        }
        merge = merge.next;
    }
    
    if (l1 !== null) {
        merge.next = l1;
    }
    if (l2 !== null) {
        merge.next = l2;
    }
    
    return head.next;
};