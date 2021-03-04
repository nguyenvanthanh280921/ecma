
import { parseRequestUrl } from "../utils.js";
import data from '../data.js';
import ProductApi from "../api/productAPI";

const CategoryPage = {
    async render() {
        const { id } = parseRequestUrl();
        console.log(id);
        const { data: products } = await ProductApi.getAll();
        const result = products.filter(product => product.categoryId == id)
            .map(product => {
                return `
                                                
                          <div><a href="/#/products/${product.id}" /> "${product.name}</div>
                             <td><img src="${product.image}"width="200"</td>                                                    
                             `
            }).join("");

        return `${result}`
    }
}
export default CategoryPage;