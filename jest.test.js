// this tests if arc tables & sandbox will work in jest

/* global describe, it, expect, beforeAll, afterAll */

// this is to get around no options for start, ala architect/architect/#621
process.env.QUIET = true

const sandbox = require('@architect/sandbox')
const arc = require('@architect/functions')

// this uses hoisted-var to track the shutdown function for sandbox
let end
beforeAll(async () => {
  console.log('Starting sandbox')
  end = await sandbox.start()
})
afterAll(async () => {
  console.log('Stopping sandbox')
  await end()
})

describe('jest', () => {
  it('should have started sandbox', () => {
    expect(end).toBeDefined()
    expect(typeof end).toEqual('function')
  })
})
