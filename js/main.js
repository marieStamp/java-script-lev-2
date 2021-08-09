const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

const app = new Vue({
    el: '#app',
    data: {
        catalogUrl: '/catalogData.json',
        cartUrl: '/getBasket.json',
        products: [],
        cartItems: [],
        filtered: [],
        userSearch: ''
    },
    methods: {
        getJson(url){
            return fetch(url)
                .then(result => result.json())
                .catch(error => {
                    console.log(error);
                })
        },

        filter(){
            let regexp = new RegExp(this.userSearch, 'i');
            this.filtered =  this.filtered.filter(el => regexp.test(el.product_name));
        }
    },

mounted(){
    this.getJson(`${API + this.catalogUrl}`)
        .then(data => {
            for(let el of data){
                this.products.push(el);
                this.filtered.push(el);
            }
        });
    this.getJson(`getProducts.json`)
         .then(data => {
             for(let el of data){
                 this.products.push(el);
                 this.filtered,push(el);
             }
         });
    this.getJson(`${API + this.cartUrl}`)
         .then(data => {
             for (let el of data.contents){
                 this.cartItems.push(el);
             }
         })
    }
});

// class ProductList {
//     constructor(container = '.products') {
//         this.container = container;
//         this.goods = [];
//         this._getProducts()
//             .then(data => { 
//                 this.goods = [...data];
//                 this.render()
//        });
//     }
    
//     _fetchProducts() {
//         this.goods = [
//             { id: 1, title: 'Notebook Xiaomi', price: 2000, img: 'notebook.jpg' },
//             { id: 2, title: 'Mouse Apple', price: 20, img: 'mouse.jpg' },
//             { id: 3, title: 'Keyboard Apple', price: 200, img: 'keyboard.jpg' },
//             { id: 4, title: 'Gamepad Sony', price: 50, img: 'gamepad.jpg' },
//         ];
//     }

//     _getProducts(){
//         return fetch(`${API}/catalogData.json`)
//             .then(result => result.json())
//             .catch(error => {
//                 console.log(error);
//             })
//     }
//     calcSum(){
//         return this.allProducts.reduce((accum, item) => accum += item.price, 0);
//     }
//     render() {
//         const block = document.querySelector(this.container);
//         for (let product of this.goods) {
//             const productObj = new ProductItem(product);
//             block.insertAdjacentHTML("beforeend", productObj.render());
//         }
//     }
// }

//const pathToProductsImg = 'img/catalogue';

// class ProductItem {
//     constructor(product, img = 'img/catalogue') {
//         this.id = product.id_product;
//         this.title = product.product_name;
//         this.price = product.price;
//         this.img = img;
//     }

//     render() {
//         return `
//         <div class="item">
//             <img class="item_img" src="${this.img}/${this.id}.jpg">
//             <p class="itemName">${this.title}</p>
//             <p class="itemPrice">₽${this.price}</p>
//             <button class="btn-cart" type="button">Add to Cart</button>
//         </div>
//         `
//     };
// }

// let list = new ProductList();

// class Cart {
//     constructor(container = '.dropdown__cart') {
//         this.container = container;
//         this.goods = [];
//         this._getCartItem()
//             .then(data => {
//                 this.goods = [...data.contents];
//                 this.render()
//             });
//     }

//     _getCartItem(){
//         return fetch(`${API}/getBasket.json`)
//             .then(result => result.json())
//             .catch(error => {
//                 console.log(error);
//             })
//     }
//     render() {
//         const block = document.querySelector(this.container);
//         for (let product of this.goods) {
//             const productObj = new CartItem();
//             block.insertAdjacentHTML("beforeend", productObj.renderCartItem(product));
//         }
//     }


    // addItem() { } // метод добавляет товар в корзину 
    // removeItem() { } // метод удаляет товар из корзины 
    // saveCart() { } // метод сохраняет данные в корзине 
    // clearCart() { } // метод удаляет все данные из корзины 
    // getById() { } // метод ищет элемент корзины по id товара 
    // makeOrder() { } // метод отправляет заказ в обработку 
    // renderCart() { } // метод отрисовывает все товары корзины

    // getSum() {    // метод рассчитывает общую стоимость товаров в корзине
    //     let s = 0;
    //     this.goods.forEach(item => {
    //         s += item.price;
    //     })
    // }
// }

// class CartItem {

//     renderCartItem(product) { 
//         return `<div class="cartRow">
//                     <div>${product.product_name}</div>
//                     <div>шт.${product.quantity}</div>
//                     <div>₽${product.price}</div>  
//                     <div class="dropdown__cart_action">
//                             <a href="#"><i class="fas fa-times-circle" aria-hidden="true"></i></a>
//                         </div>
//                  </div>
//         `
//     } 
// }

// new Cart();