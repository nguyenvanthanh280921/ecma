// import axios from 'axios';
// import data from '../data.js';
import ProductAPI from '../api/productAPI';
import { parsRequesUrl } from '../utils.js';
const ProductDetail = {
    async render() {
        // const { products } = data;
        const { id } = parsRequesUrl();
        const { data: product } = await ProductAPI.get(id);

        return `
                <div class="row">
                    <div class="col-6">
                        <img width="200" src="${product.image}"/>
                    </div>
                    <div class="col-6">
                        <h1>${product.name}</h1>
                        <p>${product.price}</p>
                        <p>${product.description}</p>
                    </div>
                </div>
        `
    }
}
export default ProductDetail;

