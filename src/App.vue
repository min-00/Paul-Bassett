<template>
  <v-app>
    <v-app-bar app dark>
      <v-btn
        icon
        v-if="$route.name !== ''"
        @click="$router.go(-1)"
      >
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
        <v-btn @click="navigateTo('Main')">
          <span>홈</span>
          <v-icon>home</v-icon>
        </v-btn>
        <v-btn @click="navigateTo('/Menu')">
          <span>멤버십</span>
          <v-icon>approval</v-icon>
        </v-btn>
        <v-btn @click="navigateTo('/Menu')">
          <span>주문</span>
          <v-icon>local_cafe</v-icon>
        </v-btn>
        <v-btn @click="navigateTo('/Menu')">
          <span>선물</span>
          <v-icon>gift</v-icon>
        </v-btn>
        <v-btn @click="navigateTo('/Menu')">
          <span>전체메뉴</span>
          <v-icon>grid_view</v-icon>
        </v-btn>


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
.v-bottom-navigation {
  /* background-color: #fff; 하단 내비게이션의 배경색 */
}


</style>
