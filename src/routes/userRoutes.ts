import { Request, Response } from "express"
const userExpress = require("express")
const userRouter = userExpress.Router()
import { User } from "./types/types"


const users: User = {
    user1: {
        name: "Michael Nguyen",
        bio: "Marketing Director at a Fortune 500 Company ",
        dpURL: "https://firebasestorage.googleapis.com/v0/b/linkedin-clone-953e3.appspot.com/o/userDps%2Fuser1.jpg?alt=media&token=cd567716-99f4-4706-b29e-bfa30c8484c7",
        bannerURL: "https://firebasestorage.googleapis.com/v0/b/linkedin-clone-953e3.appspot.com/o/userBanners%2Fbanner1.png?alt=media&token=202e06b1-0124-4dc5-9853-bc08b8312f07"
    },
    user2: {
        name: "Maximo Guzman",
        bio: "Senior Data Scientist at a Tech Startup",
        dpURL: "https://firebasestorage.googleapis.com/v0/b/linkedin-clone-953e3.appspot.com/o/userDps%2Fuser2.jpg?alt=media&token=626735c1-4f64-4091-a4af-b114eca66a76",
        bannerURL: "https://firebasestorage.googleapis.com/v0/b/linkedin-clone-953e3.appspot.com/o/userBanners%2Fbanner2.png?alt=media&token=268e1909-b893-47ac-8038-7f0cb1b87679"
    },
    user3: {
        name: "Marcus Lee",
        bio: "Human Resources Manager at a Nonprofit Organization",
        dpURL: "https://firebasestorage.googleapis.com/v0/b/linkedin-clone-953e3.appspot.com/o/userDps%2Fuser3.jpg?alt=media&token=788649aa-950a-4751-b4b2-f8d4f001736f",
        bannerURL: "https://firebasestorage.googleapis.com/v0/b/linkedin-clone-953e3.appspot.com/o/userBanners%2Fbanner3.png?alt=media&token=4c99a80b-7698-4e36-a399-f5cfa4b8160c"
    },
    user4: {
        name: "Julia Kim",
        bio: "Creative Director at a Digital Marketing Agency",
        dpURL: "https://firebasestorage.googleapis.com/v0/b/linkedin-clone-953e3.appspot.com/o/userDps%2Fuser4.jpg?alt=media&token=3e598367-6827-4ff6-8445-ba87ce9415b6",
        bannerURL: "https://firebasestorage.googleapis.com/v0/b/linkedin-clone-953e3.appspot.com/o/userBanners%2Fbanner4.png?alt=media&token=eec1f409-ae73-4fb7-a7f1-379052a58e93"
    },
    user5: {
        name: "Emily Chen",
        bio: "Chief Financial Officer at a Healthcare System",
        dpURL: "https://firebasestorage.googleapis.com/v0/b/linkedin-clone-953e3.appspot.com/o/userDps%2Fuser5.png?alt=media&token=fedd712a-a5b0-4e79-9221-5ae5b114c222",
        bannerURL: "https://firebasestorage.googleapis.com/v0/b/linkedin-clone-953e3.appspot.com/o/userBanners%2Fbanner5.png?alt=media&token=5c714a35-04eb-4f14-bf9e-b38eaf5df7d8"
    },
    user6: {
        name: "David Rodriguez",
        bio: "Product Manager at a SaaS Company",
        dpURL: "https://firebasestorage.googleapis.com/v0/b/linkedin-clone-953e3.appspot.com/o/userDps%2Fuser6.jpg?alt=media&token=e59d5dfa-4784-41d9-b658-a18dddbfd2b1",
        bannerURL: "https://firebasestorage.googleapis.com/v0/b/linkedin-clone-953e3.appspot.com/o/userBanners%2Fbanner6.png?alt=media&token=ae887515-967e-4d13-9cf1-bc2a4b4a5086"
    }
}


userRouter.get("/", (req: Request, res: Response) => {
    try {
        res.status(200).json({ ...users })
    } catch (err) { throw err }
})

userRouter.get("/:userId", (req: Request, res: Response) => {
    console.log("IN HERE");
    try {
        const uid = req.params.userId
        console.log("UID: ", uid);
        res.status(200).json({ user: users[uid] })
    } catch (err) { throw err }
})

module.exports = userRouter
