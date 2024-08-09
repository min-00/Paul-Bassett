<template>
  <v-container style="padding: 0;">
    <div class="pa-3">
      <v-select hide-details :items="order_status" prepend-inner-icon="mdi-magnify"></v-select>
    </div>

    <div>
      <v-tabs color="black" grow v-model="tab" class="P_14">
        <v-tabs-slider color="black"></v-tabs-slider>
        <v-tab href="#stores">주문</v-tab>
        <v-tab href="#map">예약</v-tab>
      </v-tabs>
      
      <div class="d-flex align-center">
        <div class="d-flex pa-4 P_14">
          <v-icon class="pr-3">folder_open</v-icon>
          <p class="pr-3">2024.05.09</p>
          <p>2024.05.09</p>
        </div>
        <v-btn class="ml-auto P_14 mr-4" color="grey" outlined rounded>기간 설정</v-btn>
      </div>
  
      <div class="grey lighten-4 pa-6">
        <!-- 주문 목록을 표시 -->
        <v-row cols="8" offset="2" class="white mb-1" v-for="item in orderItems" :key="item.id">
          <v-col cols="3">
            <v-img :src="item.img" :alt="item.name" style="width: 90px;" class="rounded-xl ml-2"></v-img>
          </v-col>
          <v-col cols="9">
            <div class="d-flex justify-space-between">
              <div>
                <p class="P_12 text_gray500">{{ item.shopName }}</p>
                <p class="P_20 font-weight-bold">{{ item.name }}</p>
                <p class="P_12 text_gray300 mt-2">주문 {{ item.orderDate }}</p>
                <p class="P_12 text_gray300">픽업 {{ item.pickupDate || '-' }}</p>
              </div>
              <div class="text-end mr-2">
                <v-chip :color="item.statusColor" dark>{{ item.status }}</v-chip>
                <p class="P_12 text_gray500 mt-5">결제금액</p>
                <p class="P_16 text_pink font-weight-bold">{{ item.totalPrice.toLocaleString() }}원</p>
              </div>
            </div>
          </v-col>
        </v-row>
      </div>
    </div>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      order_status: [
        '주문상태(전체)',
        '주문요청',
        '주문접수',
        '준비완료',
        '수령완료',
        '미수령',
        '결제취소'
      ],
      orderItems: [] // 주문 데이터
    };
  },
  created() {
    this.loadOrderItems();
  },
  methods: {
    loadOrderItems() {
      const savedOrderItems = localStorage.getItem('cartItems');
      if (savedOrderItems) {
        this.orderItems = JSON.parse(savedOrderItems).map(item => ({
          ...item,
          status: '주문요청', // 상태를 정의해야 할 경우 추가
          statusColor: '#EA094B', // 상태에 따라 색상 변경
          orderDate: '2024.07.22 18:09', // 예제 데이터
          pickupDate: '2024.07.22 18:09' // 예제 데이터
        }));
      }
    }
  }
};
</script>
