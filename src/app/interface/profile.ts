
export interface commentInterface {
    message : string,
    sender : string,
    date : string
}

export interface userProfileInterface {
    fullname: string,
    profile: string,
    _id: string,
    followers: string[],
    following: string[],
    likesCount: number
}

export interface postProfileInterface {
    _id : string,
    user : string,
    type : string,
    caption : string,
    imgUrl : string,
    vidUrl : string,
    postBody : string,
    like : string[],
    favorite : string[],
    comment : commentInterface[],
    date : string
}