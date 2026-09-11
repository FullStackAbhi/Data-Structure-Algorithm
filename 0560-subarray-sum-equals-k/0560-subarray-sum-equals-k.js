/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function (nums, k) {
    let res = 0
    let sum = 0
    let map = new Map()
    map.set(0 , 1)

    for (let i = 0; i < nums.length; i++) {
        sum += nums[i]
        let x = sum - k

        if (map.has(x)) {
            res += map.get(x)
        }

        map.set(sum, (map.get(sum) || 0) + 1)


    }
    return res


};