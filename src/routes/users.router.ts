import { Router, Request, Response } from "express"

/** Users Router */
const usersRouter: Router = Router({})

usersRouter.get("/:id", (req: Request, res: Response) => {
    return res.status(200).json({ id: req.params.id, name: `User ${req.params.id}` })
})

export default usersRouter