function minMax(arr){
   let minValue = Math.min(...arr)
    let maxValue = Math.max(...arr)
    return {min: minValue, max: maxValue}
}
const newA = [1,5,7,69,4] 
console.log(minMax(newA));