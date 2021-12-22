export interface GetUser {
    setGender(gender: Gender): (Gender | Boolean)
}

export interface GetUserStorage {
    gender: Gender| Boolean
}

export enum Gender {
    MALE = "Male",
    FEMALE = "Female"
}