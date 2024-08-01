<template>
  <div>
    <!-- 상위 탭 컨테이너 -->
    <v-tabs v-model="mainTab" color="black" class="tb_style">
      <v-tab>커피</v-tab>
      <v-tab>음료</v-tab>
      <v-tab>푸드</v-tab>
      <v-tab>아이스크림</v-tab>
      <v-tab>상품</v-tab>
    </v-tabs>

    <!-- 상위 탭 컨텐츠 -->
    <v-tabs-items v-model="mainTab">
      <!-- 커피 탭 컨텐츠 -->
      <v-tab-item>
    <v-chip-group v-model="coffeeTab" mandatory>
      <v-chip dark
      v-for="(tab, index) in coffeeTabs"
      :key="index"
      :value="index"
    >{{ tab }}</v-chip>
        </v-chip-group>

        <v-tabs-items v-model="coffeeTab">
          <v-tab-item>
            <v-list>
              <v-list-item v-for="item in coffeeList" :key="item.Id" @click="goToDetail(item.Id)">
                <v-list-item-content>
                  <v-row align="center" no-gutters>
                    <v-col cols="auto">
                      <v-img :src="item.imgUrl" height="100" width="100" contain />
                    </v-col>
                    <v-col>
                      <v-list-item-title>{{ item.Title }}</v-list-item-title>
                      <v-list-item-subtitle>가격: {{ item.BasePrice }} 원</v-list-item-subtitle>
                    </v-col>
                  </v-row>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-tab-item>

          <v-tab-item>
            <v-list>
              <v-list-item v-for="item in letteList" :key="item.Id" @click="goToDetail(item.Id)">
                <v-list-item-content>
                  <v-row align="center" no-gutters>
                    <v-col cols="auto">
                      <v-img :src="item.imgUrl" height="100" width="100" contain />
                    </v-col>
                    <v-col>
                      <v-list-item-title>{{ item.Title }}</v-list-item-title>
                      <v-list-item-subtitle>가격: {{ item.BasePrice }} 원</v-list-item-subtitle>
                    </v-col>
                  </v-row>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-tab-item>

          <v-tab-item>
            <v-list>
              <v-list-item v-for="item in espressoList" :key="item.Id" @click="goToDetail(item.Id)">
                <v-list-item-content>
                  <v-row align="center" no-gutters>
                    <v-col cols="auto">
                      <v-img :src="item.imgUrl" height="100" width="100" contain />
                    </v-col>
                    <v-col>
                      <v-list-item-title>{{ item.Title }}</v-list-item-title>
                      <v-list-item-subtitle>가격: {{ item.BasePrice }} 원</v-list-item-subtitle>
                    </v-col>
                  </v-row>
                </v-list-item-content>
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
              <v-list-item v-for="item in FrappeList" :key="item.Id" @click="goToDetail(item.Id)">
                <v-list-item-content>
                  <v-row align="center" no-gutters>
                    <v-col cols="auto">
                      <v-img :src="item.imgUrl" height="100" width="100" contain />
                    </v-col>
                    <v-col>
                      <v-list-item-title>{{ item.Title }}</v-list-item-title>
                      <v-list-item-subtitle>가격: {{ item.BasePrice }} 원</v-list-item-subtitle>
                    </v-col>
                  </v-row>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-tab-item>

          <v-tab-item>
            <v-list>
              <v-list-item v-for="item in AdeList" :key="item.Id" @click="goToDetail(item.Id)">
                <v-list-item-content>
                  <v-row align="center" no-gutters>
                    <v-col cols="auto">
                      <v-img :src="item.imgUrl" height="100" width="100" contain />
                    </v-col>
                    <v-col>
                      <v-list-item-title>{{ item.Title }}</v-list-item-title>
                      <v-list-item-subtitle>가격: {{ item.BasePrice }} 원</v-list-item-subtitle>
                    </v-col>
                  </v-row>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-tab-item>

          <v-tab-item>
            <v-list>
              <v-list-item v-for="item in yogurtList" :key="item.Id" @click="goToDetail(item.Id)">
                <v-list-item-content>
                  <v-row align="center" no-gutters>
                    <v-col cols="auto">
                      <v-img :src="item.imgUrl" height="100" width="100" contain />
                    </v-col>
                    <v-col>
                      <v-list-item-title>{{ item.Title }}</v-list-item-title>
                      <v-list-item-subtitle>가격: {{ item.BasePrice }} 원</v-list-item-subtitle>
                    </v-col>
                  </v-row>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-tab-item>

          <v-tab-item>
            <v-list>
              <v-list-item v-for="item in ChocolateList" :key="item.Id" @click="goToDetail(item.Id)">
                <v-list-item-content>
                  <v-row align="center" no-gutters>
                    <v-col cols="auto">
                      <v-img :src="item.imgUrl" height="100" width="100" contain />
                    </v-col>
                    <v-col>
                      <v-list-item-title>{{ item.Title }}</v-list-item-title>
                      <v-list-item-subtitle>가격: {{ item.BasePrice }} 원</v-list-item-subtitle>
                    </v-col>
                  </v-row>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-tab-item>

          <v-tab-item>
            <v-list>
              <v-list-item v-for="item in TeaList" :key="item.Id" @click="goToDetail(item.Id)">
                <v-list-item-content>
                  <v-row align="center" no-gutters>
                    <v-col cols="auto">
                      <v-img :src="item.imgUrl" height="100" width="100" contain />
                    </v-col>
                    <v-col>
                      <v-list-item-title>{{ item.Title }}</v-list-item-title>
                      <v-list-item-subtitle>가격: {{ item.BasePrice }} 원</v-list-item-subtitle>
                    </v-col>
                  </v-row>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-tab-item>
        </v-tabs-items>
      </v-tab-item>

      <!-- 푸드 탭 컨텐츠 -->
      <v-tab-item>
        <v-chip-group v-model="FoodTab" mandatory>
          <v-chip dark v-for="(tab, index) in foodTabs" :key="index" :value="index">{{ tab }}</v-chip>
        </v-chip-group>

        <v-tabs-items v-model="FoodTab">
          <v-tab-item>
            <v-list>
              <v-list-item v-for="item in bakeryList" :key="item.Id" @click="goToDetail(item.Id)">
                <v-list-item-content>
                  <v-row align="center" no-gutters>
                    <v-col cols="auto">
                      <v-img :src="item.imgUrl" height="100" width="100" contain />
                    </v-col>
                    <v-col>
                      <v-list-item-title>{{ item.Title }}</v-list-item-title>
                      <v-list-item-subtitle>가격: {{ item.BasePrice }} 원</v-list-item-subtitle>
                    </v-col>
                  </v-row>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-tab-item>

          <v-tab-item>
            <v-list>
              <v-list-item v-for="item in SandwichList" :key="item.Id" @click="goToDetail(item.Id)">
                <v-list-item-content>
                  <v-row align="center" no-gutters>
                    <v-col cols="auto">
                      <v-img :src="item.imgUrl" height="100" width="100" contain />
                    </v-col>
                    <v-col>
                      <v-list-item-title>{{ item.Title }}</v-list-item-title>
                      <v-list-item-subtitle>가격: {{ item.BasePrice }} 원</v-list-item-subtitle>
                    </v-col>
                  </v-row>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-tab-item>

          <v-tab-item>
            <v-list>
              <v-list-item v-for="item in CakeList" :key="item.Id" @click="goToDetail(item.Id)">
                <v-list-item-content>
                  <v-row align="center" no-gutters>
                    <v-col cols="auto">
                      <v-img :src="item.imgUrl" height="100" width="100" contain />
                    </v-col>
                    <v-col>
                      <v-list-item-title>{{ item.Title }}</v-list-item-title>
                      <v-list-item-subtitle>가격: {{ item.BasePrice }} 원</v-list-item-subtitle>
                    </v-col>
                  </v-row>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-tab-item>

          <v-tab-item>
            <v-list>
              <v-list-item v-for="item in NataList" :key="item.Id" @click="goToDetail(item.Id)">
                <v-list-item-content>
                  <v-row align="center" no-gutters>
                    <v-col cols="auto">
                      <v-img :src="item.imgUrl" height="100" width="100" contain />
                    </v-col>
                    <v-col>
                      <v-list-item-title>{{ item.Title }}</v-list-item-title>
                      <v-list-item-subtitle>가격: {{ item.BasePrice }} 원</v-list-item-subtitle>
                    </v-col>
                  </v-row>
                </v-list-item-content>
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
              <v-list-item v-for="item in MilkList" :key="item.Id" @click="goToDetail(item.Id)">
                <v-list-item-content>
                  <v-row align="center" no-gutters>
                    <v-col cols="auto">
                      <v-img :src="item.imgUrl" height="100" width="100" contain />
                    </v-col>
                    <v-col>
                      <v-list-item-title>{{ item.Title }}</v-list-item-title>
                      <v-list-item-subtitle>가격: {{ item.BasePrice }} 원</v-list-item-subtitle>
                    </v-col>
                  </v-row>
                </v-list-item-content>
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
              <v-list-item v-for="item in BaristaProductList" :key="item.Id" @click="goToDetail(item.Id)">
                <v-list-item-content>
                  <v-row align="center" no-gutters>
                    <v-col cols="auto">
                      <v-img :src="item.imgUrl" height="100" width="100" contain />
                    </v-col>
                    <v-col>
                      <v-list-item-title>{{ item.Title }}</v-list-item-title>
                      <v-list-item-subtitle>가격: {{ item.BasePrice }} 원</v-list-item-subtitle>
                    </v-col>
                  </v-row>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-tab-item>

          <v-tab-item>
            <v-list>
              <v-list-item v-for="item in ProductList" :key="item.Id" @click="goToDetail(item.Id)">
                <v-list-item-content>
                  <v-row align="center" no-gutters>
                    <v-col cols="auto">
                      <v-img :src="item.imgUrl" height="100" width="100" contain />
                    </v-col>
                    <v-col>
                      <v-list-item-title>{{ item.Title }}</v-list-item-title>
                      <v-list-item-subtitle>가격: {{ item.BasePrice }} 원</v-list-item-subtitle>
                    </v-col>
                  </v-row>
                </v-list-item-content>
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

export default {
  data() {
    return {
      mainTab: 0,
      coffeeTab: 0,
      beverageTab: 0,
      FoodTab: 0,
      iceCream: 0,
      Product: 0,
      coffeeTabs: ['커피', '라떼', '에스프레소'],
      beverageTabs: ['프라페', '에이드', '요거트', '초콜렛', '티'],
      foodTabs: ['빵', '샌드위치', '케이크', '나타'],
      iceCreamTabs: ['아이스크림'],
      productTabs: ['바리스타 상품', '텀블러'],

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
<style scoped>


.container{
  padding:  0;
}

.v-list-item-content {
  display: flex;
  align-items: center;
}

.v-list-item-title {
  font-size: 1rem;
  font-weight: bold;
}

.v-list-item-subtitle {
  color: grey;
}

.v-list-item {
  padding: 8px 8px;
}
</style>

