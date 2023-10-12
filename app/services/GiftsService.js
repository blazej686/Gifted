import { AppState } from "../AppState.js"
import { Gift } from "../models/Gift.js"
import { api } from "./AxiosService.js"

class GiftsService {
    async createGift(giftData) {
        const res = await api.post('api/gifts', giftData)
        const newGift = new Gift(res.data)

        AppState.gifts.splice(0, 0, newGift)
        AppState.emit('gifts')
    }
    async openGift(giftId) {

        let gift = AppState.gifts.find(gift => giftId == gift.id)
        // @ts-ignore
        gift.opened = true
        const res = await api.put(`api/gifts/${giftId}`, gift)
        console.log(res.data);
        const giftIndex = AppState.gifts.findIndex(gift => gift.id == giftId)
        AppState.gifts.splice(giftIndex, 1, gift)
        AppState.emit('gifts')

    }
    async getGifts() {
        const res = await api.get('api/gifts')
        AppState.gifts = res.data.map(gift => new Gift(gift))
    }


}

export const giftsService = new GiftsService()
