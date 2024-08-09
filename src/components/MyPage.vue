<template>
  <v-container>
    <div class="header">
      <p class="menu_title">마이페이지</p>
    </div>
    <v-row>
      <v-col cols="10" offset="1">
        <v-card class="mt-4">
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
            </v-list>
          </v-card-text>
          <v-card-actions>
            <v-btn @click="logout" color="red" dark>로그아웃</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col cols="12">
        <router-link to="/Orderhistory" class="pa-4 menu_list">
          <h4>주문 내역</h4>
          <v-icon>arrow_forward_ios</v-icon>
        </router-link>
        <v-divider />
        <router-link to="/Menu" class="pa-4 menu_list">
          <h4>픽업 주문하기</h4>
          <v-icon>arrow_forward_ios</v-icon>
        </router-link>
        <v-divider />
        <router-link to="/Orderhistory" class="pa-4 menu_list">
          <h4>선물하기 및 내역</h4>
          <v-icon>arrow_forward_ios</v-icon>
        </router-link>
        <v-divider />
        <router-link to="/Orderhistory" class="pa-4 menu_list">
          <h4>FAQ or 자주 묻는 질문</h4>
          <v-icon>arrow_forward_ios</v-icon>
        </router-link>
        <v-divider />
        <router-link to="/Orderhistory" class="pa-4 menu_list">
          <h4>앱설정</h4>
          <v-icon>arrow_forward_ios</v-icon>
        </router-link>
        <v-divider />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      userInfo: JSON.parse(localStorage.getItem("loggedInUser")) || {}
    };
  },
  methods: {
    logout() {
      // 로컬스토리지에서 사용자 정보 삭제
      localStorage.removeItem("loggedInUser");

      this.$router.push("/Login");
    }
  }
};
</script>

<style>
.menu_list {
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-decoration: none;
}

h4{
  color:#1E1E1E;
}

.v-card__actions{
  justify-content: space-around;
  padding-bottom: 14px;
}
</style>