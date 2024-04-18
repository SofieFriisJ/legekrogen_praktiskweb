import data from "./fetch_data.js";
import { productListTmpl } from "./templates/templates_lists.js";



export const products = async () => {


    /* Liste af produkter fra API'et, som nu fungerer som et array */
    let productList = await data.fetchProducts()

    /* div i index.html, hvor produkt-listen udskrives */
    let productListContainer = document.querySelector('.product_list_recommended')


    productList.forEach(element => {
        productListContainer.insertAdjacentHTML('beforeend', productListTmpl(element));
    });
}




