export const showData = async (list, element) => {
    const products = await list
    products.forEach(prod => {
        const{id, name, img} = prod // Desestructuración | Destructuring assingment
        element.innerHTML += /*html*/ ` 
            <li class="card" style="width: 18rem;">
                <div class="card-body">
                    <img src=${img} class="card-img-top" alt="">
                    <h5 class="card-title">${name}</h5>
                    <a href="#" id=${id} class="btn btn-outline-dark" 
                    style="background-color: #db7093;">DETAIL</a>
                </div>
            </li>
        `
    }) /*html**/
}
