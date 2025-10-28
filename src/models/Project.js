import { Account } from "./Account.js"


export class Project {

    constructor(data) {
        this.id = data.id
        this.createdAt = new Date(data.createdAt)
        this.updatedAt = new Date(data.updatedAt)
        this.title = data.title
        this.coverImg = data.coverImg
        this.projectImgs = data.projectImgs


        this.creatorId = data.creatorId
        this.creator = new Account(data.creator)
    }

    //Add getter later!
}