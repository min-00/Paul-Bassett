<template>
  <v-app>
    <v-container>
      <v-main>
        <router-view/>
      </v-main>
    </v-container>

<v-bottom-navigation v-if="!isMenuDetailPage" :value="value" fixed
>
    <v-btn
      v-for="item in navItems"
      :key="item.name"
      :to="item.link"
      fab
      :class="{'active-btn': value === item.link}"
      size="30"
    >
      <span>{{ item.name }}</span>
    <v-icon :class="{ 'active-icon': value === item.link }">
          {{ value === item.link ? item.activeIcon : item.icon }}
        </v-icon>
    </v-btn>
  </v-bottom-navigation>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      value: 0,
      navItems: [
        { name: '홈', link: '/', icon: 'mdi-home-outline', activeIcon: 'mdi-home' },
        { name: '멤버십', link: '/MemberShip', icon: 'approval', activeIcon: 'approval' },
        { name: '주문', link: '/Menu', icon: 'mdi-coffee', activeIcon: 'coffee' },
        { name: '기프트', link: '/gift', icon: 'mdi-gift', activeIcon: 'mdi-gift' },
        { name: '마이페이지', link: '/MyPage', icon: 'mdi-grid', activeIcon: 'mdi-grid' }
      ]
    };
  },
  methods: {
    isActive(link) {
      return this.$route.path === link;
    }
  },
  computed: {
    isMenuDetailPage() {
      return this.$route.name === 'MenuDetail'; 
    }
  }
};
</script>

<style>


.container {
  margin: 0 !important;
  padding: 0 !important;
}

.header {
  height: 70px;
  /* position: fixed !important; */
  text-align: center !important;
  background: #ffffff !important;
  box-shadow: none !important;
  padding: 20px 20px !important;
  box-sizing: border-box !important;
  display: flex !important;
  justify-content: center !important;
  align-items: center;
  position: relative;
  box-shadow: 0 2px 1px 0px rgba(0, 0, 0, 0.1) !important;
}

.menu_title {
  text-align: center !important;
  /* margin: 0 auto !important; */
  font-weight: bold !important;
  /* position: absolute;
  transform: translate(-50%, -50%); */
}


.right_icons {
  position: absolute;
  top: 50%;
  right: 25px;
  transform: translateY(-50%);
  display: flex;
  gap: 10px;
  cursor: pointer;
}
.goBack{
  position: absolute;
  top: 50%;
  left: 20px;
  transform: translateY(-50%);
  cursor: pointer;
}
.delete{
  position: absolute;
  top: 50%;
  right: 20px;
  transform: translateY(-50%);
  cursor: pointer;
}

.v-btn{
  background: transparent !important;
}

.v-bottom-navigation {
  /* position: fixed !important; */
  /* bottom: 0; */
  height: 70px !important;
  display: flex;
  justify-content: space-around !important;
  align-items: center;
  box-sizing: border-box;
  /* z-index: 9999 !important; */
  background-color: #ffffff;
}

.v-application .d-flex {
  display: flex !important;
  justify-content: space-evenly;
  align-items: center;
  font-family: 'Noto Sans KR';
}

</style>