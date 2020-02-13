// this tests if arc tables & sandbox will work in jest

/* global describe, it, expect, beforeAll, afterAll */

const sandbox = require('@architect/sandbox')

let tables

beforeAll(async () => {
  await sandbox.start({ quiet: true })
  const arc = require('@architect/functions')
  tables = await arc.tables()
})
afterAll(async () => {
  await sandbox.end()
})

describe('jest', () => {
  it('should know what tables are available', async () => {
    expect(tables).toBeDefined()
  })
})
