<template>
  <div>
<router-link v-if="isLoggedIn" :to="{ path: '/cart' }" class="cart-link">
      <v-badge v-if="cartQuantity > 0" :content="cartQuantity" color="red" class="cart-badge">
        <v-icon class="default-icon">shopping_cart</v-icon>
      </v-badge>
      <v-icon v-else class="default-icon">shopping_cart</v-icon>
    </router-link>
    <v-icon v-else @click="redirectToLogin" class="default-icon">shopping_cart</v-icon>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters(['cartQuantity']),
    isLoggedIn() {
      return !!localStorage.getItem('loggedInUser');
    }
  },
  methods: {
    redirectToLogin() {
      this.$router.push('/login');
    }
  }
};
</script>

<style scoped>
.cart-link {
  cursor: pointer;
}
</style>
