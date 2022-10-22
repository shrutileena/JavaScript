// const letterCounter = (word) => {
    
//     return word.length
// }

// console.log(letterCounter('Shruti'))

const letterCounter = (sentence) => {

    let result = 0

    // 'in' tells index; 'of' tells value
    for(const letter in sentence){
        //console.log(Number(letter) + 1)
        result = Number(letter) + 1
        }
    
    // return console.log(sentence.length)
    return result
}

console.log(letterCounter("Hello, my name is shruti"))