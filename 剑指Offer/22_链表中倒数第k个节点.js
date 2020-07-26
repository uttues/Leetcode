/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var getKthFromEnd = function (head, k) {
  if (!head || k <= 0) return null
  let fast = head, slow = head

  // 先走k步
  while (k--) {
    fast = fast.next
  }
  while (fast) {
    fast = fast.next
    slow = slow.next
  }
  return slow
};