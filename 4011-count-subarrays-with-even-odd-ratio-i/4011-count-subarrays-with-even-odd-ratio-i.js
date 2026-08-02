/**
 * @param {number[]} nums
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var countRatioSubarrays = function (nums, a, b) {
    let maxlim = a / b;
    let count = 0;
    

    for (let i = 0; i < nums.length; i++) {
       let even = 0
        let odd = 0
        for (let j = i; j < nums.length; j++) {
            if (nums[j] % 2 == 0) {
                even++
            } else {
                odd++
            }
            if (even * b <= odd * a) count++

        }
    }
    return count;
};
