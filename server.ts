const express = require("express")
import cors from "cors";

const app = express()

app.use(cors({
    origin: "http://localhost:3000" // Replace with enc variable...
}));

app.get("/", (req: any, res: any) => {
    res.status(200).json({ message: "Success" })
})

const post = require("./src/routes/postsRoutes.ts")
app.use("/posts", post)

const user = require("./src/routes/userRoutes.ts")
app.use("/users", user)

const jobs = require("./src/routes/jobsRoutes.ts")
app.use("/jobs", jobs)

const notifs = require("./src/routes/notificationsRoutes.ts")
app.use("/notifs", notifs)


app.listen(8000)