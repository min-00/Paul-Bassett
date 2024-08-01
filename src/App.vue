<template>
  <v-app>
    <v-app-bar app dark>
      <v-btn
        icon
        v-if="$route.name !== 'home'"
        @click="$router.go(-1)"
      >
        <v-icon>mdi-arrow-left</v-icon>
      </v-btn>
      <v-toolbar-title>{{ appBarTitle }}</v-toolbar-title>
    </v-app-bar>
    <v-main>
      <v-container>
        <router-view @updateTitle="updateAppBarTitle" />
      </v-container>
    </v-main>

    <!-- 하단 내비  -->
    <v-bottom-navigation app>
      <div class="d-flex justify-space-between">
        <v-btn fab to="/" @click.native="updateAppBarTitle('홈', false)">
          <span>홈</span>
          <v-icon>mdi-home</v-icon>
        </v-btn>
        <v-btn fab to="/MemberShip" @click.native="updateAppBarTitle('멤버십', true)">
          <span>멤버십</span>
          <v-icon>approval</v-icon>
        </v-btn>
        <v-btn class="circle" fab to="/Menu" @click.native="updateAppBarTitle('주문', true)">
          <span>주문</span>
          <v-icon>mdi-coffee</v-icon>
        </v-btn>
        <v-btn fab to="/gift" @click.native="updateAppBarTitle('선물', true)">
          <span>선물</span>
          <v-icon>mdi-gift</v-icon>
        </v-btn>
        <v-btn fab to="/MyPage" @click.native="updateAppBarTitle('전체메뉴', true)">
          <span>전체메뉴</span>
          <v-icon>mdi-grid</v-icon>
        </v-btn>
      </div>
    </v-bottom-navigation>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      appBarTitle: '홈'
    };
  },
  methods: {
    updateAppBarTitle(title, showBackButton) {
      this.appBarTitle = title;
      this.showBackButton = showBackButton;
    }
  }
}
</script>

<style>
</style>
