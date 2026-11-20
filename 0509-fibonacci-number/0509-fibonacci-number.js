/**
 * @param {number} n
 * @return {number}
 */
var fib = function (n) {

    // Recursion: 

    // var helper = (n) => {
    //     if (n == 1 || n == 0) return n

    //     return helper(n - 1) + helper(n - 2)

    // }
    // return helper(n)


    // Memoization : 
    // let dp = new Array(n + 1).fill(-1)

    // var helper = (i, dp) => {
    //     if (i == 1 || i == 0) return i
    //     if (dp[i] !== -1) return dp[i]

    //     return dp[i] = helper(i - 1, dp) + helper(i - 2, dp)


    // }
    // return helper(n, dp)


    // Tablulation

    // let dp = new Array(n + 1).fill(-1)
    // dp[0] = 0
    // dp[1] = 1

    // for(let i = 2 ; i <= n ; i++) {
    //     dp[i] = dp[i-1] + dp[i-2]
    // }
    // return dp[n]

    // Tabulation and space optimization
    if(n == 0 || n ==1)return n
    prev = 1
    prev_prev = 0

    for(let i = 2 ; i <= n ; i++) {
       let ans  = prev + prev_prev
       prev_prev = prev
       prev = ans
    }
    return prev
};