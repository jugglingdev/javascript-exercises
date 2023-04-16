const palindromes = function (input) {
    
    let inputLettersOnly = input.toLowerCase().replace(/[^a-z]/g, '');
    let inputArray = [...inputLettersOnly];

    return inputArray.toString() == inputArray.reverse().toString();
 
};

// Do not edit below this line
module.exports = palindromes;
