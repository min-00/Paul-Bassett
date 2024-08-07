<template>
  <div>
    <div class="header">
    <div @click="goBack" class="goBack">
      <v-icon size="28">
        chevron_left
      </v-icon>
    </div>
     <!-- <p class="menu_title">메뉴상세</p> -->
      <p class="menu_title">장바구니 ( {{ cartQuantity }} )</p>
    <div @click="clearCart" class="delete">
      <v-icon size="28">
        delete
      </v-icon>
    </div>
      <v-icon @click="clearCart"></v-icon>
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

    <div class="order_box">
      <div class="order_item_box" v-for="item in cartItems" :key="item.id">
        <div class="menulist_box">
          <v-img class="img-rounded" :src="item.img" contain />
          <div class="menulist_title">
            <p>{{ item.name }}</p>
            <p>수량: {{ item.quantity }}</p>
            <p>가격: {{ item.totalPrice.toLocaleString() }} 원</p>
          </div>
          <!-- 선택 삭제 아이콘 -->
          <!-- <v-icon @click="removeFromCart(item.id)" class="remove-icon">
            mdi-delete
          </v-icon> -->
        </div>

        <v-divider></v-divider>
                  <!-- 아코디언(옵션) -->
          <v-expansion-panels>         
          <v-expansion-panel>
            <v-expansion-panel-header>
              선택된 옵션
            </v-expansion-panel-header>
            <v-expansion-panel-content>

                  <ul v-for="(value, key) in getFilteredOptions(item.id)" :key="key">
                    <li>
                      <h4>{{ formatOptionKey(key) }}: {{ value }}</h4>
                    </li>
                  </ul>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>  
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import itemlist from '@/datasources/itemlist.js'; // 데이터 가져오기

export default {
  data() {
    return {
      selectedWaterAmount: null // 이 속성을 정의합니다
    };
  },
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

      // 장바구니 아이템의 옵션만 필터링하여 반환
      return Object.keys(allOptions).reduce((result, key) => {
        if (allOptions[key] === true) {
          result[key] = cartItem.options[key] || '선택 안 함';
        }
        return result;
      }, {});
    }
  }
};
</script>



<style>

ul li{
  list-style: none;
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

.order_box{
  width: 100%;
  padding: 10px 10px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.order_item_box{
  padding: 10px 10px;
  box-sizing: border-box;
  box-shadow: 0px 1px 4px 0px rgba(0,0,0,0.2);
  border-radius: 20px;
}

.menulist_box {
  display: flex;
  align-items: center;
  gap: 15px;
  padding: 10px 10px;
  box-sizing: border-box;

  width: 200px;
}


.img-rounded {
  border-radius: 20px;
  border: 1px solid #fbfbfb;
  width: 100px; 
  height: 100px; 
}

.menulist_title {
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.menulist_title > p {
  font-size: 16px;
  white-space: nowrap;
}

.total {
  margin-top: 16px;
  text-align: right;
  font-size: 18px;
}
.v-responsive{
  
}

</style>
