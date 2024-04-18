import { products } from "./products.js";
import components from "./templates/templates_components.js";




const app = {}

app.init = async () => {


    /* UDSKRIVER PRODUKT-LISTE */
    await products()

    /*  UDSKRIVER HTML KOMPONENTER */    
    components()


    }

app.init()