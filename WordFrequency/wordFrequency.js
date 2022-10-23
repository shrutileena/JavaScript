const letterFrequency = (phrase) => {

    let dictionary = {}

    const words = phrase.split(" ")

    for(const word of words){
        console.log(word)
        if(word in dictionary){
            dictionary[word] += 1
        } else {
            dictionary[word] = 1
        }
    }

    return dictionary
}

const phrase = 'my name is shruti My age is 12'

console.log(letterFrequency(phrase))