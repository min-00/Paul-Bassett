<template>
  <v-container>
    <!-- 상위 탭 컨테이너 -->
    <v-tabs v-model="mainTab" color="black">
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
        <v-tabs v-model="coffeeTab">
          <v-tab>커피</v-tab>
          <v-tab>라떼</v-tab>
          <v-tab>에스프레소</v-tab>
        </v-tabs>

        <v-tabs-items v-model="coffeeTab">
          <v-tab-item>
            <v-list>
              <v-list-item-group v-for="item in coffeeList" :key="item.Id">
                <v-list-item>
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
              </v-list-item-group>
            </v-list>
          </v-tab-item>

          <v-tab-item>
            <v-list>
              <v-list-item-group v-for="item in latteList" :key="item.Id">
                <v-list-item>
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
              </v-list-item-group>
            </v-list>
          </v-tab-item>
          <v-tab-item>
            <v-list>
              <v-list-item-group v-for="item in espressoList" :key="item.Id">
                <v-list-item>
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
              </v-list-item-group>
            </v-list>
          </v-tab-item>
        </v-tabs-items>

      </v-tab-item>

      <v-tab-item>
        <v-tabs v-model="beverageTab">
          <v-tab>프라페</v-tab>
          <v-tab>에이드</v-tab>
          <v-tab>요거트</v-tab>
          <v-tab>초콜렛</v-tab>
          <v-tab>티</v-tab>
        </v-tabs>

        <v-tabs-items v-model="beverageTab">
        <v-tab-item>
            <v-list>
              <v-list-item v-for="item in FrappeList" :key="item.Id">
                <v-list-item-content>
                  <v-row align="center" no-gutters>
                    <!-- 이미지 부분 -->
                    <v-col cols="auto">
                      <v-img :src="item.imgUrl" height="100" width="100" contain />
                    </v-col>

                    <!-- 텍스트 부분 -->
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
              <v-list-item v-for="item in AdeList" :key="item.Id">
                <v-list-item-content>
                  <v-row align="center" no-gutters>
                    <!-- 이미지 부분 -->
                    <v-col cols="auto">
                      <v-img :src="item.imgUrl" height="100" width="100" contain />
                    </v-col>

                    <!-- 텍스트 부분 -->
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
              <v-list-item v-for="item in yogurtList" :key="item.Id">
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
              <v-list-item v-for="item in ChocolateList" :key="item.Id">
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
              <v-list-item v-for="item in TeaList" :key="item.Id">
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

      <!-- Food -->
    <v-tab-item>
        <v-tabs v-model="FoodTab">
          <v-tab>빵</v-tab>
          <v-tab>샌드위치</v-tab>
          <v-tab>케이크</v-tab>
          <v-tab>나타</v-tab>
        </v-tabs>

        <v-tabs-items v-model="FoodTab">
        <v-tab-item>
            <v-list>
              <v-list-item v-for="item in bakeryList" :key="item.Id">
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
              <v-list-item v-for="item in SandwichList" :key="item.Id">
                <v-list-item-content>
                  <v-row align="center" no-gutters>
                    <!-- 이미지 부분 -->
                    <v-col cols="auto">
                      <v-img :src="item.imgUrl" height="100" width="100" contain />
                    </v-col>

                    <!-- 텍스트 부분 -->
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
              <v-list-item v-for="item in CakeList" :key="item.Id">
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
              <v-list-item v-for="item in NataList" :key="item.Id">
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

    <v-tab-item>
        <v-tabs v-model="iceCream">
            <v-tab>아이스크림</v-tab>
            <v-tab>시즌 메뉴</v-tab>
        </v-tabs>
    <v-tabs-items v-model="iceCream">
        <v-tab-item>
            <v-list>
              <v-list-item v-for="item in MilkList" :key="item.Id">
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

      <!-- 상품 -->
          <v-tab-item>
        <v-tabs v-model="Product">
            <v-tab>바리스타 상품</v-tab>
            <v-tab>텀블러</v-tab>
        </v-tabs>
    <v-tabs-items v-model="Product">
        <v-tab-item>
            <v-list>
              <v-list-item v-for="item in BaristaProductList" :key="item.Id">
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
              <v-list-item v-for="item in ProductList" :key="item.Id">
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
  </v-container>
</template>
<script>
import itemlist from '@/datasources/itemlist';

export default {
  data() {
    return {
      mainTab: 0,
      coffeeTab: 0, 
      beverageTab: 0,
      FoodTab: 0,
      iceCream: 0,
      Product: 0,

        coffeeList: itemlist.coffeeList,
        latteList: itemlist.LetteList,
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
}
}
</script>
<style scoped>


.v-list-item-content {
  display: flex;
  /* gap: 20; */
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

