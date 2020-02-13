// this tests if arc tables & sandbox will work in jest

/* global describe, it, expect, beforeAll, afterAll */
const arc = require('@architect/functions')
const sandbox = require('@architect/sandbox')

beforeAll(async () => {
  await sandbox.start({ quiet: true })
})
afterAll(async () => {
  await sandbox.end()
})

describe('jest', () => {
  it('be able to get table-list', async () => {
    const data = await arc.tables()
    expect(Object.keys(data)).toMatchSnapshot()
  })
})
