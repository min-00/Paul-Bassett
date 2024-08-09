<template>
  <div v-if="item">
  <v-container>
<div class="header">
    <div @click="goBack" class="goBack">
      <v-icon size="28">
        chevron_left
      </v-icon>
    </div>
    <p class="menu_title">메뉴상세</p>
  <div class="right_icons">
  <div class="favorite_btn" @click="handleFavoriteClick">
      <v-icon size="24" :color="isFavorite ? 'red' : '#000000'">
        {{ isFavorite ? 'mdi-heart' : 'mdi-heart-outline' }}
      </v-icon>
    </div>

    <!-- 모달 컴포넌트들 -->
  <Modal
      :isOpen="showLoginModal"
      @update:isOpen="val => showLoginModal = val"
      closeText="로그인"
      buttonType="login"
      @redirectToLogin="handleLoginRedirect"
    >
      로그인 후 사용할 수 있습니다.
    </Modal>
    <Modal
      :isOpen="showAddFavoriteModal"
      @update:isOpen="val => showAddFavoriteModal = val"
      closeText="확인"
      buttonType="default"
    >
      나만의 메뉴로 등록되었습니다.
    </Modal>

    <Modal
      :isOpen="showRemoveFavoriteModal"
      @update:isOpen="val => showRemoveFavoriteModal = val"
      closeText="확인"
      buttonType="default"
    >
      나만의 메뉴에서 해제되었습니다.
    </Modal>

      <CartIcon />
    </div>

  </div>

    <v-img :src="currentImageUrl" alt="상품 이미지" width="100%" height="300"></v-img>

    <div class="detail_info">
      <h2>{{ item.Title }}</h2>
      <p>{{ item.Info }}</p>
      <span> {{ item.BasePrice }} 원 </span>
    </div>

    <div class="bar"></div>
    
    <div class="main_options">
    <!-- 아이스/핫 옵션 -->
    <div v-if="item.mainOptions?.IceHot">
      <div class="option">
        <p>종류</p>
        <div class="btn_group">
          <button
            :class="['btn_left', { 'btn_active_red': selectedOptions.IceHot === 'hot' }]"
            @click="updateOption('IceHot', 'hot')"
          >
            HOT
          </button>
          <button
            :class="['btn_right', { 'btn_active': selectedOptions.IceHot === 'ice' }]"
            @click="updateOption('IceHot', 'ice')"
          >
            ICE
          </button>
        </div>
      </div>
    </div>

    <!-- 사이즈 옵션 -->
    <div v-if="item.mainOptions?.size">
      <div class="option">
        <p>사이즈</p>
        <div class="btn_group">
          <button
            :class="['btn_left', { 'btn_active_black': selectedOptions.size === 'standard' }]"
            @click="updateOption('size', 'standard')"
          >
            {{ CommonOption.size.find(option => option.value === 'standard').label }}
          </button>
          <button
            :class="['btn_right', { 'btn_active_black': selectedOptions.size === 'grand' }]"
            @click="updateOption('size', 'grand')"
          >
            {{ CommonOption.size.find(option => option.value === 'grand').label }}
          </button>
        </div>
      </div>
    </div>

    <!-- 포장 옵션 -->
    <div v-if="item.mainOptions?.packaging">
      <div class="option">
        <p>포장</p>
        <div class="btn_group">
          <button
            :class="['btn_left', { 'btn_active_black': selectedOptions.packaging === '매장에서' }]"
            @click="updateOption('packaging', '매장에서')"
          >
            매장에서
          </button>
          <button
            :class="['btn_right', { 'btn_active_black': selectedOptions.packaging === '포장' }]"
            @click="updateOption('packaging', '포장')"
          >
            포장
          </button>
        </div>
      </div>
    </div>

    <!-- 잔 옵션 -->
    <div v-if="item.mainOptions?.cupType">
      <div class="option">
        <p>잔</p>
        <div class="btn_group">
          <button
            :class="['btn_left', { 'btn_active_black': selectedOptions.cupType === '매장용' }]"
            @click="updateOption('cupType', '매장용')"
          >
            매장용
          </button>
          <button
            :class="['btn_mid', { 'btn_active_black': selectedOptions.cupType === '일회용' }]"
            @click="updateOption('cupType', '일회용')"
          >
            일회용
          </button>
          <button
            :class="['btn_right', { 'btn_active_black': selectedOptions.cupType === '개인컵' }]"
            @click="updateOption('cupType', '개인컵')"
          >
            개인컵
          </button>
        </div>
      </div>

      <p class="notice" v-if="selectedOptions.cupType === '매장용'">
        매장 내 취식 가능한 매장 전용컵을 선택하셨습니다.
      </p>
    </div>

</div>


  <div class="bar"></div>
    <div v-if="item.personalOptions"  class="personal_option" @click="showBottomSheet = true">
      <p>퍼스널 옵션 추가</p>
      <v-icon> keyboard_arrow_right </v-icon>
    
    </div>
    <!-- <v-divider></v-divider> -->


    <!-- 퍼스널 옵션 선택 영역 -->
<v-bottom-sheet v-model="showBottomSheet" class="bottom-sheet" >
    <v-sheet class="rounded-top" width="100%" elevation="5">
      <div class="bottom-sheet-header">
        <span>퍼스널 옵션</span>
        <div @click="showBottomSheet = false">
          <v-icon>mdi-close</v-icon>
        </div>
      </div>
      <v-divider></v-divider>
      <v-expansion-panels>
      <v-expansion-panel v-if="item.personalOptions?.extraShot">
      <v-expansion-panel-header>
        샷 추가
      </v-expansion-panel-header>
      <v-expansion-panel-content>
        <v-radio-group v-model="selectedOptions.extraShot" @change="onExtraShotChange">
          <v-radio
            label="선택 안 함"
            value="none"
          ></v-radio>
          <v-radio
            value="extraShot"
          >
            <template v-slot:label>
              <div class="extra-shot-container">
                <span>샷 추가 + 1,000원</span>
                <div class="quantity_control">
                  <v-btn @click="decreaseShot" class="btn_quantity" small>-</v-btn>
                  <span class="quantity">{{ selectedOptions.shotQuantity }}</span>
                  <v-btn @click="increaseShot" class="btn_quantity" small>+</v-btn>
                </div>
              </div>
            </template>
          </v-radio>
          <v-radio
            label="연하게 선택"
            value="lessShot"
          ></v-radio>
        </v-radio-group>
      </v-expansion-panel-content>
      <div class="bar"></div>
      </v-expansion-panel>
  <!-- 아이스크림 토핑 옵션 -->
<v-expansion-panel v-if="item.personalOptions?.IceCreamtopping">
  <v-expansion-panel-header>
    아이스크림 토핑
  </v-expansion-panel-header>
  <v-expansion-panel-content>
    <v-radio-group v-model="selectedIceCreamTopping" @change="updateBasePrice">
      <v-radio
        v-for="topping in CommonOption.IceCreamtopping"
        :key="topping.value"
        :label="topping.price ? `${topping.label} + ${topping.price.toLocaleString()}원` : topping.label"
        :value="topping.value"
      ></v-radio>
    </v-radio-group>
  </v-expansion-panel-content>
  <div class="bar"></div>
</v-expansion-panel>

<v-expansion-panel v-if="item.personalOptions?.cream">
  <v-expansion-panel-header>휘핑크림 추가</v-expansion-panel-header>
  <v-expansion-panel-content>
    <v-radio-group v-model="selectedCream">
      <v-radio
        v-for="cream in CommonOption.cream"
        :key="cream.value"
        :label="cream.label"
        :value="cream.value"
      ></v-radio>
    </v-radio-group>
  </v-expansion-panel-content>
  <div class="bar"></div>
</v-expansion-panel>
        <!-- 우유 변경 옵션 -->
  <v-expansion-panel v-if="item.personalOptions?.milkType">
    <v-expansion-panel-header>우유 변경</v-expansion-panel-header>
    <v-expansion-panel-content>
      <v-radio-group v-model="selectedMilkType">
        <v-radio
          v-for="milk in CommonOption.milkType"
          :key="milk.value"
          :label="milk.label"
          :value="milk.value"
        ></v-radio>
      </v-radio-group>
    </v-expansion-panel-content>
    <div class="bar"></div>
  </v-expansion-panel>

  <!-- 당도 옵션 -->
  <v-expansion-panel v-if="item.personalOptions?.sugar">
    <v-expansion-panel-header>당도</v-expansion-panel-header>
    <v-expansion-panel-content>
      <v-radio-group v-model="selectedSugarLevel">
        <v-radio
          v-for="sugar in CommonOption.sugar"
          :key="sugar.value"
          :label="sugar.label"
          :value="sugar.value"
        ></v-radio>
      </v-radio-group>
    </v-expansion-panel-content>
    <div class="bar"></div>
  </v-expansion-panel>

  <!-- 뜨겁게 옵션 -->
  <v-expansion-panel v-if="item.personalOptions?.HotLevel">
    <v-expansion-panel-header>뜨겁게</v-expansion-panel-header>
    <v-expansion-panel-content>
      <v-radio-group v-model="selectedHotLevel">
        <v-radio
          v-for="hotLevel in CommonOption.HotLevel"
          :key="hotLevel.value"
          :label="hotLevel.label"
          :value="hotLevel.value"
        ></v-radio>
      </v-radio-group>
    </v-expansion-panel-content>
    <div class="bar"></div>
  </v-expansion-panel>
  <!-- Water Amount -->
<v-expansion-panel v-if="item.personalOptions?.waterAmount">
  <v-expansion-panel-header>물의 양</v-expansion-panel-header>
  <v-expansion-panel-content>
    <v-radio-group v-model="selectedWaterAmount">
      <v-radio
        v-for="option in CommonOption.waterAmount"
        :key="option.value"
        :label="option.label"
        :value="option.value"
      ></v-radio>
    </v-radio-group>
  </v-expansion-panel-content>
  <div class="bar"></div>
</v-expansion-panel>

<!-- Powder -->
<v-expansion-panel v-if="item.personalOptions?.powder">
  <v-expansion-panel-header>파우더</v-expansion-panel-header>
  <v-expansion-panel-content>
    <v-radio-group v-model="selectedPowder">
      <v-radio
        v-for="option in CommonOption.powder"
        :key="option.value"
        :label="option.label"
        :value="option.value"
      ></v-radio>
    </v-radio-group>
  </v-expansion-panel-content>
</v-expansion-panel>

<!-- Cream -->
<v-expansion-panel v-if="item.personalOptions?.cream">
  <v-expansion-panel-header>
    휘핑크림 추가
  </v-expansion-panel-header>
  <v-expansion-panel-content>
    <v-radio-group v-model="selectedCream" @change="updateBasePrice">
      <v-radio
        v-for="option in CommonOption.cream"
        :key="option.value"
        :label="option.label"
        :value="option.value"
      ></v-radio>
    </v-radio-group>
  </v-expansion-panel-content>
  <div class="bar"></div>
</v-expansion-panel>

      </v-expansion-panels>
      <!-- <div class="total_price_box">
        <span class="final_price"> {{ totalPrice.toLocaleString() }} 원</span>
      </div> -->
    <div class="order_section_p" >
      <div class="order_sec_top">
        <div class="quantity_control">
          <button @click="decreaseQuantity" class="quantity_btn">-</button>
          <span class="quantity">{{ quantity }}</span>
          <button @click="increaseQuantity" class="quantity_btn">+</button>
        </div>
        <span class="final_price"> {{ totalPrice }} 원</span>
      </div>
      
      
    </div>
      
    </v-sheet>
  </v-bottom-sheet>

    <div class="order_section">
      <div class="order_sec_top">
        <div class="quantity_control">
          <button @click="decreaseQuantity" class="quantity_btn">-</button>
          <span class="quantity">{{ quantity }}</span>
          <button @click="increaseQuantity" class="quantity_btn">+</button>
        </div>
        <span class="final_price">{{ totalPrice }} 원</span>
      </div>

  <div class="order_sec_bot">
      <button @click="handleAddToCart" class="order-btn">담기</button>

    <!-- 장바구니에 추가됨 모달 -->
    <Modal
      :isOpen="showAddToCartModal"
      @update:isOpen="showAddToCartModal = $event"
      closeText="확인"
    >
      장바구니에 추가되었습니다.
    </Modal>

    <button @click="handleOrderNow" class="order-now-btn">바로 주문하기</button>
      </div>
    </div>

    
  </v-container>
</div>
</template>
<script>
import { mapActions } from 'vuex';
import CartIcon from '@/components/Carticon';
import { CommonOption } from '@/datasources/CommonOption';
import itemlist from '@/datasources/itemlist.js';
import Modal from '@/components/Modal.vue';

export default {
  name: "MenuDetail",
  components: {
    CartIcon,
    Modal,
  },
  data() {
    return {
      item: null,
      CommonOption,
      // 모달창
      showLoginModal: false,
      showAddFavoriteModal: false,
      showRemoveFavoriteModal: false,
      showAddToCartModal: false,
      isFavorite: false,
      showBottomSheet: false,
      
      selectedOptions: {
        IceHot: 'hot', // 기본값 설정
        size: 'standard',
        packaging: '매장에서',
        cupType: '매장용',
        extraShot: 'none',
        shotQuantity: 0,
        iceCreamTopping: 'none',
        milkType: 'normal', 
        sugar: 'normal',
        HotLevel: 'normal',
        waterAmount: 'normal',
        powder: 'normal',
        cream: 'normal'
      },
      quantity: 1, // 기본 수량 
    };
  },
  created() {
    const id = parseInt(this.$route.params.id);
    const allItems = [
      ...itemlist.coffeeList,
      ...itemlist.LetteList,
      ...itemlist.EspressoList,
      ...itemlist.FrappeList,
      ...itemlist.AdeList,
      ...itemlist.yogurtList,
      ...itemlist.ChocolateList,
      ...itemlist.TeaList,
      ...itemlist.bakeryList,
      ...itemlist.SandwichList,
      ...itemlist.CakeList,
      ...itemlist.NataList,
      ...itemlist.MilkList,
      ...itemlist.BaristaProductList,
      ...itemlist.ProductList
    ];

    this.item = allItems.find(item => item.Id === id); // 해당 ID의 아이템 찾기
  },
  computed: {
    // ...mapGetters(['isLoggedIn', 'cartQuantity']), // isLoggedIn을 computed로 가져와야 한다면 사용
    isLoggedIn() {
      return !!localStorage.getItem('loggedInUser');
    },
    currentImageUrl() {
      if (this.item.imgUrlOption && this.item.imgUrlOption !== this.item.imgUrl) {
        return this.selectedOptions.IceHot === 'hot'
          ? this.item.imgUrlOption.hotImg
          : this.item.imgUrlOption.iceImg;
      } else {
        return this.item.imgUrl;
      }
    },
    totalPrice() {
      let basePrice = parseInt(this.item.BasePrice, 10);

      // 사이즈 변경 가격
      if (this.selectedOptions.size) {
        const sizeOption = this.CommonOption.size.find(option => option.value === this.selectedOptions.size);
        if (sizeOption) {
          basePrice += sizeOption.price;
        }
      }

      // 샷 추가 가격 계산
      if (this.selectedOptions.extraShot === 'extraShot') {
        basePrice += this.CommonOption.extraShot.price * this.selectedOptions.shotQuantity;
      }

      // 아이스크림 토핑 추가 가격
      if (this.selectedOptions.iceCreamTopping && this.selectedOptions.iceCreamTopping !== 'none') {
        const toppingOption = this.CommonOption.IceCreamtopping.find(option => option.value === this.selectedOptions.iceCreamTopping);
        if (toppingOption) {
          basePrice += toppingOption.price;
        }
      }

      return basePrice * this.quantity; // 총 가격에 수량을 곱한 값 반환
    },
  },
  methods: {
    ...mapActions([ 'addToCart']),
    handleFavoriteClick() {
      if (!this.isLoggedIn) {
        this.showLoginModal = true; // 로그인 필요 모달 띄우기
        return;
      }

      // 로그인 상태일 때 처리 로직
      this.isFavorite = !this.isFavorite;

      if (this.isFavorite) {
        this.showAddFavoriteModal = true;
      } else {
        this.showRemoveFavoriteModal = true;
      }
    },
    handleLoginRedirect() {
      this.$router.push('/Login');
    },
    handleAddToCart() {
      if (!this.isLoggedIn) {
        this.showLoginModal = true; // 로그인 필요 모달 띄우기
        return;
      }
      // 장바구니에 아이템 추가
      this.addToCart({
        id: this.item.Id,
        name: this.item.Title,
        quantity: this.quantity,
        totalPrice: this.totalPrice,
        img: this.currentImageUrl,
        options: this.selectedOptions
      });

      this.showAddToCartModal = true; // 장바구니에 추가됨 모달 띄우기
    },
    
    handleOrderNow() {
      this.$route.push('/OrderInfo');
    },
    goBack() {
      this.$router.go(-1);
    },
    increaseQuantity() {
      this.quantity += 1;
    },
    decreaseQuantity() {
      if (this.quantity > 1) {
        this.quantity -= 1;
      }
    },
    updateOption(optionKey, value) {
      this.selectedOptions[optionKey] = value;
    },
    onExtraShotChange() {
      if (this.selectedOptions.extraShot !== 'extraShot') {
        this.selectedOptions.shotQuantity = 0;
      }
    },
    increaseShot() {
      if (this.selectedOptions.extraShot === 'extraShot') {
        this.selectedOptions.shotQuantity += 1;
      }
    },
    decreaseShot() {
      if (this.selectedOptions.extraShot === 'extraShot' && this.selectedOptions.shotQuantity > 1) {
        this.selectedOptions.shotQuantity -= 1;
      }
    },
    formatOptionKey(key) {
      const formattedKeys = {
        IceHot: '온도',
        size: '사이즈',
        packaging: '포장 종류',
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
      return formattedKeys[key] || key;
    }
  }
}
</script>

<style>

.container {
  margin: 0;
  padding: 0;
  height: 950px;
}

.v-application p{
  margin: 0;
  padding: 0;
}

.v-icon{
  background: transparent;
  border: none;
  /* display: block; */
}
.default-icon{
  color: #000000 !important;
  align-items: center; 
  justify-content: center;
  position: relative; 
}

.favorite-active {
  color: red !important; 
}

.detail_info {
  display: flex;
  flex-direction: column;
  padding: 1em;
  gap: 12px;
  box-sizing: border-box;
}
.detail_info h2{
  font-size: 26px;
  font-weight: 500;
}
.detail_info span {
  font-size: 22px;
  font-weight: 500;
}


.main_options {
  padding: 15px 15px;
  box-sizing: border-box;
  /* margin-top: 1em; */
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.option {
  display: flex;
  align-items: center;
  gap: 15px;
  justify-content: space-between;
}

.btn_group {
  display: flex;
  width: 284px;
  height: 38px;
}

button {
  flex: 1;
  border: 1px solid #ccc;
  background-color: #f5f5f5;
  cursor: pointer;
  transition: background-color 0.3s;
  text-align: center;
  border-radius: 20px; /* 버튼의 모서리 둥글게 */
}

.btn_active_red {
  background-color: red;
  color: white;
}
.btn_active_black {
  background-color: #212121;
  color: white;
}
.btn_active {
  background-color: #007bff;
  color: white;
}
.btn_left {
  border-radius: 5px 0 0 5px;
}
.btn_right {
  border-radius: 0 5px 5px 0;
  }

.inactive {
  background-color: #ffffff;
  color: #000000;
}

.btn_left {
  border-radius: 20px 0 0 20px;
  border-right: none;
}

.btn_mid {
  border-radius: 0;
  border-right: none;
}

.btn_right {
  border-radius: 0 20px 20px 0;
}


.inactive {
  background-color: #ffffff;
  color: #000000;
}

.btn_left {
  border-radius: 20px 0 0 20px;
  border-right: none;
}

.btn_mid {
  border-radius: 0;
  border-right: none;
}

.btn_right {
  border-radius: 0 20px 20px 0;
}


.notice {
  font-size: 12px;
  text-align: right;
  margin-top: 10px !important;
}

.bar{
  width: 100%;
  height: 8px;
  background: #F6F6F6;

}

.order_section {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background: #f5f5f5;
  padding: 1em;
  /* z-index: 1000;  */
}
.order_section_p {
  /* position: fixed;
  bottom: 0;
  left: 0; */
  width: 100%;
  background: #f5f5f5;
  padding: 1em;
  /* z-index: 1000;  */
}

.order_sec_top{
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
}
.order_sec_bot{
  width: 100%;
  display: flex;
  gap: 10px;
  justify-content: space-between;
}


.quantity_control {
  display: flex;
  align-items: center;
}


.quantity_btn {
  width: 24px;
  height: 24px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
  cursor: pointer;
  border: 1px solid #000000;
  font-size: 20px;
}

.final_price{
  font-size: 24px;
  font-weight: 500;
}

.quantity {
  margin: 0 18px;
}

.order-btn {
  padding: 8px 8px;
  background-color: #ffffff;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.order-now-btn {
  padding: 8px 8px;
  background-color: #000000;
  color: #ffffff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}

/*  퍼스널 옵션 */

.personal_option {
    display: flex;
    align-items: center;
    padding: 1em;
    box-sizing: border-box;
    width: 100%;
    height: 58px;
    border-bottom: 8px solid #F6F6F6;
    /* background: #F6F6F6; */
    justify-content: space-between;
}

.rounded-top {
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}

.bottom-sheet-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: none;
  padding: 16px;
}

.theme--light.v-expansion-panels .v-expansion-panel:not(:first-child)::after{
  border: none;
}

.v-expansion-panel::before{
  box-shadow: none;
  border: none;
}

.panel-content {
  /* padding: 16px; */
  background-color: #f5f5f5;
}

.v-expansion-panel-header {
  background-color: #ffffff;
  border: none; /* border 제거 */
  /* padding: 8px; */
  font-size: 16px;
  border-radius: 0;
}

.v-expansion-panel-content {
  /* padding: 16px; */
  border: none;
  border-radius: 0;
}
.extra-shot-container{
  display: flex;
  width: 100%;
  justify-content: space-between;
}

.btn_quantity{
  width: 24px !important;
  height: 24px !important;
  max-width: 24px !important;
  max-height: 24px !important;
  border-radius: 50%;
  background: #ffffff;
  border: 1px solid #333;
}
.v-btn:not(.v-btn--round).v-size--small{
  min-width: 24px;
  width: 24px !important;
  height: 24px !important;
  border-radius: 50%;
  background: #ffffff;
  border: 1px solid #333;
}

.total_price_box{
  widows: 100%;
  padding: 1em;
  text-align: right;
}



</style>
