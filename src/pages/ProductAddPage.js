import ProductApi from '../api/productAPI.js';
import { $ } from '../pages/utils.js';
import firebase from '../firebase'
const ProductAddPage = {
    render() {
        return /*html*/`
        <form id="form-add">
            <div class="form-group">
                <input type="text" placeholder="Tên Sản Phẩm" id="product-name" class="form-control" />
            </div>
            <div class="form-group">
                <input type="file" id="product-image" class="form-control" />
            </div>
            <div class="form-group">
                <input type="text" placeholder="Giá Sản Phẩm" id="product-price" class="form-control" />
            </div>
            <div class="form-group">
                <input type="text" placeholder="Mô Tả Sản Phẩm" id="product-description" class="form-control" />
            </div>

            <div class="form-group">
                <input type="text" placeholder="Categary" id="product-categoryId" class="form-control" />
            </div>

            <div class="form-group">
                <input type="submit" class="btn btn-primary submitForm" value="Add Product" />
            </div>
        </form>`

    },
    // afterRender(){
    //     $('.submitForm').addEventListener('click', async(e) =>{
    //         e.preventDefault();

    async afterRender() {
        $('#form-add').addEventListener('submit', e => {
            e.preventDefault();

            const productImage = $('#product-image').files[0];
            console.log(productImage)
            let storageRef = firebase.storage().ref(image / productImage.name);
            storageRef.put(productImage).then(function () {
                console.log('Upload Thành Công')

                storageRef.getDownloadURL().then((url) => {
                    const product = {
                        id: Math.random().toString(36).substr(2, 9),
                        name: $('#product-name').value,
                        price: $('#product-price').value,
                        description: $('#product-description').value,
                        categoryId: $('#product-categoryId').value,
                        image: url

                    };
                    ProductApi.add(product);

                })
            })
        })
    }
}

//           const product ={
//               name: $('#product-name').value
//               , price: $('#product-price').value,
//               description: $('#product-description').value
//           }
//           const res = await ProductApi.add(product);
//           console.log(res);

//         })

//     }

// }
export default ProductAddPage;