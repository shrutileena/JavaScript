// 1 hr : 60 minutes
// 1 minute : 60 seconds

const convert = (hours) => {
    
    if(hours == null){
        return 'Invalid value'
    } else { 
        return hours * 60 * 60
    }

}

const hours = prompt('Enter hour value')

console.log(convert(hours))