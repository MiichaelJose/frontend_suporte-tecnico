import axios from "axios";

const baseURL = "http://localhost:8080"

const data = localStorage.getItem('data')

export const api = axios.create({ 
    baseURL:baseURL,
    headers:{'Content-Type': 'application/json', 'Authorization': 'Bearer '+ JSON.parse(data).token_acesso},
    timeout: 1000 // define um tempo de limite para a requisição, caso contrario sera parada
})


console.log(JSON.parse(data).token_acesso)