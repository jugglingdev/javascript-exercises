const fibonacci = function(n) {
    
    if (n < 0) return 'OOPS';

    let num1 = 0;
    let num2 = 1;
    let prod = num1 + num2;

    for (let i = 1; i < n - 1; i++) {
        num1 = num2;
        num2 = prod;
        prod = num1 + num2;
    }

    return prod;
};

// Do not edit below this line
module.exports = fibonacci;
