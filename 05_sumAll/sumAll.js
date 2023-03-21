const sumAll = function(min, max) {
    if (!Number.isInteger(min) || !Number.isInteger(max)) return "ERROR";
    if (min < 0 || max < 0) return "ERROR";

    let sum = 0;

    if (min < max) {
        for (let i = min; i <= max; i++) {
            sum += i;
        }
    } else {
        for (let i = min; i >= max; i--) {
            sum += i;
        }
    }

    return sum;
};

sumAll(1, 4);

// Do not edit below this line
module.exports = sumAll;
