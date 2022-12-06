import axios from "axios";

export default class Youtube {
    constructor() {
        this.httpClient = axios.create({
            baseURL:'https://www.googleapis.com/youtube/v3',
        })
    }
     async search (keyword) {
         // #을 붙이면 함수를 내부에서만 사용할 수 있다. 외부에서는 keyword만 전달해주면 내부에서 어떤식으로 로직을 처리할지 알려주게 됨
         return keyword ? this.#searchByKeyword(keyword) : this.#mostPopular();
     }

        async #searchByKeyword() {
        return axios.get(`/videos/search.json`)
            .then((res) => res.data.items)
            .then((items) => items.map((item) => ({...item, id:item.id.videoId})))

        }

    async #mostPopular() {
        return axios.get(`/videos/search.json`)
            .then((res) => res.data.items)

    }
}