import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    cart: []  // 장바구니 아이템 목록
  },
  mutations: {
    // 장바구니 아이템 추가
    ADD_TO_CART(state, item) {
      const existingItem = state.cart.find(cartItem => cartItem.id === item.id);
      if (existingItem) {
        existingItem.quantity += item.quantity;
        existingItem.totalPrice += item.totalPrice;
      } else {
        state.cart.push(item);
      }
    },
    // 장바구니 초기화
    CLEAR_CART(state) {
      state.cart = [];
    }
  },
  actions: {
    addToCart({ commit }, item) {
      commit('ADD_TO_CART', item);
    },
    clearCart({ commit }) {
      commit('CLEAR_CART');
    }
  },
  getters: {
    cartItems: state => state.cart,
    cartQuantity: state => state.cart.reduce((sum, item) => sum + item.quantity, 0),
    cartTotalPrice: state => state.cart.reduce((sum, item) => sum + item.totalPrice, 0)
  }
});
