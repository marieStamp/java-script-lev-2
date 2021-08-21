Vue.component('filter-el', {
    data(){
      return {
          userSearch: ''
      }
    },
    template: 
            `<form action="#" class="header__search" @submit.prevent="$parent.$refs.products.filter(userSearch)">
                <input type="text" class="search__browse"  v-model="userSearch">
                <button type="submit"><i class="fas fa-search"></i></button>
                    </input>
                    </form>`
})