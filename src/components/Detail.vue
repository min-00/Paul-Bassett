<template>
  <v-container>
    <v-card>
      <!-- 이미지 -->
      <v-img :src="item.detailImg || require('@/assets/menuimage/default_detail.jpg')" height="400" />

      <!-- 텍스트 내용 -->
      <v-card-title>{{ item.Title }}</v-card-title>
      <v-card-subtitle>{{ item.Info }}</v-card-subtitle>
      <v-card-text>가격: {{ item.BasePrice }} 원</v-card-text>
    </v-card>
  </v-container>
</template>

<script>
import coffeeData from '@/assets/data/coffeeData';

export default {
  data() {
    return {
      item: coffeeData.coffeeList.find(item => item.Id === parseInt(this.$route.params.id))
    };
  }
}
</script>
