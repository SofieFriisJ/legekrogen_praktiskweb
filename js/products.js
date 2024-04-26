import data from "./fetch_data.js";
import { productListTmpl } from "./templates/templates_lists.js";



const products = () => {}

/* Liste af produkter fra API'et, som nu fungerer som et array */
let productList = await data.fetchProducts()


products.list = async () => {

    
    
    /* div i index.html, hvor produkt-listen udskrives */
    let productListContainer = document.querySelector('.product_list')
    

    if(productListContainer){

        productList.forEach(element => {
            productListContainer.insertAdjacentHTML('beforeend', productListTmpl(element));
        });

    }

}


products.recommendedList = async () => {
    
    
    let productListContainer = document.querySelector('.product_list_recommended')
    
    
    if(productListContainer){

        const recommendedProducts = productList.filter(product => product.recommended == true)

        recommendedProducts.forEach(element => {
            productListContainer.insertAdjacentHTML('beforeend', productListTmpl(element));
        });

    }

}


export default products;




