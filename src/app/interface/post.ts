

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