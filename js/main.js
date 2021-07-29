class ProductList {
    constructor(container = '.products') {
        this.container = container;
        this.goods = [];
        this._fetchProducts();
        this.render();
    }
    _fetchProducts() {
        this.goods = [
            { id: 1, title: 'Notebook Xiaomi', price: 2000, img: 'notebook.jpg' },
            { id: 2, title: 'Mouse Apple', price: 20, img: 'mouse.jpg' },
            { id: 3, title: 'Keyboard Apple', price: 200, img: 'keyboard.jpg' },
            { id: 4, title: 'Gamepad Sony', price: 50, img: 'gamepad.jpg' },
        ];
    }

    render() {
        const block = document.querySelector(this.container);
        for (let product of this.goods) {
            const item = new ProductItem(product);
            block.insertAdjacentHTML("beforeend", item.render());
        }
    }
}

const pathToProductsImg = 'img/catalogue';

class ProductItem {
    constructor(product) {
        this.id = product.id;
        this.title = product.title;
        this.price = product.price;
        this.img = product.img;
    }

    render() {
        return `
        <div class="item">
            <img class="item_img" src="${pathToProductsImg}/${this.img}">
            <p class="itemName">${this.title}</p>
            <p class="itemPrice">$${this.price}</p>
            <button class="btn-cart" type="button">Add to Cart</button>
        </div>
        `
    };
}

let list = new ProductList();

class Cart {

    addItem() { } // метод добавляет товар в корзину 
    removeItem() { } // метод удаляет товар из корзины 
    saveCart() { } // метод сохраняет данные в корзине 
    clearCart() { } // метод удаляет все данные из корзины 
    getById() { } // метод ищет элемент корзины по id товара 
    makeOrder() { } // метод отправляет заказ в обработку 
    renderCart() { } // метод отрисовывает все товары корзины

    getSum() {    // метод рассчитывает общую стоимостль товаров в корзине
        let s = 0;
        this.goods.forEach(item => {
            s += item.price;
        })
    }
}

class CartItem {

    renderCartItem() { } // метод отрисовывает товар корзины
}
