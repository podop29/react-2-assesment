
function unroll(squareArray) {
    const arr = []
    for(let i = 0; i < squareArray.length; i++){
        for(let j = 0; j < squareArray[i].length; j++){
            arr.push(squareArray[i][j])
        }
    }
    return arr
}

function unroll2(squareArray,i = 0, j = 0, arr){
    if(j === squareArray[i].length){
        i++
        j=0
        if(i >= squareArray.length){
            return arr
        }
    }
    arr.push(squareArray[i][j])
    j++
    return unroll2(squareArray, i, j, arr)
}

module.exports = {unroll, unroll2}
