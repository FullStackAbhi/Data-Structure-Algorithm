/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
    let map1 = new Map()
    let map_t = new Map()
    for (let char of t) {
        map_t.set(char, (map_t.get(char) || 0) + 1)
    }
    let minlength = Infinity
    let required = map_t.size
    let formed = 0
    let left = 0
    let right = 0
    res = ""

    while (right < s.length) {
        map1.set(s[right], (map1.get(s[right]) || 0) + 1)

        if (map_t.has(s[right]) && map1.get(s[right]) === map_t.get(s[right])) {
            formed++
        }
        while (formed == required) {
            if (minlength > right - left + 1) {
                res = s.slice(left, right + 1)
                minlength = right - left + 1
            }

            if (map_t.has(s[left]) && map_t.get(s[left]) == map1.get(s[left])) {
                formed--
            }
            map1.set(s[left], map1.get(s[left]) - 1)
            if (map1.get(s[left]) == 0) map1.delete(s[left])
            left++
        }


        right++
    }
    return res
};