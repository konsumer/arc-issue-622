// this tests if arc tables & sandbox will work in jest

/* global describe, it, expect, beforeAll, afterAll */

const sandbox = require('@architect/sandbox')
// const arc = require('@architect/functions')

describe('jest', () => {
  it('should have started sandbox', async () => {
    const end = await sandbox.start({ quiet: true })
    expect(end).toBeDefined()
    expect(typeof end).toEqual('function')
    await end()
  })
})
