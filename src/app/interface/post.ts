
export interface commentInterface {
    message : string,
    sender : {
        fullname : string,
        profile : string
    },
    date : string
}

export interface postInterface {
    _id : string,
    user : {
        _id : string,
        fullname : string,
        profile : string
    },
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

export interface addPostInterface {
    value : string,
    caption : string,
    type : string
}

export interface sideIconsInterface {
    user: {  profile: string, id : number },
    like: number[],
    comment: { message: string, id : number}[],
    favorite: number[]
}