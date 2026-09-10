/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
    if (strs.length <= 1) return [[strs[0]]]




    let map = new Map()
    for (let str of strs) {
        let freqCount = new Array(26).fill(0)
        for (let ch of str) {
            freqCount[ch.charCodeAt(0) - 97]++
        }

        let key  = freqCount.join("#")
        if (map.has(key)) {
            map.get(key).push(str)
        }
        else { map.set(key, [str]) }
    }
    // console.log(map)
    let res = []
    for (let ar of map.values()) {
        res.push(ar)
    }
    return res



};