
const components = () => {}

/* NAV */
components.nav = () => {

    return `
        <p>Nav Maria</p>
    `;

}
    
let navContainer = document.querySelector('nav')
navContainer.insertAdjacentHTML('beforeend', components.nav())




/* FOOTER */
components.footer = () => {

    return `
        <p>Footer</p>
    
    `;

}
    
let footerContainer = document.querySelector('footer')
footerContainer.insertAdjacentHTML('beforeend', components.footer())




export default components;