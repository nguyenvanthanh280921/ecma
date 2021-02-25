//import data from '../data.js';


import ProductAPI from '../api/productAPI';

// console.log(data.products);
const ProductsPage = {
    async render() {
        try {
            const { data: products } = await ProductAPI.getAll();
            // const response = await axios('https://5e79b4b817314d00161333da.mockapi.io/products');
            // const products = await response.data;
            const result = products.map(product => {
                return `
                    <div class="col-md-4">
                        <div class="card mb-4 box-shadow">
                        <img src="${product.image}" class="card-img-top" alt="${product.name}">
                            <div class="card-body">
                            <h5 class="card-title">${product.name}</h5>
                            <p class="card-text">${product.price}</p>
                                <div class="d-flex justify-content-between align-items-center">
                                    <div class="btn-group">
                                    <a href="/#/products/${product.id}"><button type="button" class="btn btn-sm btn-outline-secondary">View</button></a>
                                        <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
                                    </div>
                                    <small class="text-muted">9 mins</small>
                                </div>
                            </div>
                        </div>
                    </div>
                `
            }).join("");
            return `
                    <h1>Products Page</h1>
                    <div class="row">
                        ${result}
                    </div>
                `

        } catch (error) {
            console.log(error);

        }

        //const { products } = data;


    }
}
export default ProductsPage;