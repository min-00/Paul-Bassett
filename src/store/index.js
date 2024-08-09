import Vue from 'vue';
import Vuex from 'vuex';
import modCommon from "./store-mod/common"
import modProvider from "./store-mod/provider"

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    cart: [],  // 장바구니 아이템 목록

    selection: []  // 매장 선택
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
    },

    // 매장 선택
    STORE_SELECTION(state, store) {
      state.selection = [store];
    }

  },
  actions: {
    addToCart({ commit }, item) {
      commit('ADD_TO_CART', item);
    },
    clearCart({ commit }) {
      commit('CLEAR_CART');
    },
    
    storeSelection({ commit }, store) {
      commit('STORE_SELECTION', store);
    }

  },
  getters: {
    cartItems: state => state.cart,
    cartQuantity: state => state.cart.reduce((sum, item) => sum + item.quantity, 0),
    cartTotalPrice: state => state.cart.reduce((sum, item) => sum + item.totalPrice, 0),

    selectedStore: state => state.selection.length > 0 ? state.selection[0] : null
  },
  modules: {
    provider : modProvider,
    common : modCommon
  }
});
