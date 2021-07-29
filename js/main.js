const products = [
    {id: 1, title: 'Notebook Xiaomi', price: 2000, image: 'notebook.jpg'},
    {id: 2, title: 'Mouse Apple', price: 20, image: 'mouse.jpg'},
    {id: 3, title: 'Keyboard Apple', price: 200, image: 'keyboard.jpg'},
    {id: 4, title: 'Gamepad Sony', price: 50, image: 'gamepad.jpg'},
];

const pathToImages = 'img';
const pathToProductsImages = `${pathToImages}/catalogue`;
const productsEl = document.querySelector('.products');

const renderProduct = (product) => {
    return `
    <div class="item">
        <img class="item_img" src="${pathToProductsImages}/${product.image}" alt="${product.title}>
        <p class="itemName">${product.title}</p>
        <p class="itemPrice">$${product.price}</p>
        <button class="btn-cart" type="button">Add to Cart</button>
    </div>
    `
};
const renderPage = list => {
    const productsList = list.map(item => renderProduct(item)).join('');
    productsEl.insertAdjacentHTML('afterbegin', productsList);
};

renderPage(products);