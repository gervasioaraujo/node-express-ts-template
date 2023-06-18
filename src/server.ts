import express, { Express, Response } from "express"

import routes from "./routes"

const PORT = 8085

const app: Express = express()
app.use(express.json())

app.use("/api/v1", routes)

app.get("/health", (_, res: Response) => {
    return res.status(200).send({ status: 200, message: "This service is healthy." })
});

app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`)
})