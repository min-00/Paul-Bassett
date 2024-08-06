<template>
    <router-link :to="{ path: '/cart' }" class="cart-link">
        <v-badge v-if="cartQuantity > 0" :content="cartQuantity" color="red" class="cart-badge">
        <v-icon class="default-icon">shopping_cart</v-icon>
        </v-badge>
        <v-icon v-else class="default-icon">shopping_cart</v-icon>
    </router-link>
    </template>

    <script>
    import { mapGetters } from 'vuex';

    export default {
    computed: {
        ...mapGetters(['cartQuantity'])
    }
};
</script>

<style scoped>

</style>
