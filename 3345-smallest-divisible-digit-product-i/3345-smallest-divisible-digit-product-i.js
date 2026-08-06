/**
 * @param {number} n
 * @param {number} t
 * @return {number}
 */
var smallestNumber = function (n, t) {

    while (true) {
        let prod;
        if (n > 9) {
            prod = n % 10 * Math.floor(n / 10)
        } else prod = n
        if (prod % t == 0) return n
        else {
            n++
        }
    }

};