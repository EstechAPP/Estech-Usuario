import axios from "axios";

export const API = axios.create({
    baseURL: "http://estechtestes-001-site1.ctempurl.com/"
})

export const APIViaCEP = axios.create({
    baseURL: "https://viacep.com.br/ws/"
})


