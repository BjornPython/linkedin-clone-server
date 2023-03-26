import { Request, Response } from "express"
const postsExpress = require("express")
const postsRouter = postsExpress.Router()
import { Post } from "../types"

const posts: Post = {
    "postId1": {
        userId: "userId1",
        imageURL: "https://firebasestorage.googleapis.com/v0/b/linkedin-clone-953e3.appspot.com/o/userDps%2Fuser1.jpg?alt=media&token=cd567716-99f4-4706-b29e-bfa30c8484c7",
        caption: "caption1"
    },
    "postId2": {
        userId: "userId2",
        imageURL: "https://firebasestorage.googleapis.com/v0/b/linkedin-clone-953e3.appspot.com/o/userDps%2Fuser2.jpg?alt=media&token=626735c1-4f64-4091-a4af-b114eca66a76",
        caption: "caption2"
    },
    "postId3": {
        userId: "userId3",
        imageURL: "https://firebasestorage.googleapis.com/v0/b/linkedin-clone-953e3.appspot.com/o/userDps%2Fuser3.jpg?alt=media&token=788649aa-950a-4751-b4b2-f8d4f001736f",
        caption: "caption3"
    },
    "postId4": {
        userId: "userId4",
        imageURL: "https://firebasestorage.googleapis.com/v0/b/linkedin-clone-953e3.appspot.com/o/userDps%2Fuser4.jpg?alt=media&token=3e598367-6827-4ff6-8445-ba87ce9415b6",
        caption: "caption4"
    }
}

postsRouter.get("/", (req: Request, res: Response) => {
    try {
        res.status(200).json({ postIds: ["postId1", "postId2", "postId3", "postId4"] })
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