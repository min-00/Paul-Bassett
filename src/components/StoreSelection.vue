<template>
    <div>
        <v-toolbar fixed-tabs>
            <v-tabs color="black" grow v-model="tab">
                <v-tabs-slider color="black"></v-tabs-slider>
                <v-tab href="#stores">가까운 매장</v-tab>
                <v-tab href="#map">지도</v-tab>
            </v-tabs>
        </v-toolbar>

        <v-tabs-items v-model="tab" style="height: 100%;">
            <v-tab-item value="stores">
                    <v-card style="margin: 20px">
                        <p class="pa-3">현재 위치에서 5Km 이내 매장에서만 주문할 수 있습니다. 크라운오더는 매장운영 종료 시간 30분 전 마감됩니다. </p>
                    </v-card>
    
                    <v-card v-for="store in stores" :key="store.locId" style="margin: 20px">
                        <v-layout align-center >
                            <v-flex xs2>
                                <v-img :src="dd" width="80px" contain ></v-img>
                            </v-flex>
                            <v-flex xs10>
                                <v-card-title>{{store.name}}</v-card-title>
                                <v-card-subtitle>{{store.address}}</v-card-subtitle>
                                <v-card-text>{{store.영업시간}}</v-card-text>
                            </v-flex>
                        </v-layout>
                    </v-card>
            </v-tab-item>
    
            <v-tab-item value="map" style="  height:730px">
                <v-card style="margin: 20px; z-index: 10;">
                    <p class="pa-3">현재 위치에서 5Km 이내 매장에서만 주문할 수 있습니다. 크라운오더는 매장운영 종료 시간 30분 전 마감됩니다. </p>
                </v-card>
                <div>
                    <KakaoMap />
                </div>
            </v-tab-item>
        </v-tabs-items>
    </div>
</template>


<script>
import KakaoMap from "./KakaoMap.vue";
import { CommonOption } from '@/datasources/StoreList';

export default{
    name:"StoreSelection",
    data(){
        return{
            tab: "map",
            // stores를 추가
            stores: CommonOption.locationList,
        }
    },
    computed: {
                        imageSrc() {
                return require(
                    CommonOption.locationList.map(store=> {
                    (store.loc_img)}));
                }
    },
    components: {
        KakaoMap,
    },
    mounted() {

    },
    methods:{
        
        }
}

</script>

<style>

</style>
