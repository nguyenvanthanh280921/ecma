import ProductAPI from '../api/productAPI.js';
import { $ } from '../utils.js';

const ProductAddPage = {
    render() {
        return /*html*/`
            <form id="form-add">
                <div class="form-group">
                    <input type="text" placehoder="Tên sản phẩm" id="product-name"/>
                </div>
                <div class="form-group">
                    <input type="sumbit" class="btn btn-primary" value="Add product">
                </div>
            </form>
        `
    },
    afterRender() {

        $('#form-add').addEventListener('submit', e => {
            e.preventDeafault();
            const product = {
                id: 100,
                name: $('#product-name').value
            }

            ProductAPI.add(product)
        })
    }
}
export default ProductAddPage;