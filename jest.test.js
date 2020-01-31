// this tests if arc tables & sandbox will work in jest

/* global describe, it, expect, beforeAll, afterAll */

// this causes async-hang
// const arc = require('@architect/functions')

const sandbox = require('@architect/sandbox')

beforeAll(async () => {
  console.log('Sandbox: start')
  await sandbox.start({ quiet: true })
})
afterAll(async () => {
  console.log('Sandbox: end')
  await sandbox.end()
})

describe('jest', () => {
  it('should have started sandbox', async () => {
    expect(sandbox.db).toBeDefined()
  })
})
