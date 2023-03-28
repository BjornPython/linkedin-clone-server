export interface Post {
    [key: string]: {
        userId: string,
        imageURL: string,
        caption: string
    }

}

export interface User {
    [key: string]: {
        name: string,
        bio: string,
        dpURL: string,
        bannerURL: string
    }
}