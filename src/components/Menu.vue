<template>
  <div>
    <div class="header">
      <p class="menu_title">주문하기</p>

      <div class="right_icons">
        <CartIcon />
      </div>
    </div>

    <!-- 상위 탭 컨테이너 -->
    <v-tabs v-model="mainTab" color="black" class="no_padding" background-color="white"
      grow>
      <v-tab>커피</v-tab>
      <v-tab>음료</v-tab>
      <v-tab>푸드</v-tab>
      <v-tab>아이스크림</v-tab>
      <v-tab>상품</v-tab>
    </v-tabs>

    <!-- 상위 탭 컨텐츠 -->
    <v-tabs-items v-model="mainTab">
      <!-- 커피 탭 컨텐츠 -->
      <v-tab-item class="tb_style">
    <v-chip-group v-model="coffeeTab" mandatory>
      <v-chip
      v-for="(tab, index) in coffeeTabs"
      :key="index"
      :value="index"
    >{{ tab }}</v-chip>
        </v-chip-group>

        <v-tabs-items v-model="coffeeTab">
          <v-tab-item>
            <v-list>
              <v-list-item v-for="item in coffeeList" :key="item.Id" 
              @click="goToDetail(item.Id)">
                  <div class="menulist_box">
                      <v-img class="img-rounded" :src="item.imgUrl" contain />
                    <div class="menulist_title">
                      <p>{{ item.Title }}</p>
                      <span>{{ item.BasePrice }} 원</span>
                    </div>
                  </div>
              </v-list-item>
            </v-list>
          </v-tab-item>

          <v-tab-item>
            <v-list>
              <v-list-item v-for="item in letteList" :key="item.Id" @click="goToDetail(item.Id)">
                    <div class="menulist_box">
                      <v-img class="img-rounded" :src="item.imgUrl" contain />
                    <div class="menulist_title">
                      <p>{{ item.Title }}</p>
                      <span>{{ item.BasePrice }} 원</span>
                    </div>
                  </div>
              </v-list-item>
            </v-list>
          </v-tab-item>

          <v-tab-item>
            <v-list>
              <v-list-item v-for="item in espressoList" :key="item.Id" @click="goToDetail(item.Id)">
                  <div class="menulist_box">
                      <v-img class="img-rounded" :src="item.imgUrl" contain />
                    <div class="menulist_title">
                      <p>{{ item.Title }}</p>
                      <span>{{ item.BasePrice }} 원</span>
                    </div>
                  </div>
              </v-list-item>
            </v-list>
          </v-tab-item>
        </v-tabs-items>
      </v-tab-item>

      <!-- 음료 탭 컨텐츠 -->
      <v-tab-item>
        <v-chip-group v-model="beverageTab" mandatory>
          <v-chip dark v-for="(tab, index) in beverageTabs" :key="index" :value="index">{{ tab }}</v-chip>
        </v-chip-group>
        <v-tabs-items v-model="beverageTab">
          <v-tab-item>
            <v-list>
              <v-list-item v-for="item in FrappeList" :key="item.Id"
              @click="goToDetail(item.Id)">
                    <div class="menulist_box">
                      <v-img class="img-rounded" :src="item.imgUrl" contain />
                    <div class="menulist_title">
                      <p>{{ item.Title }}</p>
                      <span>{{ item.BasePrice }} 원</span>
                    </div>
                  </div>
              </v-list-item>
            </v-list>
          </v-tab-item>

          <v-tab-item>
            <v-list>
              <v-list-item v-for="item in AdeList" :key="item.Id"             
              @click="goToDetail(item.Id)">
                    <div class="menulist_box">
                      <v-img class="img-rounded" :src="item.imgUrl" contain />
                    <div class="menulist_title">
                      <p>{{ item.Title }}</p>
                      <span>{{ item.BasePrice }} 원</span>
                    </div>
                  </div>
              </v-list-item>
            </v-list>
          </v-tab-item>

          <v-tab-item>
            <v-list>
              <v-list-item v-for="item in yogurtList" :key="item.Id"
              @click="goToDetail(item.Id)">
                    <div class="menulist_box">
                      <v-img class="img-rounded" :src="item.imgUrl" contain />
                    <div class="menulist_title">
                      <p>{{ item.Title }}</p>
                      <span>{{ item.BasePrice }} 원</span>
                    </div>
                  </div>
              </v-list-item>
            </v-list>
          </v-tab-item>

          <v-tab-item>
            <v-list>
              <v-list-item v-for="item in ChocolateList" :key="item.Id"
              @click="goToDetail(item.Id)">
                    <div class="menulist_box">
                      <v-img class="img-rounded" :src="item.imgUrl" contain />
                    <div class="menulist_title">
                      <p>{{ item.Title }}</p>
                      <span>{{ item.BasePrice }} 원</span>
                    </div>
                  </div>
              </v-list-item>
            </v-list>
          </v-tab-item>

          <v-tab-item>
            <v-list>
              <v-list-item v-for="item in TeaList" :key="item.Id"
              @click="goToDetail(item.Id)">
                    <div class="menulist_box">
                      <v-img class="img-rounded" :src="item.imgUrl" contain />
                    <div class="menulist_title">
                      <p>{{ item.Title }}</p>
                      <span>{{ item.BasePrice }} 원</span>
                    </div>
                  </div>
              </v-list-item>
            </v-list>
          </v-tab-item>
        </v-tabs-items>
      </v-tab-item>

      <!-- 푸드 탭 컨텐츠 -->
      <v-tab-item>
        <v-chip-group v-model="FoodTab" mandatory>
          <v-chip dark v-for="(tab, index) in foodTabs" :key="index"
          
          :value="index">{{ tab }}</v-chip>
        </v-chip-group>

        <v-tabs-items v-model="FoodTab">
          <v-tab-item>
            <v-list>
              <v-list-item v-for="item in bakeryList" :key="item.Id" 
              @click="goToDetail(item.Id)">
                    <div class="menulist_box">
                      <v-img class="img-rounded" :src="item.imgUrl" contain />
                    <div class="menulist_title">
                      <p>{{ item.Title }}</p>
                      <span>{{ item.BasePrice }} 원</span>
                    </div>
                  </div>
              </v-list-item>
            </v-list>
          </v-tab-item>

          <v-tab-item>
            <v-list>
              <v-list-item v-for="item in SandwichList" :key="item.Id"
              @click="goToDetail(item.Id)">
                    <div class="menulist_box">
                      <v-img class="img-rounded" :src="item.imgUrl" contain />
                    <div class="menulist_title">
                      <p>{{ item.Title }}</p>
                      <span>{{ item.BasePrice }} 원</span>
                    </div>
                  </div>
              </v-list-item>
            </v-list>
          </v-tab-item>

          <v-tab-item>
            <v-list>
              <v-list-item v-for="item in CakeList" :key="item.Id"
              @click="goToDetail(item.Id)">
                    <div class="menulist_box">
                      <v-img class="img-rounded" :src="item.imgUrl" contain />
                    <div class="menulist_title">
                      <p>{{ item.Title }}</p>
                      <span>{{ item.BasePrice }} 원</span>
                    </div>
                  </div>
              </v-list-item>
            </v-list>
          </v-tab-item>

          <v-tab-item>
            <v-list>
              <v-list-item v-for="item in NataList" :key="item.Id"
              @click="goToDetail(item.Id)">
                    <div class="menulist_box">
                      <v-img class="img-rounded" :src="item.imgUrl" contain />
                    <div class="menulist_title">
                      <p>{{ item.Title }}</p>
                      <span>{{ item.BasePrice }} 원</span>
                    </div>
                  </div>
              </v-list-item>
            </v-list>
          </v-tab-item>
        </v-tabs-items>
      </v-tab-item>

      <!-- 아이스크림 탭 컨텐츠 -->
      <v-tab-item>
        <v-chip-group v-model="iceCream" mandatory>
          <v-chip dark v-for="(tab, index) in iceCreamTabs" :key="index" :value="index">{{ tab }}</v-chip>
        </v-chip-group>

        <v-tabs-items v-model="iceCream">
          <v-tab-item>
            <v-list>
              <v-list-item v-for="item in MilkList" :key="item.Id"
              @click="goToDetail(item.Id)">
                    <div class="menulist_box">
                      <v-img class="img-rounded" :src="item.imgUrl" contain />
                    <div class="menulist_title">
                      <p>{{ item.Title }}</p>
                      <span>{{ item.BasePrice }} 원</span>
                    </div>
                  </div>
              </v-list-item>
            </v-list>
          </v-tab-item>
        </v-tabs-items>
      </v-tab-item>

      <!-- 상품 탭 컨텐츠 -->
      <v-tab-item>
        <v-chip-group v-model="Product" mandatory>
          <v-chip dark v-for="(tab, index) in productTabs" :key="index" :value="index">{{ tab }}</v-chip>
        </v-chip-group>

        <v-tabs-items v-model="Product">
          <v-tab-item>
            <v-list>
              <v-list-item v-for="item in BaristaProductList" :key="item.Id"
              @click="goToDetail(item.Id)">
                    <div class="menulist_box">
                      <v-img class="img-rounded" :src="item.imgUrl" contain />
                    <div class="menulist_title">
                      <p>{{ item.Title }}</p>
                      <span>{{ item.BasePrice }} 원</span>
                    </div>
                  </div>
              </v-list-item>
            </v-list>
          </v-tab-item>

          <v-tab-item>
            <v-list>
              <v-list-item v-for="item in ProductList" :key="item.Id" 
              @click="goToDetail(item.Id)">
                    <div class="menulist_box">
                      <v-img class="img-rounded" :src="item.imgUrl" contain />
                    <div class="menulist_title">
                      <p>{{ item.Title }}</p>
                      <span>{{ item.BasePrice }} 원</span>
                    </div>
                  </div>
              </v-list-item>
            </v-list>
          </v-tab-item>
        </v-tabs-items>
      </v-tab-item>
    </v-tabs-items>
  </div>
</template>


<script>
import itemlist from '@/datasources/itemlist.js';
import CartIcon from '@/components/Carticon';

export default {
  components: {
    CartIcon
  },
  data() {
    return {

      mainTab: 0,
      coffeeTab: 0,
      beverageTab: 0,
      FoodTab: 0,
      iceCream: 0,
      Product: 0,
      coffeeTabs: ['Coffee', 'Latte', 'Espresso'],
      beverageTabs: ['Frappe', 'Ade', 'Yogurt', 'Chocloate', 'Tea'],
      foodTabs: ['Bakery', 'Sandwich', 'Cake', 'Nata'],
      iceCreamTabs: ['Ice Cream'],
      productTabs: ['Barista', 'Tumbler'],

      coffeeList: itemlist.coffeeList,
      letteList: itemlist.LetteList,
      espressoList: itemlist.EspressoList,
      FrappeList: itemlist.FrappeList,
      AdeList: itemlist.AdeList,
      yogurtList: itemlist.yogurtList,
      ChocolateList: itemlist.ChocolateList,
      TeaList: itemlist.TeaList,
      bakeryList: itemlist.bakeryList,
      SandwichList: itemlist.SandwichList,
      CakeList: itemlist.CakeList,
      NataList: itemlist.NataList,
      MilkList: itemlist.MilkList,
      BaristaProductList: itemlist.BaristaProductList,
      ProductList: itemlist.ProductList
    };
  },
  methods: {
    goToDetail(id) {
      this.$router.push({ name: 'MenuDetail', params: { id } });
    }
  }

};
</script>
<style>
.container{
  padding:  0;
  margin: 0;
}

.v-tabs {
  white-space: nowrap;
  overflow-x: auto; 
}

.v-tabs__wrapper {
  flex-wrap: nowrap; 
}

.v-tab {
  min-width: auto;
}
.v-chip-group .v-slide-group__content {
  padding: 15px 15px !important;
  box-sizing: border-box !important;
}

.v-chip {
  background: #ffffff !important;
  border: 1.5px solid #000000 !important; 
  color: #000000 !important;
  min-width: 100px !important;
  display: block !important;
  text-align: center !important;
}

.v-chip.v-chip--active {
  background: #000000 !important;
  color: #ffffff !important; 
  border-color: #000000 !important;
}

.menulist_box {
  display: flex;
  align-items: center;
  gap: 10px;
}
.img-rounded {
  border-radius: 20px;
  border: 1px solid #fbfbfb;
  width: 100px; 
  height: 100px; 
}
.menulist_title{
  display: flex;
  flex-direction: column;
  gap: 5px;
}
.menulist_title > p{
  font-size: 16px;
}
.menulist_title > span{
  font-size: 18px;
}
.menulist_box v-image{
  box-shadow: 1px 1px 1px 1px rgba(0,0,0,0.5);
}
.v-list-item {
  padding: 15px 15px;
  box-sizing: border-box;
}
</style>

