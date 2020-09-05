import supertest from 'supertest'
import Server from '../../src/server'

const server = new Server().server

describe('Exemple', () => {
  it('this is a example', async () => {
    const { body } = await supertest(server).get('/')

    expect(body).toHaveProperty('message')
    expect(body.message).toBe('Hello World')
  })
})