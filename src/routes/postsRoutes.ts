import { Request, Response } from "express"
const postsExpress = require("express")
const postsRouter = postsExpress.Router()
import { Post } from "./types/types"

const posts: Post = {
    "postId1": {
        userId: "user1",
        imageURL: "https://firebasestorage.googleapis.com/v0/b/linkedin-clone-953e3.appspot.com/o/posts%2FPost1.png?alt=media&token=77939991-2fe8-4747-912c-d18e21ca254a",
        caption: "Keep pushing forward, because your determination knows no bounds! #motivation #success #determination"
    },
    "postId2": {
        userId: "user2",
        imageURL: "https://firebasestorage.googleapis.com/v0/b/linkedin-clone-953e3.appspot.com/o/posts%2FPost2.png?alt=media&token=e4e985bb-31d8-40be-b62d-b529f7b892b4",
        caption: "Don't let failures hold you back - embrace them and use them to fuel your success! #motivation #success #resilience"
    },
    "postId3": {
        userId: "user3",
        imageURL: "https://firebasestorage.googleapis.com/v0/b/linkedin-clone-953e3.appspot.com/o/posts%2FPost3.png?alt=media&token=9c672f5a-f4ac-4950-b70b-eaf138ccc7d4",
        caption: "Success is not just about personal accomplishments, it's about inspiring and empowering those around you. #motivation #leadership #success"
    },
    "postId4": {
        userId: "user4",
        imageURL: "https://firebasestorage.googleapis.com/v0/b/linkedin-clone-953e3.appspot.com/o/posts%2FPost4.png?alt=media&token=708ed7ed-d8ac-43f1-a446-ef89aeb20d9f",
        caption: "Take action today to bring yourself one step closer to your goals. Remember, the only limit is the amount of action you take! #motivation #goals #success"
    }
}

postsRouter.get("/", (req: Request, res: Response) => {
    try {
        res.status(200).json({ postIds: ["postId2", "postId1", "postId3", "postId4"] })
    } catch (err) { throw err }
})

postsRouter.get("/post/:postId", (req: Request, res: Response) => {
    try {
        const { postId } = req.params
        console.log("POST ID RECEIVED: ", postId);
        console.log("RETURNING: ", { postInfo: posts[postId] });
        res.status(200).json({ postInfo: posts[postId] })
    } catch (err) { throw err }
})


module.exports = postsRouter