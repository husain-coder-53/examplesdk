import { GetUser, GetUserStorage, Gender } from "./interfaceGetUser";
export class getUser implements GetUser {
    protected storage: GetUserStorage = {
        gender: Gender.MALE,
        // yob: false,
        // city: false,
        // region: false,
        // country: false,
        // zipcode: false,
        // customData: {}
    };
    constructor() { }
    setGender(gender: Gender): (Gender | Boolean) {
        const isValid = Object.values(Gender).includes(gender);
        const value = isValid && gender;
        this.storage.gender = value;
        return value;
    }
    getAllInfo(): Object {
        return this.storage;
    }
}