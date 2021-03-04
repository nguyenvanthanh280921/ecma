import ProductApi from '../api/productAPI';
import { parseRequestUrl, $ } from '../pages/utils';
import firebase from '../firebase'

const ProductEditPage = {
    async render() {
        const { id } = parseRequestUrl();
        const { data: product } = await ProductApi.get(id);
        console.log(product);
        return /*html*/`
          <div class="col-md-2 col-lg-3 my-3 ">
            <div class="product-item">
                <div class="product-title">
                    <a href="#">${product.name}</a>
                    <div class="ratting">
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                    </div>
                </div>
                <div class="product-image">
                    <a href="product-detail.html">
                        <img src="${product.image}" alt="${product.name}">
                    </a>
                    <div class="product-action">
                        <a href="#"><i class="fa fa-cart-plus"></i></a>
                        <a href="#"><i class="fa fa-heart"></i></a>
                        <a href="#"><i class="fa fa-search"></i></a>
                    </div>
                </div>
                <div class="product-price">
                    <h3> </h3>
                    <a class="btn1" href="/#/products/${product.id}"><i class="fa fa-shopping-cart"></i>Xem Thêm</a>
                </div>
            </div>               
        </div>

        <form id ="form-update-product">
            <div class="form-group">
                <input type ="text" placeholder="Tên Sản Phẩm" id="product-name"  value="${product.name}"  class="form-control"/>
            </div>
            <div class="form-group">
                <input type ="file" id="product-image" class="form-control"   value="${product.image}"/>
            </div>
            <div class="form-group">
                <input type ="text" placeholder="Giá Sản Phẩm" id="product-price" class="form-control" value="${product.price}"/>
            </div>
            <div class="form-group">
                <input type ="text" placeholder="Mô Tả Sản Phẩm" id="product-description" class="form-control" value="${product.description}"/>
            </div>
            <div class="form-group">
                <input  placeholder="Categary" id="product-categoryId" class="form-control" value="${product.categoryId}"/>
            </div>
            <div class ="form-group">
                <button type="submit" class="btn btn-primary">Update</button>
            </div>
        </form>
        `

    },
    async afterRender() {
        const { id } = parseRequestUrl();
        const { data: product } = await ProductApi.get(id);
        console.log('product', product)
        $('#form-update-product').addEventListener('submit', async (e) => {
            e.preventDefault();
            const productImage = $('#product-image').files[0];
            let newProduct = product
            if (productImage) {
                const storageRef = firebase.storage().ref(image / ${ productImage.name });
                await storageRef.put(productImage).then(function () {
                    console.log('Upload Thành Công')
                    storageRef.getDownloadURL().then((url) => {
                        newProduct = {
                            ...product,
                            name: $('#product-name').value,
                            price: $('#product-price').value,
                            description: $('#product-description').value,
                            categoryId: $('#product-categoryId').value,
                            image: url
                        };
                        ProductApi.update(id, newProduct);
                        window.location.hash = '/listproduct'
                    })
                })
            } else {
                newProduct = {
                    ...product,
                    name: $('#product-name').value,
                    price: $('#product-price').value,
                    description: $('#product-description').value,
                    categoryId: $('#product-categoryId').value
                };
                ProductApi.update(id, newProduct);
                window.location.hash = '/listproduct'
            }
        })

    }
};
export default ProductEditPage;