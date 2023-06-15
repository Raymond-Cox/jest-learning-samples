import { getRandomNumberInRange } from '../i-lesson-1'

describe('i-lesson-1', () => {
    describe('getRandomNumberInRange', () => {
        it('returns a number within the min-max range', () => {
            const result = getRandomNumberInRange(1, 100)

            /**
             * Often times it is required to have multiple
             * expectations out of a test.
             *
             * For example, if you only checked the >=1 expectation,
             * the result could still be above the max and your test would still pass!
             */
            expect(result >= 1).toBe(true)
            expect(result <= 100).toBe(true)
        })
    })
})
