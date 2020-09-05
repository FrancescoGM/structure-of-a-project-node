import { Router } from 'express'

import ExampleController from '@controllers/exampleController'

const routes = Router()

const Example = new ExampleController()

routes.get('/', Example.index)

export default routes