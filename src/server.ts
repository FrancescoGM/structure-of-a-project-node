import express from 'express'
import Routes from './routes'
import morgan from 'morgan'
import Path from 'path'
import cors from 'cors'

/* istanbul ignore next */ 
require('dotenv').config({
    path: process.env.NODE_ENV === 'test' ? '.env.test' : '.env'
})

export default class Server {
    server: any
    constructor() {
        this.server = express()

        this.middlewares()
        this.routes()
    }
    middlewares() {
        this.server.use(cors())
        this.server.use(morgan('dev'))
        this.server.use(express.json({ limit: '2mb' }))
        this.server.use(express.urlencoded({
            extended: true
        }))
    }
    routes() {
        this.server.use(Routes)
    }
}
