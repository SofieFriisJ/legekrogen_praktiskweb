import components from "./templates/templates_components.js";
import products from "./products.js";
import search from "./search.js";



const app = {}

app.init = async () => {

    
    components()

    await products.list()
    await products.recommendedList()

    await search()


    }

app.init()