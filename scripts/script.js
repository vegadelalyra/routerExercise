import getData from './getData.js'
import { showData } from './showData.js'

const element = document.querySelector('.list-group')

const endpoint = 'http://localhost:3000/products/'

document.addEventListener('DOMContentLoaded', () => {
    const data = getData(endpoint)
    showData(data, element)
})

element.addEventListener('click', async e => {
    const btnDetail = e.target
    .classList.contains('btn-outline-dark')

    const id = e.target.id

    if (!btnDetail) return

    const list = await getData(endpoint)
    const object = list.find(product => product.id === Number(id))
    localStorage.setItem('detail', JSON.stringify(object))
    window.location.href = "detail.html"
})