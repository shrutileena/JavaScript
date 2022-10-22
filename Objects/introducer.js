// Arrow function
// networth is a method
const introducer = (name, age) => {

    const person = {
        name: name,
        age: age,
        assets: 100000,
        liabilities: 50000,
        networth: function () {
            return this.assets - this.liabilities
        }
    }

    const say = `Hi! My name is ${person.name} and I'm ${person.age} years old. My net worth is $${person.networth()} USD`

    return say
}

console.log(introducer('Shruti', '12'))