<template>
  <v-container>
    <div class="header">
      <div @click="goBack" class="goBack">
        <v-icon size="28">chevron_left</v-icon>
      </div>
      <p class="menu_title">주문하기</p>
    </div>

    <v-row class="white mt-6 pl-10 pr-10">
      <v-col cols="12" class="d-flex P_12" style="padding: 20px 0 0;"></v-col>
      <v-col cols="12" class="d-flex justify-space-between" style="padding: 0;" v-for="item in cartItems" :key="item.id">
        <v-col cols="4">
          <v-img :src="item.img" :alt="item.name" style="width: 110px;" class="rounded-xl ml-2"></v-img>
        </v-col>
        <v-col cols="8" class="pa-5">
          <div class="d-flex justify-space-between P_16">
            <p>{{ item.name }}</p>
            <p>{{ item.totalPrice.toLocaleString() }}원</p>
          </div>
          <p class="P_12 text_gray300">{{ item.options.IceHot }}</p>
          <p class="text-end mt-8">{{ item.totalPrice.toLocaleString() }}원</p>
        </v-col>
      </v-col>
      <v-col cols="12" style="padding: 0;">
        <v-divider></v-divider>
      </v-col>
      <v-col cols="12" class="d-flex justify-space-between P_24 pa-4 font-weight-bold">
        <p class="text_brown">결제 금액</p>
        <p class="text_pink">{{ cartTotalPrice.toLocaleString() }}원</p>
      </v-col>
    </v-row>
    <div class="text-center mt-5">
      <v-btn @click="showPaymentCompleteModal" style="width: 210px;" large>결제하기</v-btn>
      <v-btn color="grey lighten-1" class="pa-3 ma-2" style="width: 210px;" large>영수증 보기</v-btn>
    </div>

    <!-- 모달 창 -->
    <Modal
      :isOpen="isPaymentCompleteModalOpen"
      @update:isOpen="val => isPaymentCompleteModalOpen = val"
      closeText="확인"
      buttonType="default"
    >
      결제완료
    </Modal>
  </v-container>
</template>

<script>
import Modal from '@/components/Modal.vue';

export default {
  components: {
    Modal
  },
  data() {
    return {
      isPaymentCompleteModalOpen: false,
      cartItems: [],
      cartTotalPrice: 0
    };
  },
  created() {
    this.loadCartItems();
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
    loadCartItems() {
      const savedCartItems = localStorage.getItem('cartItems');
      if (savedCartItems) {
        this.cartItems = JSON.parse(savedCartItems);
        this.cartTotalPrice = this.cartItems.reduce((total, item) => total + item.totalPrice, 0);
      }
    },
    showPaymentCompleteModal() {
      this.isPaymentCompleteModalOpen = true; // 모달 창 열기
      // 1초 후에 페이지 이동
      setTimeout(() => {
        this.$router.push('/OrderHistory'); // 주문 내역 페이지로 이동
      }, 1000);
    }
  }
};
</script>

<style scoped>
/* Existing styles */
</style>
