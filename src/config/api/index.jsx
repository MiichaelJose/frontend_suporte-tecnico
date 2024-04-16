import axios from "axios";

const baseURL = "http://localhost:8080"

export const api = axios.create({ 
    baseURL:baseURL,
    headers:{'Content-Type': 'application/json'},
    timeout: 1000 // define um tempo de limite para a requisição, caso contrario sera parada
})