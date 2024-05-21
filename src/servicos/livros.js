import axios from "axios";

const livrosAPI = axios.create({ baseURL: "http://localhost:8000/livros" })

function getLivrod() {
    const response = livrosAPI.get('/')

    return response.data
}
export {

    getLivrod

}
