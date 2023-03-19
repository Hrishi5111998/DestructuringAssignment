function removeDuplicate(arr){
    const uniqueSet = new Set(arr)
    return Array.from(uniqueSet)
}

const inputArr = [1,2,2,3,4,5,1,3]
console.log(removeDuplicate(inputArr));