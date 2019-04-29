/**
 * Get 'pth factor' for number
 * @param {number} n
 * @param {number} p
 *
 * @return {number}
 */
const pthFactor = (n, p) => {
    numbN = Number(n);
    numbP = Number(p);

    if (isNaN(numbN) || isNaN(numbP)) {
        return {
            error: `Function parameters should be number, but n = ${n}, p = ${p}`
        };
    }

    // TODO (maybe restore)
    // if (!checkNumberRange(numbN, 1, 1015) || !checkNumberRange(numbP, 1, 109)) {
    //     return {
    //         error: `Function's parameters are wrong. n = ${numbN} (should be 1 <= n <= 1015), p = ${numbP} (should be 1 <= p <= 109)`
    //     };
    // }

    // find factors for 'n'
    let factors = findNumberDivisors(numbN);

    // reduce 'p' by one, because the indexes in the array start from 0
    numbP--;

    if (numbP < factors.length) {
        return factors[numbP];
    } else {
        return 0;
    }
};

/**
 * Find divisors (factors) of natural numbers for a number (by factorization)
 * @param {number} n
 *
 * @return {array}
 */
const findNumberDivisors = n => {
    let divisors = [];
    let i = 1;

    // find divisors of n, from n to sqrt(n)
    while (i <= Math.sqrt(n)) {
        if (n % i === 0) {
            divisors.push(i);
        }
        i++;
    }

    // find divisors of n, from sqrt(n) to n
    for (let j = i - 1; j > 0; j--) {
        let nj = n / j;

        if (j != nj && n % j === 0) {
            divisors.push(nj);
        }
    }

    return divisors;
};

/**
 * Check if the number is in range
 * @param {number} number
 * @param {number} min
 * @param {number} max
 *
 * @return {boolean}
 */
const checkNumberRange = (number, min, max) => {
    if (
        !Number.isInteger(number) ||
        !Number.isInteger(min) ||
        !Number.isInteger(max)
    ) {
        throw new Error(
            `Function parameters should be number, but number = ${typeof number}, min = ${typeof min}, max = ${typeof max}`
        );
    }

    if (max < min) {
        throw new Error(
            `Parameter "max" should be bigger then "min", but ${max} < ${min}`
        );
    }

    return number >= min && number <= max;
};

module.exports = { pthFactor };
