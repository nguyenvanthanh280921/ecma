import { parsRequesUrl } from '../utils';
import data from '../data.js';
import ProductAPI from '../api/productAPI';
const CategoryPage = {
    async render() {
        const { id } = parsRequesUrl();
        console.log(id);
        const { data: products } = await ProductAPI.getAll();

        console.log(products);
        const result = products.filter(product => product.categoryID == id)
            .map(product => {
                return `<div><a href="/#/products/${product.id}"</a>${product.name}</div>`
            }).join("");

        console.log(result);
        return `${result}`
    }
}
export default CategoryPage;