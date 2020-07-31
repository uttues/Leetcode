#### 07.重建二叉树【递归|哈希表预存储】

原思路：**递归**，在两个数组中找根节点，slice数组拆分进入下一层递归

优化：

* 哈希表预存储，减少每次查找中序遍历根节点下标的时间，查找O(1)
* 将slice数组转变为传数组编号，只开一个数组，减少内存消耗

Tip

* 创建一个新的 recursion 递归函数，自顶向下编程
* 数组循环遍历方法中性能最高  ` for(j = 0,len=arr.length; j < len; j++) { }`



#### 16.数值的整数次方【递归|位运算|快速幂】

原思路：**递归**

优化：位运算+快速幂（递归二分|循环二进制处理）



#### 26.树的子结构【递归】

原思路（错的）：根据两树是否相同来判断两树结构是否存在父子关系（题目给出的示例中就不是这种情况）

---

isContain(A, B)（两树根节点相同，B有的A都有，A有的B不一定有）

**终止条件**：

* B为空 => A有的，B没有，返回true
* B非空，但A空了 => A中有B不存在的结点，返回false
* AB都非空时，递归比较

```js
var isSubStructure = function (A, B) {
  if (!B || !A) return false
  // 本质上是个前序遍历？ 
  return isContain(A, B) || isSubStructure(A.left, B) || isSubStructure(A.right, B)
};

var isContain = function (A, B) {
  // B中可以有A没有的结点~
  if (!B) return true
  // A中不能没有B有的结点
  if (!A) return false

  return (A.val === B.val) && isContain(A.left, B.left) && isContain(A.right, B.right)
}
```

* **时间复杂度 O(MN)** ：其中 M,N 分别为树 A 和 树 B 的节点数量；先序遍历树 A 占用 O(M) ，每次调用 isContain(A, B) 判断占用 O(N)

* **空间复杂度 O(M)** ：当树 A 和树 B 都退化为链表时，递归调用深度最大。当 M≤N 时，遍历树 A 与递归判断的总递归深度为 MM ；当 M>N 时，最差情况为遍历至树 A 叶子节点，此时总递归深度为 M。



#### [27. 二叉树的镜像](https://leetcode-cn.com/problems/er-cha-shu-de-jing-xiang-lcof/)【递归】

思路：递归，每层中交换镜像处理后的左右子节点

- **时间复杂度 O(N)** ： 其中 N 为二叉树的节点数量，**建立二叉树镜像需要遍历树的所有节点**，占用 O(N) 时间。
- **空间复杂度 O(N)** ： 最差情况下（当二叉树**退化为链表**），递归时系统需使用 O(N) 大小的栈空间。



#### [28. 对称的二叉树](https://leetcode-cn.com/problems/dui-cheng-de-er-cha-shu-lcof/) 【递归】

思路：递归，

- **时间复杂度 O(N)** ： 其中 N 为二叉树的节点数量，每次执行 `inContrary()` 可以判断一对节点是否对称，因此最多调用 N/2 次

* **空间复杂度 O(N) ：** 最差情况下（见下图），二叉树退化为链表，系统使用 O(N)大小的栈空间。



#### [37. 序列化二叉树 ](https://leetcode-cn.com/problems/xu-lie-hua-er-cha-shu-lcof/) 【层序遍历|队列】





#### [34. 二叉树中和为某一值的路径](https://leetcode-cn.com/problems/er-cha-shu-zhong-he-wei-mou-yi-zhi-de-lu-jing-lcof/)【先序遍历+回溯法+递归】

##### 解题思路：

本问题是典型的**二叉树方案搜索问题**，使用**回溯法**解决，其包含 **先序遍历 + 路径记录** 两部分。

- **先序遍历**： 按照 “根、左、右” 的顺序，遍历树的所有节点。
- **路径记录**： 在先序遍历中，记录从根节点到当前节点的路径。当路径为 ① 根节点到叶节点形成的路径 且 ② 各节点值的和等于目标值 sum 时，将此路径加入结果列表。

##### **算法流程**

**pathSum(root, sum) 函数：**

- 初始化： 结果列表 res ，路径列表 path 。
- 返回值： 返回 res 即可。

**recur(root, tar) 函数：**

- 递推参数： 当前节点 root ，当前目标值 tar 。
- 终止条件： 若节点 root 为空，则直接返回。
- 递推工作：
  - 路径更新： 将当前节点值 root.val 加入路径 path ；
  - 目标值更新： tar = tar - root.val（即目标值 tar 从 sum 减至 00 ）；
  - 路径记录： 当 ① root 为叶节点 且 ② 路径和等于目标值 ，则将此路径 path 加入 res 。
  - 先序遍历： 递归左 / 右子节点。
  - 路径恢复： 向上回溯前，需要将当前节点从路径 path 中删除，即执行 path.pop() 。

##### 复杂度分析：

- 时间复杂度 O(N) ： NN 为二叉树的节点数，先序遍历需要遍历所有节点。
- 空间复杂度 O(N) ： 最差情况下，即树退化为链表时，path 存储所有树节点，使用 O(N) 额外空间。

```js
var pathSum = function (root, sum) {
  const res = []
  const path = []

  var recursion = function (root, sum) {
    if (!root) return

    path.push(root.val)
    let target = sum - root.val
    if (target === 0 && !root.left && !root.right) {
      res.push(Array.prototype.concat([], path))
    }
    recursion(root.left, target)
    recursion(root.right, target)
    path.pop()
  }

  recursion(root, sum)
  return res
};
```



#### [38. 字符串的排列](https://leetcode-cn.com/problems/zi-fu-chuan-de-pai-lie-lcof/) 【回溯法+递归】

```js
var permutation = function (s) {
  let res = []
  let path = []

  var recursion = function (s) {
    if (!s) {
      res.push(path.join(''))
    } else {
      for (let i = 0, len = s.length; i < len; i++) {
        path.push(s[i])
        recursion(s.slice(0, i) + s.slice(i + 1))
      }
    }
    path.pop()
  }

  recursion(s)
  return Array.from(new Set(res))
};
```





#### [03. 数组中重复的数字](https://leetcode-cn.com/problems/shu-zu-zhong-zhong-fu-de-shu-zi-lcof/) 【把数组视为哈希表】

由于**数组元素的值都在指定的范围内**，这个**范围恰恰好与数组的下标可以一一对应**；因此看到一个数，就会知道它应该放在哪，比如：**数字 nums[i] 应该放在下标为 i 的位置上**

* 找到重复的数就是发生了**哈希冲突；**
* 类似问题[268. 缺失数字](https://leetcode-cn.com/problems/missing-number/)、 [41. 缺失的第一个正数](https://leetcode-cn.com/problems/first-missing-positive/)、[442. 数组中重复的数据](https://leetcode-cn.com/problems/find-all-duplicates-in-an-array/)、[448. 找到所有数组中消失的数字](https://leetcode-cn.com/problems/find-all-numbers-disappeared-in-an-array/)

```js
var findRepeatNumber = function (nums) {
  // 遍历数组，目的：每一个数都要放在自己的位置上 nums[i] === i
  for (let i = 0, len = nums.length; i < len; i++) {
    if (nums[i] === i) {
      continue	// 无需处理
    }
    // 执行后面这段代码，说明此时nums[i]所在位置不是它应该在的，它应该在下标nums[i]处，如果现在发现nums[i]下标处有个跟它一样的值，则说明出现重复
    if (nums[i] === nums[nums[i]]) return nums[i] // 表示重复数

    // 目的：让nums[i]放到它应该在的位置上 nums[nums[i]] = nums[i]
    temp = nums[nums[i]]
    nums[nums[i]] = nums[i]
    nums[i] = temp
  }
  return -1
};

console.log(findRepeatNumber([2, 3, 1, 0, 2, 5, 3]));
```

