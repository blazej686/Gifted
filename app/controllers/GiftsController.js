import { AppState } from "../AppState.js";
import { Account } from "../models/Account.js";
import { giftsService } from "../services/GiftsService.js";
import { getFormData } from "../utils/FormHandler.js";
import { Pop } from "../utils/Pop.js";
import { setHTML } from "../utils/Writer.js";


function _drawGifts() {
    let content = ''
    AppState.gifts.forEach(gift => content += gift.giftCardTemplate)
    setHTML('gift-area', content)

}


export class GiftsController {

    constructor() {
        AppState.on('account', this.getGifts)
        AppState.on('gifts', _drawGifts)

    }

    async getGifts() {
        try {
            await giftsService.getGifts()

        } catch (error) {
            Pop.error(error)
            console.error(error)

        }



    }
    async openGift(giftId) {
        try {
            await giftsService.openGift(giftId)

        } catch (error) {
            Pop.error(error)
            console.error(error)

        }

    }

    async createGift(event) {
        try {
            event.preventDefault()
            const form = event.target
            const giftData = getFormData(form)
            console.log('controller creategift, giftdata', giftData);
            await giftsService.createGift(giftData)
        } catch (error) {
            Pop.error(error)
            console.error(error)
        }
    }
}