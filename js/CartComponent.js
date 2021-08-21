Vue.component('cart', {
    props: ['cartItems'],
    template: `
        <div class="dropdown__cart">
            <p class="cart_empty" v-if='!cartItems.length'>Корзина пуста</p>
            <cart-item v-for="item of cartItems" :key="item.id_product" :cart-item="item">
            </cart-item>
        </div>
    `
});

Vue.component('cart-item', {
    props: ['cartItem'],
    template: `
                <div class="cart-item">
                            <div>{{ cartItem.product_name }}</div>
                            <div class="cartRow_quantity">{{ cartItem.quantity }} шт</div>
                            <div>{{ cartItem.price }} ₽</div>
                            <div class="product-price">Total: {{ cartItem.quantity*cartItem.price }} ₽</div>
                            <div><button class="del-btn" @click="$parent.$emit('remove', cartItem)">&times;</button></div>
                </div>
    `
})