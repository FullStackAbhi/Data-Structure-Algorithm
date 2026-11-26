/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {

    nums.sort((a, b) => a - b)
    console.log(nums)

    let res = []
    let target = 0



    for (let i = 0; i < nums.length - 2; i++) {//fix 1 element with for loop

        if(i > 0 && nums[i] == nums[i-1])continue


        // use two pointer for the rest 2 element 
        let left = i + 1
        let right = nums.length - 1

        while (left < right) {

            let sum = nums[i] + nums[left] + nums[right]

            if (sum == target) {
                res.push([nums[i], nums[left], nums[right]])
                left++
                right--

                // code for finding duplicates

                // left pointer
                while (left < right && nums[left] == nums[left - 1]) {
                    left++
                }
                // for right pointer 
                while (right > left && nums[right] == nums[right + 1]) {
                    right--
                }

            } else if (sum < target) {
                left++
            } else {
                right--
            }

        }


    }



    return res







};