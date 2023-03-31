import { Request, Response } from "express"
const notifExpress = require("express")
const notifRouter = notifExpress.Router()

const notifications = [
    {
        time: '2h', name: "John Smith", text: ' has endorsed you for Project Management. Thank them for their support!',
        imageURL: "https://firebasestorage.googleapis.com/v0/b/linkedin-clone-953e3.appspot.com/o/userDps%2Fuser1.jpg?alt=media&token=cd567716-99f4-4706-b29e-bfa30c8484c7"
    },
    {
        time: '4h', name: "Jane Doe ", text: 'has viewed your profile. Take a look at theirs and see if there\'s an opportunity to connect.',
        imageURL: "https://firebasestorage.googleapis.com/v0/b/linkedin-clone-953e3.appspot.com/o/userDps%2Fuser2.jpg?alt=media&token=626735c1-4f64-4091-a4af-b114eca66a76"
    },
    {
        time: '6h', name: "David Lee", text: 'has shared an article on leadership. Check it out and join the conversation!',
        imageURL: "https://firebasestorage.googleapis.com/v0/b/linkedin-clone-953e3.appspot.com/o/userDps%2Fuser5.png?alt=media&token=fedd712a-a5b0-4e79-9221-5ae5b114c222"
    },
    {
        time: '8h', name: "Samantha Brown", text: ' has started a new job at XYZ Company. Congratulate them and wish them the best.',
        imageURL: "https://firebasestorage.googleapis.com/v0/b/linkedin-clone-953e3.appspot.com/o/userDps%2Fuser4.jpg?alt=media&token=3e598367-6827-4ff6-8445-ba87ce9415b6"
    },
    {
        time: '10h', name: "Michael Kim", text: 'Michael Kim has published a post on marketing strategies. Give it a read and share your thoughts in the comments.',
        imageURL: "https://firebasestorage.googleapis.com/v0/b/linkedin-clone-953e3.appspot.com/o/userDps%2Fuser6.jpg?alt=media&token=e59d5dfa-4784-41d9-b658-a18dddbfd2b1"
    },
    {
        time: '12h', name: "Lauren Chen", text: 'Lauren Chen has invited you to connect on LinkedIn. Accept the invitation and start building your network.',
        imageURL: "https://firebasestorage.googleapis.com/v0/b/linkedin-clone-953e3.appspot.com/o/userDps%2Fuser1.jpg?alt=media&token=cd567716-99f4-4706-b29e-bfa30c8484c7"
    },
    {
        time: '14h', name: "Alex Rodriguez", text: 'Alex Rodriguez has posted a job opening for Digital Marketing Manager. Check it out and see if it\'s a good fit for you.',
        imageURL: "https://firebasestorage.googleapis.com/v0/b/linkedin-clone-953e3.appspot.com/o/userDps%2Fuser5.png?alt=media&token=fedd712a-a5b0-4e79-9221-5ae5b114c222"
    },
    {
        time: '16h', name: "Emily Nguyen", text: 'Emily Nguyen has added a new project to their profile. Take a look and learn more about their work.',
        imageURL: "https://firebasestorage.googleapis.com/v0/b/linkedin-clone-953e3.appspot.com/o/userDps%2Fuser4.jpg?alt=media&token=3e598367-6827-4ff6-8445-ba87ce9415b6"
    },
    {
        time: '18h', name: "Emily Nguyen", text: 'Emily Nguyen  has received an award for Top Sales Performance. Congratulate them on their accomplishment.',
        imageURL: "https://firebasestorage.googleapis.com/v0/b/linkedin-clone-953e3.appspot.com/o/userDps%2Fuser3.jpg?alt=media&token=788649aa-950a-4751-b4b2-f8d4f001736f"
    },
    {
        time: '20h', name: "Sarah Johnson", text: 'Sarah Johnson has commented on your post. Respond to their comment and continue the conversation.',
        imageURL: "https://firebasestorage.googleapis.com/v0/b/linkedin-clone-953e3.appspot.com/o/userDps%2Fuser2.jpg?alt=media&token=626735c1-4f64-4091-a4af-b114eca66a76"
    }
];


notifRouter.get("/", (req: Request, res: Response) => {
    try {
        res.status(200).json(notifications)
    } catch (err) { throw err }
})


module.exports = notifRouter