import axios from "axios";

const API_URL =  'https://aldecione-sds2.herokuapp.com/'; //caso nao funcione pegar o endereço da heroku

export function fetchOrders() {
    return axios(`${API_URL}/orders`)
}

export function confimDelivery(orderId: number) {
    return axios.put(`${API_URL}/orders/${orderId}/delivered`)
}