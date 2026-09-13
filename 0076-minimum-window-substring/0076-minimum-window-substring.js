/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
    let formed = 0
    let map1 = new Map()
    let map2 = new Map()
    let res = ""
    let minLength = Infinity

    for (let c of t) {
        map1.set(c, (map1.get(c) || 0) + 1)
    }
    let required = map1.size

    let left = 0
    let right = 0

    while (right < s.length) {
        map2.set(s[right], (map2.get(s[right]) || 0) + 1)

        if (map1.get(s[right]) && map1.get(s[right]) == map2.get(s[right])) {
            formed++
            while (formed == required) {
                // console.log(map2, right-left+1,minLength , res)

                if ((right - left+1) < minLength) {
                    res = s.slice(left, right + 1)
                    minLength = right-left+1
                    // console.log(res)
                }
                if (map1.has(s[left]) && map1.get(s[left]) === map2.get(s[left])) {
                    formed--
                }
                map2.set(s[left], map2.get(s[left]) - 1)
                if (map2.get(s[left]) == 0) map2.delete(s[left])

                left++
            }
        }
        right++
    }
    return res
};