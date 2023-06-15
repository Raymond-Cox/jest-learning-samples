import { add } from '../b-lesson-1'

/**
 * An individual .test.js file is referred to as a test suite.
 * Each test suite is typically wrapped in a describe block
 * containing the name of the file.
 * This is a way of documenting the test suite for the terminal output.
 */
describe('b-lesson-1', () => {
    /**
     * A test suite can contain multiple more describe blocks inside.
     * Good practice is to create a new describe block for each
     * function you want to write tests for.
     */
    describe('add', () => {
        it('adds the numbers together correctly', () => {
            const result = add(5, 12)

            expect(result).toBe(17)
        })
    })

    describe('subtract', () => {
        /**
         * Write the test case for the subtract function here.
         */
    })

    /**
     * Add the describe blocks and test cases
     * for the remaining "Single test case examples" below.
     */
})
