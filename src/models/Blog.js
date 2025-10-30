import { Account } from "./Account.js"


export class Blog {

    constructor(data) {
        this.id = data.id
        this.title = data.title
        this.body = data.body
        this.imgUrl = data.imgUrl


        this.creatorId = data.creatorId
        this.creator = new Account(data.creator) //probably keep the new Account? 

        this.createdAt = new Date(data.createdAt) //then format in card componenet, will be given intellisense! 
    }

    //Add getter later!
}