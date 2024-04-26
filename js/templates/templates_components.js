

const components = () => {}




/* ---------- NAV ---------- */

components.nav = () => {

    return `
        <p>Nav</p>
    
    `;

}
    
let navContainer = document.querySelector('nav')

if(navContainer){
    navContainer.insertAdjacentHTML('beforeend', components.nav())
}







/* ---------- HEADER ---------- */

components.header = () => {

    return `
        <p>Header</p>
    
    `;

}
    
let headerContainer = document.querySelector('header')

if(headerContainer){
    headerContainer.insertAdjacentHTML('beforeend', components.header())
}







/* ---------- SLIDER ---------- */

components.slider = () => {

    return `
        <p>Slider</p>
    `;

}
    
let sliderContainer = document.querySelector('.slider')

if(sliderContainer){
    sliderContainer.insertAdjacentHTML('beforeend', components.slider())
}





/* ---------- SEARCH ---------- */

components.search = () => {

    return `
        <input type="search" placeholder="Du kan søge her..." id="search">
    `;

}
    
let searchContainer = document.querySelector('.search-field')

if(searchContainer){
    searchContainer.insertAdjacentHTML('beforeend', components.search())
}






/* ---------- KUNDEKLUB ---------- */

components.subscribe = () => {

    return `
        <p>Kundeklub</p>
    `;

}
    
let subscribeContainer = document.querySelector('.subscribe')

if(subscribeContainer)
subscribeContainer.insertAdjacentHTML('beforeend', components.subscribe())




/* ---------- FOOTER ---------- */

components.footer = () => {

    return `
        <p>Footer</p>
    
    `;

}
    
let footerContainer = document.querySelector('footer')

if(footerContainer){
    footerContainer.insertAdjacentHTML('beforeend', components.footer())
}







export default components;











/* 
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
 */