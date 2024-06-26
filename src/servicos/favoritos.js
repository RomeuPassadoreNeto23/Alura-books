import axios from "axios";

const favoritosAPI = axios.create({ baseURL: "http://localhost:8000/favoritos" })

async function getfavoritos() {

    const response = await favoritosAPI.get('/')

    return response.data
}
async function postFavoritos(id) {

    await favoritosAPI.post(`${id}`)

}
async function deleteFavoritos(id) {

    await favoritosAPI.delete(`${id}`)

}

export {

    getfavoritos,
    deleteFavoritos,
    postFavoritos

}
