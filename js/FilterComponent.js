Vue.component('prod-filter', {
    template: `
        <form action="#" class="search-form" @submit.prevent="$root.filter">
            <input type="text" class="search-field" v-model="$root.userSearch">
            <button class="btn-search" type="submit">
                <i class="fas fa-search"></i>
            </button>
        </form>
    `
});