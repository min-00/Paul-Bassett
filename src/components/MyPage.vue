<template>
  <v-container>
    <v-row>
      <v-col cols="12" sm="6">
        <v-card>
          <v-card-title>
            <span class="headline">마이페이지</span>
          </v-card-title>
          <v-card-subtitle>
            <v-avatar size="40">
              <v-icon>mdi-account</v-icon>
            </v-avatar>
            <span class="ml-3">{{ userInfo.uname }}님, 안녕하세요!</span>
          </v-card-subtitle>
          <v-card-text>
            <v-list>
              <v-list-item>
                <v-list-item-content>
                  <v-list-item-title>아이디:</v-list-item-title>
                  <v-list-item-subtitle>{{ userInfo.uid }}</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
              <v-list-item>
                <v-list-item-content>
                  <v-list-item-title>비밀번호:</v-list-item-title>
                  <v-list-item-subtitle>******</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-card-text>
          <v-card-actions>
            <v-btn @click="logout" color="red" dark>로그아웃</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col cols="12" sm="6">
        <v-card>
            <router-link to="/Orderhistory"> 주문 내역 </router-link>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      userInfo: JSON.parse(localStorage.getItem('loggedInUser')) || {},
      orders: [
        { id: '001', productName: '상품 1', price: 50000 },
        { id: '002', productName: '상품 2', price: 15000 },
        // 예시 주문 내역
      ]
    };
  },
  methods: {
    logout() {
      // 로컬스토리지에서 사용자 정보 삭제
      localStorage.removeItem('loggedInUser');

      // 로그인 페이지로 리다이렉트
      this.$router.push('/Login'); // 로그인 페이지의 경로를 설정하세요.
    }
  }
};
</script>

<style scoped>
/* 여기에 스타일을 추가할 수 있습니다. */
</style>
