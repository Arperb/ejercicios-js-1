// Given an array of integers, find if the array contains any duplicates.

// Your function should return true if any value appears at least twice in the array, and it should return false if every element is distinct.

// Example 1:

// Input: [1,2,3,1]
// Output: true
// Example 2:

// Input: 
// Output: false
// Example 3:

// Input: [1,1,1,3,3,4,3,2,4,2]
// Output: true


//Example 1

let input = [1, 2, 3, 1];



let result = input.filter (( item, index ) => {
    return input.indexOf(item) === index;
    
})

console.log(result)

function numDuplicados (input, result) {

    if (input.length === result.length) {
        return 'false';
    } else if (input.length !== result.length) {
        return 'true';
    }
}

findDuplicados = numDuplicados(input,result)

console.log(`En el ejemplo uno hay duplicados ${findDuplicados}`)



//Example 2

let input2 = [1, 2, 3];

let result2 = input2.filter (( item, index ) => {

    return input.indexOf(item) === index;
    
})

console.log(result2)

findDuplicados = numDuplicados(input2,result2)

console.log(`En el ejemplo dos hay duplicados ${findDuplicados}`)



//Example 3

let input3 = [1,1,1,3,3,4,3,2,4,2];

let result3 = input3.filter (( item, index ) => {

    return input3.indexOf(item) === index;
    
})

console.log(result3)

findDuplicados = numDuplicados(input3,result3)

console.log(`En el ejemplo tres hay duplicados ${findDuplicados}`)