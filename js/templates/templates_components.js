


const components = {}

/* NAV */
components.nav = {

    init : () => {

      
        let navContainer = document.querySelector('nav')
        console.log('Hello', components.nav.tmpl, navContainer)

        if(navContainer){


            let tmpl = `<p>Nav</p>`

            navContainer.insertAdjacentHTML('beforeend', tmpl)
        
        }

    }

}


  









/* FOOTER */
/* 
components.footer = () => {

    return `
        <p>Footer</p>
    
    `;

}
    
let footerContainer = document.querySelector('footer')
footerContainer.insertAdjacentHTML('beforeend', components.footer())





*/

export default components;