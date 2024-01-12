import { logger } from './logger'

function calculate(a: number, b: number) {
  return a + b
}

describe('Index2', () => {
  it('should be true', () => {
    const res = calculate(5, 6)
    logger.info({ res }, 'Test')
    expect(calculate(5, 6)).toBe(11)
  })
})
