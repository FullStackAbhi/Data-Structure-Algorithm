/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {

    let res = []
    let temp = []

    var backtarcking = (n, open, close) => {
        if (open == n && close == n) {
            res.push(temp.join(''))
            return
        }
        if (open < n) {
            temp.push('(')
            backtarcking(n, open + 1, close)
            temp.pop()

        }
        if (close < n && open > close) {
            temp.push(')')
            backtarcking(n, open, close + 1)
            temp.pop()

        }
    }
    backtarcking(n, 0, 0)
    return res

};