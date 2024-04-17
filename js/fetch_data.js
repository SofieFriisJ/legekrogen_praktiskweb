const data = {}



/* PRODUKTER */
data.fetchProducts = async () => {
    try {
        const response = await fetch('https://legekrogen.webmcdm.dk/products');
        const products = await response.json();
        return products;
        

    } catch (error) {
        console.error('Error fetching or parsing data:', error);
    }
}


/* UDTALELSER */
data.fetchReviews = async () => {
    try {
        const response = await fetch('https://legekrogen.webmcdm.dk/reviews');
        const reviews = await response.json();
        return reviews;
        

    } catch (error) {
        console.error('Error fetching or parsing data:', error);
    }
}



/* SPØRGSMÅL & SVAR */
data.fetchQuestions = async () => {
    try {
        const response = await fetch('https://legekrogen.webmcdm.dk/questions');
        const questions = await response.json();
        return questions;
        

    } catch (error) {
        console.error('Error fetching or parsing data:', error);
    }
}


export default data;