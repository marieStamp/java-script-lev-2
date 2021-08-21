Vue.component('cart', {
    data(){
      return {
          cartItems: [],
      }
    },
    mounted(){
        this.$parent.getJson(`/api/cart`)
            .then(data => {
                for (let item of data.contents){
                    item.imgPath = `img/catalogue/${item.id_product}.png`;
                    this.$data.cartItems.push(item);
                }
            });
    },

    methods: {
        addProduct(item){
            let find = this.cartItems.find(el => el.id_product === item.id_product);
            if(find){
                this.$parent.putJson(`/api/cart/${find.id_product}`, {quantity: 1})
                    .then(data => {
                        if(data.result === 1){
                            find.quantity++
                        }
                    })
            } else {
                const prod = Object.assign({quantity: 1}, item);
                item.imgPath = `img/catalogue/${item.id_product}.png`;
                this.$parent.postJson(`/api/cart`, prod)
                    .then(data => {
                        if(data.result === 1){
                            this.cartItems.push(prod)
                        }
                    })
            }

        },
        remove(item){
            this.$parent.getJson(`${API}/addToBasket.json`)
                .then(data => {
                    if (data.result === 1) {
                        if(item.quantity>1){
                            item.quantity--;
                        } else {
                            this.cartItems.splice(this.cartItems.indexOf(item), 1);
                        }
                    }
                })
        },
     
        cartCount() {
            return this.cartItems.reduce((summ, item) => summ + item.quantity, 0);
          },
          cartSumm() {
            return this.cartItems.reduce((summ, item) => summ + item.quantity*item.price, 0);
          }
    },
    
    template: `
    
    <div class="dropdown__cart">
        <p class="cart_empty" v-if='!cartItems.length'>Cart is empty</p>
        <cart-item v-for ="item of cartItems" :key="item.id_product" :img="item.imgPath" :cart-item="item" :cart-count = "cartCount"
                 @remove="remove" @add-product="addProduct">
                </cart-item>
                <p class="cart_total" v-if='!cartItems.length'></p>
                <p class="cart_total" v-else='cartItems.length > 0'>Total: {{ cartSumm() }} $</p>        
    </div>
`
    
});

Vue.component('cart-item', {
    props: ['img', 'cartItem'],
    template: 
    `
        <div class="cart-item">
                            <img class="cart_img" :src="img">
                            <div>{{ cartItem.product_name }}</div>
                            <p>{{ cartItem.quantity }} pc.</p>
                <button class="btnInCart" @click="$emit('add-product', cartItem)"> + </button>
                        
                            <div>{{ cartItem.price }} $</div>
                            <div class="product-price">Subtotal: {{ cartItem.quantity*cartItem.price }} $</div>
                            <div class="cartDel"><button class="del-btn" @click="$emit('remove', cartItem)">&times;</button></div>
                            
                </div>
    `
});

