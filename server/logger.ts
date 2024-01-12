import FsdtLogger from "@fullstack-devtool/sdk";

export const logger = new FsdtLogger('Server', {
  connectionType: 'source',
  port: 1234,
})