// Write a function called add7 that takes one number and returns that number + 7.

const add7 = number => number + 7

const num = (7)
const result = add7(num)

console.log(result)

// Write a function called multiply that takes 2 numbers and returns their product.

const multiply = (a,b) => a*b

const num1 = (4)
const num2 = (2)

const result1 = multiply(num1,num2)

console.log(result1)



// Write a function called capitalize that takes a string and returns that string with only
// the first letter capitalized. Make sure that it can take strings that are lowercase, UPPERCASE or BoTh.

/*
const capitalize = (string) => string.charAt(0).toUpperCase() + string.slice(1);

const str = 'TIRANOSAURIO'; 

const result2 = capitalize(str);

console.log(result2);

*/
const capitalize = (string) =>{
if (typeof str !== 'string' || str.length === 0) {
    return str
}

return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}
const str = 'tiRaNosaurioRex'
const result3 = capitalize(str)

console.log(result3)


// Write a function called lastLetter that takes a string and returns the very last letter of that string:

const lastLetter = (a) => {
    return a.charAt(word.length - 1)
}

const word = ('keyboard')
const result4 = lastLetter(word)

console.log(result4)