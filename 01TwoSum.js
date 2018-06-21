/** 常规方法， 暴力搜索
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  var length = nums.length;
  for (var i = 0; i < length - 1; i++) {
    for (var j = i + 1; j < length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j]
      }
    }
  }
  return [i - 1, j - 1]
};


/** 利用对象的属性查询是hash速度
 *  将当前项的匹配项存储在对象的键中，而当前项的索引存储此键的值中
 *  在迭代过程中匹配hash对象是否有此键，如果有，则取此键及当前索引，即为目标
 * [2, 5, 7, 11] target = 9
 * hash => hash(7) = 0
 * hash => hash(4) = 1
 * nums[2] = 7 in hash ---> [hash(7), i]
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum2 = function(nums, target) {
  let hash = {}
  for (var i = 0; i < nums.length; i++) {
    if (nums[i] in hash) {
      return [hash[nums[i]], i]
    } else {
      hash[target - nums[i]] = i
    }
  }
  return [-1, -1]
};