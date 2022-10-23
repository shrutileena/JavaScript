const max = (numbers) => {

    let max = numbers[0]

    for(const number of numbers){
        if (number > max) {
            max = number
        } 
    }

    return max
}

const nums = [1,2,3,47,3,8,9,10]

console.log(max(nums))