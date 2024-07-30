<template>
  <v-app>
    <v-app-bar app dark>
      <v-btn>
        <v-icon>mdi-arrow-left</v-icon>
      </v-btn>
      <v-toolbar-title>Header</v-toolbar-title>

    </v-app-bar>
    <v-main>
      <v-container>
        <router-view />
      </v-container>
    </v-main>

    <!-- 하단 내비  -->
    <v-bottom-navigation app>
      <div class="d-flex justify-space-between">
        <v-btn fab to="/">
          <span>홈</span>
          <v-icon>home</v-icon>
        </v-btn>
        <v-btn fab to="/MemberShip">
          <span>멤버십</span>
          <v-icon>approval</v-icon>
        </v-btn>
        <v-btn fab to="/Menu">
          <span>주문</span>
          <v-icon>local_cafe</v-icon>
        </v-btn>
        <v-btn fab to="/gift">
          <span>선물</span>
          <v-icon>card_membership</v-icon>
        </v-btn>
        <v-btn fab to="/MyPage">
          <span>전체메뉴</span>
          <v-icon>grid_view</v-icon>
        </v-btn>
      </div>

    </v-bottom-navigation>
  </v-app>
</template>

<script>
export default {
  methods: {
    navigateTo(route) {
      this.$router.push({ name: route });
    }
  }
}
</script>

<style>


</style>
