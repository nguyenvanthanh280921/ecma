import HomePage from './pages/HomePage.js';
import ProductsDetail from './pages/ProductsDetail.js';
import ProductsPage from './pages/ProductsPage.js';
import { parsRequesUrl, $ } from './utils.js';
import Error404Page from './pages/Error404Page.js';
import CategoryPage from './pages/CategoryPage.js';
import Header from './componemts/Header.js';
import ProductAddPage from './pages/ProductAddPage.js';


const routes = {
    '/': HomePage,
    '/products': ProductsPage,
    '/products/:id': ProductsDetail,
    '/category/:id': CategoryPage,
    '/addproduct/': ProductAddPage
}
const router = async () => {
    const { resource, id } = parsRequesUrl();
    const parseUrl = (resource ? `/${resource}` : '/') + (id ? `/:id` : '')
    const page = routes[parseUrl] ? routes[parseUrl] : Error404Page;
    $('#header').innerHTML = await Header.render();
    $('#main-content').innerHTML = await page.render();
    await page.afterRender();
}


window.addEventListener('DOMContentLoaded', router);
window.addEventListener('hashchange', router);