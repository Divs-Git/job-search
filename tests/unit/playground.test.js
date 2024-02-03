import { evenOrOdd, multiply } from '@/playground'

describe('Maths Test', () => {
  it('Adds two number', () => {
    expect(1 + 1).toBe(2)
  })

  describe('evenOrOdd', () => {
    describe('when a number is even', () => {
      it('indicades the number is even', () => {
        expect(evenOrOdd(4)).toBe('Even')
      })
    })

    describe('when a number is odd', () => {
      it('indicates the number is odd', () => {
        expect(evenOrOdd(3)).toBe('Odd')
      })
    })
  })

  describe('multiply', () => {
    it('multiplies two number', () => {
      expect(multiply(2, 3)).toBe(6)
    })
  })
})
