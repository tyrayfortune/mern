/* 
Given by Riot games.
*/

const str1 = "b70a164c32a20c10";
const expected1 = "a184b70c42";

/**
 * Rehashes an incorrectly hashed string by combining letter count occurrences
 * and alphabetizing them.
 * Time: O(?).
 * Space: O(?).
 * @param {string} s An incorrectly hashed string.
 * @returns {string} The correctly rehashed string alphabetized.
 */
 function rehash(s) {
    const freq = {}
    let answer = ""
    let tempNum = ""
    let tempChar = "" 
    // "b70a164c32a20c10";
    for(let i = 0; i < s.length;i++){
        if(!isNaN(s[i])){
            tempNum += s[i]
        }
        else {
            if(tempChar != ""){
                if(freq[tempChar])(
                    freq[tempChar] += parseInt(tempNum)
                )
                else{
                    freq[tempChar] = parseInt(tempNum)
                }
                tempNum = ""
            }
            tempChar = s[i]
        }
        if(i === s.length-1) {
            if(freq[tempChar])(
                freq[tempChar] += parseInt(tempNum)
            )
            else{
                freq[tempChar] = parseInt(tempNum)
            }
        }
    } 
    const freqToArray = Object.entries(freq)
    const sortedFreq = freqToArray.sort((a,b) => b[1] - a[1])
    for(let i = 0; i < sortedFreq.length; i++) {
        for(let j = 0; j < sortedFreq[i].length; j++) {
            answer += sortedFreq[i][j]
        }
    }
    return answer
} 