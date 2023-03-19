function countWords(str){
    const words = str.toLowerCase().split(' ')
    console.log(words);

    const wordCountMap = new Map()
    for(let word of words){
        if(wordCountMap.has(word)){
            wordCountMap.set(word, wordCountMap.get(word) + 1)
        }else{
            wordCountMap.set(word, 1)
        }
    }
    return wordCountMap
}
const inputStr = 'You are building a word count generator that will take a large string of text as input and output the words and'

const counts = countWords(inputStr)
for(let [word, count] of counts){
    console.log(word + ":" + count);
}
