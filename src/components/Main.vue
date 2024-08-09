<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-img src="../assets/mainimage/event.png"></v-img>
      </v-col>

      <v-col class="center">
        <v-card class="membership">
          <div class="card_title_wrap">
            <h3 class="card-title">
              @@@님의 MY CROWN
              <img src="../assets/mainimage/logo.png" class="logo" />
            </h3>
            <p>
              07
              <span class="num_gray">/ 12</span>
            </p>
          </div>

          <div class="progress_size">
            <div class="progress_bar">
              <div class="progress"></div>
            </div>
          </div>
          <v-card-subtitle>3개만 더 채우면 @@@크라운으로 올라가요!</v-card-subtitle>

          <div class="my_btn_wrap">
            <div class="my_btn">
              <p>쿠폰 0</p>
              <v-icon>loyalty</v-icon>
            </div>

            <div class="my_btn">
              <p>바코드</p>
              <v-icon>mdi-barcode</v-icon>
            </div>
          </div>
        </v-card>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="10" offset="1" class="mt-5">
        <h3>추천 메뉴</h3>
        <v-slide-group class="mt-3">
          <v-slide-group-item class="recom_wrap">
            <div class="recom_size"> 
           <v-img class="menu_recom mt-3" src="../assets/mainimage/menu01.png" />
           <p class="mt-2">초코 카페라떼</p>
          </div>
          <div class="recom_size">
           <v-img class="menu_recom mt-3" src="../assets/mainimage/menu02.png" />
           <p class="mt-2">카페라떼</p>
          </div>
          <div class="recom_size">
           <v-img class="menu_recom mt-3" src="../assets/mainimage/menu01.png" />
           <p class="mt-2">초코 카페라떼</p>
          </div>
          <div class="recom_size">
           <v-img class="menu_recom mt-3" src="../assets/mainimage/menu02.png" />
           <p class="mt-2">카페라떼</p>
          </div>
          </v-slide-group-item>
        </v-slide-group>
      </v-col>
      <v-col cols="10" offset="1" class="mt-5">
        <h3>NEWS</h3>
        <v-slide-group class="mt-3">
          <v-slide-group-item class="news_wrap">
            <div class="news_size"> 
           <v-img class="menu_recom mt-3" src="../assets/mainimage/news1.jpg" />
           <p class="mt-2">[프로모션] 쿠팡이츠 할인 프로모션(08.12 - 08.18)</p>
          </div>
          <div class="news_size">
           <v-img class="menu_recom mt-3" src="../assets/mainimage/news2.jpg" />
           <p class="mt-2">The Coolest Frappe</p>
          </div>
          <div class="news_size">
           <v-img class="menu_recom mt-3" src="../assets/mainimage/news3.jpg" />
           <p class="mt-2">초코 카페라떼</p>
          </div>
          <div class="news_size">
           <v-img class="menu_recom mt-3" src="../assets/mainimage/news4.jpg" />
           <p class="mt-2">카페라떼</p>
          </div>
          </v-slide-group-item>
        </v-slide-group>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  data(){
    return{
  name: "Main",
    }
  }
};
</script>

<style>

.membership {
  margin-top: -80px;
  border-radius: 15px !important;
}
.center {
  margin-left: 2%;
  margin-right: 2%;
}
.logo {
  width: 35px;
}

.card-title {
  display: flex;
  align-items: center;
}

.card_title_wrap {
  padding: 16px 20px 0 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
}

.num_gray {
  color: rgb(180, 180, 180);
}

.recom_wrap {
  display: flex;
}

.recom_size{
  width:8%;
  text-align: center;
  margin-right: 14px ;
}

.news_wrap {
  display: flex;
  margin-bottom: 100px;
}

.news_size{
  width:20%;
  margin-right: 14px ;
  overflow: hidden;
}

.progress_size {
  width: 93%;
  margin: auto;
}

.progress_bar {
  width: 100%;
  height: 5px;
  background-color: #dedede;
}

.progress_bar .progress {
  width: 72%;
  height: 5px;
  background-color: #e80a4d;
}

.my_btn {
  padding: 10px 15px 10px 15px;
  border: 1px solid #dedede;
  display: flex;
  width: 49%;
  border-radius: 10px;
  margin-bottom: 16px;
  justify-content: space-between;
}

.my_btn_wrap {
  width: 93%;
  margin: auto;
  display: flex;
  justify-content: space-between;
}
</style>