Vue.component('products', {
    data(){
        return {
            catalogUrl: '/catalogData.json',
            filtered: [],
            products: []
        }
    },
     mounted(){
         this.$parent.getJson(`/api/products`)
             .then(data => {
                 for (let item of data){
                     item.imgPath = `img/catalogue/${item.id_product}.png`;
                     this.$data.products.push(item);
                     this.$data.filtered.push(item);
                 }
             });
     },
     methods: {
         filter(userSearch){
             let regexp = new RegExp(userSearch, 'i');
             this.filtered = this.products.filter(el => regexp.test(el.product_name));
         }
     },
    template: `<div class="catalogue">
                 <product v-for="item of filtered" 
                 :key="item.id_product" 
                 :img = "item.imgPath"
                 :product="item"
                 @add-product="$parent.$refs.cart.addProduct"></product>
                </div>`
 });
 Vue.component('product', {
     props: ['product', 'img'],
     template: 
     `<div class="item">
     <a class="item-link" href="#">
         <img class="item__photo" :src="img">
         <div class="item__info">
             <p class="item__info_name">{{product.product_name}}</p>
             <p class="item__info_price">$ {{product.price}}</p>
         </div>
     </a>
     <div class="addCart">
         <a class="addCart-link" href="#" @click="$emit('add-product', product)">
             <p class="addCart_text">Add to Cart</p>
         </a>
     </div>
 </div>`
 })