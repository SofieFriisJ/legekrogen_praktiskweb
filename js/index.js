import { products } from "./products.js";
import components from "./templates/templates_components.js";




const app = {}

app.init = async () => {

    /*  UDSKRIVER HTML KOMPONENTER */    
    //components()

    components.nav.init();

    


    /* UDSKRIVER PRODUKT-LISTE */
    await products()



    }

app.init()