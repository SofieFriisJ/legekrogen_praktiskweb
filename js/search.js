import data from "./fetch_data.js";
import { productListTmpl } from "./templates/templates_lists.js";



const search = async () => {


    let productList = await data.fetchProducts()
    let productListContainer = document.querySelector('.product_list')
    
            
    const renderResult = (result) => {
        if(productListContainer){
            productListContainer.innerHTML = '';
        
            result.forEach(product => {
                productListContainer.insertAdjacentHTML('beforeend', productListTmpl(product));
            })
        }

        
    
    }
    
    const searchInput = (e) => {
        const searchTerm = e.target.value;

        const result = productList.filter(product => product.title.includes(searchTerm));
        
        console.log(result)


        renderResult(result);
    
        
    
    }
    
    const input = document.querySelector('#search');

    if(input){
        input.addEventListener('input', searchInput);
    }



}    

export default search;