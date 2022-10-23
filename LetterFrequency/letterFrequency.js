const letterFrequency = (phrase) => {

    let dictionary = {}

    for(const letter of phrase){
        if(letter in dictionary){
            dictionary[letter] += 1
        } else {
            dictionary[letter] = 1
        }
    }

    return dictionary
}

const phrase = 'my name is shrutiii'

console.log(letterFrequency(phrase))