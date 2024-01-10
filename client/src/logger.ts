import FsdtLogger from '@fullstack-devtool/sdk'

export const logger = new FsdtLogger('Client', {
  connectionType: 'source',
  port: 1234,
})
