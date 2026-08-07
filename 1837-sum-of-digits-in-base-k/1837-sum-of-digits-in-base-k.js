/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var sumBase = function (n, k) {
    if (n == 0) return 0
    let digit = n % k
    n = Math.floor(n / k)

    let ans = sumBase(n , k)
    return (digit + ans)

};