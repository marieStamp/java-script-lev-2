Vue.component('products', {
    props: ['products', 'img'],
    template: `<div class="products">
                 <product v-for="item of products" 
                 :key="item.id_product" 
                 :img="img"
                 :product="item"></product>
                </div>`
 });
 Vue.component('product', {
     props: ['product', 'img'],
     template: `
             <div class="item">
                <img class="item_img" :src="img">
                <p class="itemName">{{ product.product_name }}</p>
                <p class="itemPrice">₽ {{ product.price }}</p>
                <button class="btn-cart" type="button" @click="$parent.$emit('add-product', product)">Add to Cart</button>
            </div>
     `
 })