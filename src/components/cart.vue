<template>
  <div>
    <div class="header">
      <div @click="goBack" class="goBack">
        <v-icon size="28">chevron_left</v-icon>
      </div>
      <p class="menu_title">장바구니</p>
      <div @click="clearCart" class="delete">
        <v-icon size="28">delete</v-icon>
      </div>
    </div>

    <div class="select_area">
      <div class="select_area_left">
        <span class="card_title">
          <v-icon>location_on</v-icon> 강남점
        </span>
        <span class="card_subtitle">주소주소주소</span>
      </div>
      <v-btn class="change_button">변경</v-btn>
    </div>
    <h3> 담긴수량 ( {{ cartQuantity }} )</h3>
        <v-row class="white mt-6 pl-10 pr-10">
      <v-col cols="12" class="d-flex P_12" style="padding: 20px 0 0;">
        <p></p>
      </v-col>
      <v-col cols="12" class="d-flex justify-space-between" style="padding: 0;" v-for="item in cartItems" :key="item.id">
        <v-col cols="4">
          <v-img :src="item.img" :alt="item.name" style="width: 110px;" class="rounded-xl ml-2"></v-img>
        </v-col>
        <v-col cols="8" class="pa-5">
          <div class="d-flex justify-space-between P_16">
            <p>{{ item.name }}</p>
            <p> 수량 {{ item.quantity  }}</p>

            <p v-if="item.options.extraShot">샷추가</p>

                <p> {{ item.options.shotQuantity }} </p>

            <p>{{ item.totalPrice.toLocaleString() }}원</p>
          </div>
          <!-- <div class="d-flex justify-space-between P_12 text_gray300">
            <p v-if="item.options.extraShot">샷추가</p>
            <p v-if="item.options.extraShot">+1000원</p>
          </div> -->
          <p>옵션 확인</p>
                <div v-for="(value, key) in getFilteredOptions(item.id)" :key="key">
                  <p class="P_12 text_gray300">{{ formatOptionKey(key) }}: {{ value }}</p>
                  <p>  </p>
                </div>

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
      <v-btn @click="handleOrderClick" color="black" class="text_white pa-4 ma-2" style="width: 210px;" large>주문하기</v-btn>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import itemlist from '@/datasources/itemlist.js'; // 데이터 가져오기

export default {
  computed: {
    ...mapGetters(['cartItems', 'cartQuantity', 'cartTotalPrice']),
    formatOptionKey() {
      const formattedKeys = {
        IceHot: '온도',
        size: '사이즈',
        packaging: '포장',
        cupType: '컵 타입',
        extraShot: '샷 추가',
        shotQuantity: '샷 수량',
        iceCreamTopping: '아이스크림 토핑',
        milkType: '우유 종류',
        sugar: '설탕',
        HotLevel: '열기',
        waterAmount: '물 양',
        powder: '파우더',
        cream: '크림'
      };
      return (key) => formattedKeys[key] || key;
    }
  },
  methods: {
    ...mapActions(['clearCart', 'removeFromCart']),
    goBack() {
      this.$router.go(-1);
    },
    getFilteredOptions(itemId) {
      const item = [...itemlist.coffeeList, ...itemlist.LetteList].find(i => i.Id === itemId);
      if (!item) return {};

      const allOptions = { ...item.mainOptions, ...item.personalOptions };
      const cartItem = this.cartItems.find(cartItem => cartItem.id === itemId);

      return Object.keys(allOptions).reduce((result, key) => {
        if (allOptions[key] === true) {
          result[key] = cartItem.options[key] || '선택 안 함';
        }
        return result;
      }, {});
    },
    handleOrderClick() {
      localStorage.setItem('cartItems', JSON.stringify(this.cartItems));
      this.$router.push('/OrderInfo');
    }
  }
}
</script>

<style>
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
  border-bottom: 1px solid #ddd;
  background: #fff;
}

.goBack, .delete {
  cursor: pointer;
}

.menu_title {
  font-size: 18px;
  font-weight: bold;
}

.select_area {
  display: flex;
  align-items: center;
  padding: 16px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #fff;
}

.select_area_left {
  display: flex;
  flex-direction: column;
  flex: 1;
}

.card_title {
  font-size: 18px;
  font-weight: bold;
}

.card_subtitle {
  font-size: 14px;
  color: #666;
}

.change_button {
  margin-left: auto;
  background: #fff !important;
  color: #000;
  border: 1px solid #000;
  border-radius: 20px;
  height: 32px;
  width: 80px;
  text-transform: none;
}

.change_button:hover {
  background-color: #f0f0f0;
}

.white {
  background-color: #fff;
}

.img-rounded {
  border-radius: 20px;
  border: 1px solid #fbfbfb;
  width: 110px; 
  height: 110px; 
}

.P_12 {
  font-size: 12px;
}

.text_gray300 {
  color: #a3a3a3;
}

.text_brown {
  color: #8d5a3e;
}

.text_pink {
  color: #f06292;
}

.P_16 {
  font-size: 16px;
}

.P_24 {
  padding: 24px;
}

.font-weight-bold {
  font-weight: bold;
}
</style>