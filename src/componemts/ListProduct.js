import ProductAPI from "../api/productAPI";
import { reRender, $ } from "../utils";


const ListProduct = {

    async render() {

        const { data: product } = await ProductAPI.getAll();
        return /*html*/`
        <table class="table table-striped table-sm">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Images</th>
                    <th>Price</th>
                    <th width="200">Action</th>
                </tr>
            </thead>
            <tbody>
                ${product.map((product, index) => {
            return `<tr>
                        <td>${index}</td>
                        <td>${product.name}</td>
                        <td><img src="${product.image}" width="50"></td>
                        <td>${product.price}</td>
                        <td>
                            <a href="#/addproduct"><button class="btn btn-primary">Add</button></a>
                            <a href="/#/editProduct/${product.id}" class="btn btn-primary">Edit</a>
                            
                            <button class="btn btn-danger btn-remove" data-id="${product.id}">Delete</button>
                        </td>
                    </tr>`
        }).join("")}
            </tbody>
        </table>
        `
    },
    async afterRender() {
        const btns = $('#list-products .btn');
        console.log(btns);
        btns.forEach(btn => {
            const id = btn.dataset.id;
            btn.addEventListener('click', function () {
                const question = confirm('Bạn có chắc chắn muốn xóa hay kooooo?');
                if (question) {
                    ProductAPI.remove(id);
                    reRender(ListProduct, '#list-products');
                }
            })
        })
    }
}
export default ListProduct;