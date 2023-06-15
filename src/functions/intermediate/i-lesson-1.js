/**
 * Returns a random integer between min-max (inclusive) values.
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random#getting_a_random_integer_between_two_values_inclusive
 * @param {Number} min
 * @param {Number} max
 * @returns {Number}
 */
export function getRandomNumberInRange(min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)

    return Math.floor(Math.random() * (max - min + 1) + min)
}
