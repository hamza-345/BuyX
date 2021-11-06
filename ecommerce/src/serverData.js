import axios from 'axios'

const url = "http://localhost:3100/api/products"

const getAll = () => {
    const req = axios.get(url)
    return req.then(response => response.data)
}
const create = newObj => {
    const req = axios.post(url, newObj)
    return req.then(response => response.data)
}

const update = (id, newObj) => {
    const req = axios.put(`${url}/${id}`, newObj)
    return req.then(response => response.data)
}

const del = id => {
    const request = axios.delete(`${url}/${id}`)
    return request.then(response => response.data)
}

const getProduct = id => {
    const request = axios.get(`${url}/${id}`)
    return request.then(response => response.data)
}

const exportedObj = {
    getAll, create, update, del, getProduct
}

export default exportedObj