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

export interface Jobs {
    [key: string]: {
        company: string,
        title: string,
        description: string,
        location: string,
        DpURL: string
    }
}