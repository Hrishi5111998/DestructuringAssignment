function randomElement(arr){
    const [first, second, ...rest] = arr
    const last = rest.pop()
    return [first, second, last]
}
const inputArr = [1,2,3,4,8,6,7]
console.log(randomElement(inputArr));