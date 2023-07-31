import { showData } from "./showData.js"

// Get container and clicked product streamed through local storage
const container = document.querySelector('.list-group')
const clicked_product = JSON.parse(localStorage.getItem('detail'))

// Insert clicked product on array and render same template
await showData([clicked_product], container)

// Get description and price product's attributes
const details = document.createElement('p')
details.innerHTML = '<br>' + clicked_product.description
details.style.fontWeight = 300

const price = document.createElement('h5')
price.innerHTML = '<br>PRICE $' + clicked_product.price

// Tailor button: from DETAIL to RETURN
const btn = document.querySelector('.btn')
btn.innerText = 'RETURN'
btn.onclick = () => {
    window.location.href = "index.html"
    localStorage.removeItem('detail')
}

// Append details to the product's card
btn.previousElementSibling.appendChild(details)
.appendChild(price)
