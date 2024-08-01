<template>
  <div>
    <!-- 이미지 -->
    <v-img :src="currentImgUrl" class="my-4" height="300"></v-img>
    
    <!-- 제목, 정보 및 가격 -->
    <v-row>
      <v-col cols="12">
        <h2>{{ selectedItem.Title }}</h2>
        <p>{{ selectedItem.Info }}</p>
        <h3>가격: {{ selectedItem.BasePrice }} 원</h3>
      </v-col>
    </v-row>
  
    <v-divider></v-divider>

    <!-- Ice/Hot 버튼 -->

    <v-row v-if="hasMainOption('IceHot')">
      <v-col cols="12">
        <p>종류</p>
        <v-btn-toggle v-model="selectedOptions.IceHot" class="mb-2" rounded>
          <v-btn v-for="option in CommonOptions.IceHot" :key="option.value" :value="option.value" rounded   width="100%" :style="getButtonStyle(option.value)">
            {{ option.label }}
          </v-btn>
        </v-btn-toggle>
      </v-col>
    </v-row>

    <!-- 컵 타입 버튼 -->
    <v-row v-if="hasMainOption('cupType')">
      <v-col cols="12">
        <v-btn-toggle v-model="selectedOptions.cupType" class="mb-2" rounded>
          <v-btn v-for="option in CommonOptions.cupType" :key="option.value" :value="option.value" rounded>
            {{ option.label }}
          </v-btn>
        </v-btn-toggle>
      </v-col>
    </v-row>

    <!-- 퍼스널 옵션이 있을 때만 버튼 표시 -->
    <v-row v-if="Object.keys(filteredPersonalOptions).length > 0">
      <v-col cols="12">
        <v-btn @click="showBottomSheet = true" class="mt-4">퍼스널 옵션 추가 </v-btn>
      </v-col>
    </v-row>

    <!-- Bottom Sheet -->
    <v-bottom-sheet v-model="showBottomSheet">
      <v-list>
        <v-list-item-group v-if="filteredPersonalOptions">
          <v-list-item v-for="(options, key) in filteredPersonalOptions" :key="key">
            <v-list-item-content>
              <v-list-item-title>{{ key }}</v-list-item-title>
              <v-list-item-subtitle>
                <v-btn-toggle v-model="selectedOptions[key]" class="mb-2" rounded>
                  <v-btn v-for="option in options" :key="option.value" :value="option.value" rounded>
                    {{ option.label }}
                  </v-btn>
                </v-btn-toggle>
              </v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-bottom-sheet>
  </div>
</template>
<script>
import { CommonOption as CommonOptions } from '@/datasources/CommonOption';
import itemlist from '@/datasources/itemlist';

export default {
  data() {
    return {
      selectedOptions: {
        IceHot: 'hot', // 기본값 설정
        cupType: null,
        size: null,
        packaging: null
      },
      showBottomSheet: false // Bottom Sheet 표시 여부
    };
  },
  computed: {
    selectedItem() {
      return this.$store.getters.selectedItem;
    },
    CommonOptions() {
      return CommonOptions;
    },
    filteredPersonalOptions() {
      const personalOptions = {};
      

      if (this.selectedItem.personalOptions) {
        for (const [key, options] of Object.entries(CommonOptions)) {
          if (this.selectedItem.personalOptions[key]) {
            personalOptions[key] = options;
          }
        }
      }
      
      return personalOptions;
    },
    currentImgUrl() {
      const imgUrlOption = this.selectedItem.imgUrlOption || {};
      const defaultImg = this.selectedItem.imgUrl;

      if (!this.selectedItem.mainOptions || !this.selectedItem.mainOptions.IceHot) {
        return defaultImg;
      }

      // Ice/Hot 옵션에 따라 이미지 변경
      return this.selectedOptions.IceHot === 'ice'
        ? imgUrlOption.iceImg || defaultImg
        : imgUrlOption.hotImg || defaultImg;
    }
  },
  methods: {
    hasMainOption(optionKey) {
      return this.selectedItem.mainOptions && this.selectedItem.mainOptions[optionKey];
    },
    getButtonStyle(value) {
      return value === 'hot' ? 'hot' : 'ice';
    }
  },
  created() {
    const itemId = this.$route.params.id;
    this.$store.dispatch('fetchItem', itemId);
  }
};
</script>
<style scoped>
h1 {
  font-size: 24px;
  margin-bottom: 8px;
}

p {
  font-size: 16px;
  margin: 0;
}

.font-weight-bold {
  font-weight: bold;
}

.v-btn {
  font-size: 14px;
}

.v-btn-toggle .v-btn {
  min-width: 80px;
}

.w-100 {
  width: 100%;
}
</style>

