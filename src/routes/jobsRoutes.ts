import { Request, Response } from "express"
import { Jobs } from "./types/types"
const jobsExpress = require("express")
const jobsRouter = jobsExpress.Router()

const jobs: Jobs = {
    job1: {
        company: "ByteBrew",
        title: "Full Stack Developer",
        description: "We are seeking a skilled Full Stack Developer to join our dynamic team. The successful candidate will be responsible for developing and maintaining web applications using cutting-edge technologies.",
        location: "Manila, Philippines",
        DpURL: "https://firebasestorage.googleapis.com/v0/b/linkedin-clone-953e3.appspot.com/o/jobDps%2F1.png?alt=media&token=36360030-2035-4938-986e-3f9853489479"
    },
    job2: {
        company: "LogicLynx",
        title: "Mobile App Developer",
        description: "We are looking for a talented Mobile App Developer to join our team. The successful candidate will be responsible for developing and maintaining mobile applications on iOS and Android platforms.",
        location: "Cebu, Philippines",
        DpURL: "https://firebasestorage.googleapis.com/v0/b/linkedin-clone-953e3.appspot.com/o/jobDps%2F2.png?alt=media&token=0ae88fbe-ae8e-40b7-abcd-a795ddf88338"
    },
    job3: {
        company: "InnovateIQ",
        title: "Frontend Developer",
        description: "We are seeking a skilled Frontend Developer to join our team. The successful candidate will be responsible for developing and maintaining client-side web applications using HTML, CSS, and JavaScript.",
        location: "Makati, Philippines",
        DpURL: "https://firebasestorage.googleapis.com/v0/b/linkedin-clone-953e3.appspot.com/o/jobDps%2F3.png?alt=media&token=5f069f75-4c03-4190-82ec-da3e8bbfd0fb"
    },
    job4: {
        company: "TechTide",
        title: "Backend Developer",
        description: "We are looking for a talented Backend Developer to join our team. The successful candidate will be responsible for developing and maintaining server-side web applications using Node.js and other related technologies.",
        location: "Davao, Philippines",
        DpURL: "https://firebasestorage.googleapis.com/v0/b/linkedin-clone-953e3.appspot.com/o/jobDps%2F4.png?alt=media&token=110f3cfb-13aa-4d15-9a97-56c4f3db81a0"
    },
    job5: {
        company: "CodeLift",
        title: "Software Engineer",
        description: "We are seeking a skilled Software Engineer to join our team. The successful candidate will be responsible for developing and maintaining software applications using various programming languages and frameworks.",
        location: "Quezon City, Philippines",
        DpURL: "https://firebasestorage.googleapis.com/v0/b/linkedin-clone-953e3.appspot.com/o/jobDps%2F5.png?alt=media&token=9ecdfa32-b7ae-4dfb-844c-b2cece7a065f"
    },
    job6: {
        company: "DataDrift",
        title: "UI/UX Designer",
        description: "We are looking for a talented UI/UX Designer to join our team. The successful candidate will be responsible for designing and developing user interfaces for web and mobile applications.",
        location: "Taguig, Philippines",
        DpURL: "https://firebasestorage.googleapis.com/v0/b/linkedin-clone-953e3.appspot.com/o/jobDps%2F6.png?alt=media&token=0356a760-d50d-4525-aa1d-993ae32fbef0"
    }
}

jobsRouter.get("/", (req: Request, res: Response) => {
    try {
        res.status(200).json({ ...jobs })
    } catch (err) { throw err }
})

module.exports = jobsRouter