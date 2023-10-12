export class Gift {

    constructor(data) {
        this.id = data.id || null
        this.tag = data.tag
        this.url = data.url
        this.opened = false
        this.creatorId = data.creatorId

    }

    get giftCardTemplate() {

        return `
        <div onclick="app.GiftsController.openGift('${this.id}')" class="col-4 card">
        <img class=" p-4"
          src="${this.openedOrClosedImg}"
          alt="Gift">
        <p class="m-0 text-center">${this.tag}</p>
      </div>
      `
    }

    get openedOrClosedImg() {
        if (this.opened) {
            return this.url
        }
        return 'https://media1.giphy.com/media/hFmIU5GQF18Aw/giphy.gif?cid=ecf05e471ztr9r7514d6gvdy7x5rck667qpz3lyrsaeirddd&ep=v1_gifs_trending&rid=giphy.gif&ct=g'
    }
}