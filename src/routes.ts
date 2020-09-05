import { Router } from 'express'

import ExampleController from '@controllers/exampleController'

const routes = Router()

const Example = new ExampleController()

routes.post('/', Example.index)

export default routes