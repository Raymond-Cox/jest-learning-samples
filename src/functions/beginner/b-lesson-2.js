/**
 * Multiple test case examples
 */

/**
 * Checks if given string is a valid color from array of colors.
 * @param {String} str
 * @returns {Boolean}
 */
export function isColor(str) {
    const colors = ['red', 'blue', 'yellow', 'green', 'orange', 'purple']

    if (colors.includes(str)) {
        return true
    } else {
        return false
    }
}
