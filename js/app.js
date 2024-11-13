/**
 * 
 * A function is an executed task is stored away and can be used whenever called.
 * 
 * A function returns a specific output given a single or multiple inputs
 * 
 * Syntax:
 * 
 *       function funcName(args) {
 *         // do stuff
 *         return statement
 *       }
 * 
 *       funcName(args)
 * 
 * 
 * ES6
 * 
 *     Arrow functions
 * 
 *      const funcName = (args)=> {
 *       // do stuff
 *        return statement
 *      }
 */

// function addTwoNumbers(a = 4, b = 5) {
//     return a + b
// }

// refactor addTwoNumbers => writing as an arrow function

const addTwoNumbers = (a = 4, b = 5)=> a + b

// console.log(add5)

// console.log (add5(7))
// console.log (add5(2))
// console.log (add5(10))

console.log(addTwoNumbers());
console.log(addTwoNumbers(7))
console.log(addTwoNumbers(undefined, 19));
console.log(addTwoNumbers(2, 4));
console.log(addTwoNumbers(-11, 44));

// function greetUser(user = 'Guest') {
//     return `Good morning, ${user}!`
// }

const greetUser = (user = 'Guest')=> `Good morning, ${user}`

// greetUser()

// console.log(greetUser());
// console.log(greetUser('Christopher'))

console.clear()
// Scope

/**
 * Global scope => a variable is accessible throughout the file ]
 * 
 * Local scope => a variable is accessible only within local space
 */


let scope = 'global'



function sayScope() {
    scope = 'local'
    console.log(`The scope is now: ${scope}`)
    return scope
}

console.log(`The scope is ${scope}`); //global
sayScope() // local
console.log(scope); // local


// Write a function that takes a temperature in celsius and convert it to fahrenheit; return the new temperature

function covertToFah(temp = 0) {
    let fah = (temp * (9/ 5) + 32)
    console.log(`${temp} degrees celsius is ${fah} degrees fahrenheit`);
    return fah
}

covertToFah()
covertToFah(100)
covertToFah(32)

// Write a function that takes a temperature and a unit as arguments. If the unit is 'cel' convert the temperature to fah. If the unit is 'fah' If the unit is 'fah' convert the temperature to cel. Return the newTemp

// Write a function
// function convertTemp(temp = 0, unit = 'cel') {

// }

const convertTemp = (temp = 0, unit = 'cel') => {
    
        // set newTemp
        let newTemp
    
        // if unit is 'cel'
        if (unit == 'cel') {
            // convert the temp to fah
            newTemp = (temp * (9 / 5)) + 32
            message = `${temp} degrees celsius is ${newTemp} degrees fahrenheit.`
    
            // if unit is 'fah'
        } else if (unit == 'fah') {
            // convert the temp to cel
            newTemp = (temp - 32) * 5 / 9
            message = `${temp} degrees fahrenheit is ${newTemp} degrees celsius`
        } else {
            message = 'error'
        }
    
        console.log(newTemp)
        return newTemp
        
}

convertTemp() // 32
convertTemp(100, 'cel') // 212
convertTemp(32, 'fah') // 0
convertTemp(212, 'fah') // 100

console.clear()

// run the arrow function
console.log(addTwoNumbers(16, 17))
console. log(greetUser('Harold'))

/**
 * Write an arrow function that will take a number, num, as an argument and return if the number is odd or even. Test with 3 different numbers
 */

const oddOrEven = num => {
    let message
    // isNaN(num) ? console.log('not a number') : null

    if (isNaN(num)) {
        message = 'not a number'
        return
    }

    if (num == 0) {
        message = 'zero'
    } else if (num % 2 === 1) {
        message = 'odd'
    } else {
        message = 'even'
    }

    console.log(message);
}

oddOrEven(5)
oddOrEven('foo')









