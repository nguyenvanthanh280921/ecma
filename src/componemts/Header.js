

const Header = {
    render() {
        return /*html*/`
        <p class="h5 my-0 me-md-auto fw-normal"><img src="./images/logomen.jpg" alt="" width="80px " height="60px"></p>
        <nav class="my-2 my-md-0 me-md-3">

            <a class="p-2 text-dark" href="/">HOME</a>
            <a class="p-2 text-dark" href="/#/products">PRODUCTS</a>
            <a class="p-2 text-dark" href="/#/category">CATEGORY</a>
            <a class="p-2 text-dark" href="#">CONTACT</a>

        </nav>
        <a href="">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-search"
                viewBox="0 0 16 16">
                <path
                    d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
            </svg>
        </a>
        `
    }
}
export default Header;