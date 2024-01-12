import { logger } from '../logger'

beforeAll(async () => {
  await logger.waitForConnection()
})
afterAll(async () => {
  await logger.disconnect()
})
