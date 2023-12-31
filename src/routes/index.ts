import { Router } from "express"

import usersRouter from "./users.router"

/** General Router */
const router: Router = Router({})

router.use('/users', usersRouter)

export default router