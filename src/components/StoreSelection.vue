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

            <v-list>
                <v-list-item v-for="store in stores" :key="store.locId">
                    <div class="loclist_box">
                        <v-img class="loc_img_rounded" :src="store.loc_img" cover />
                    <div class="loclist_box_title">
                        <span>{{store.name}}</span>
                        <span>{{store.address}}</span>
                        <span> {{store.영업시간}} </span>
                    </div>
                    </div>
                </v-list-item>
            </v-list>
            </v-tab-item>
    
            <v-tab-item value="map" style="  height:100vh">
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
.loclist_box{
    display: flex;
    padding: 1em;
    gap: 10px;
    box-sizing: border-box;
}
.loclist_box_title{
    display: flex;
    flex-direction: column;
    white-space: nowrap;
    justify-content: center;
}
.loclist_box_title span:nth-child(1){
    font-weight: bold;
}
.loclist_box_title span:nth-child(2){
    font-size: 12px;
}
.loclist_box_title span:nth-child(3){
    font-size: 12px;
}
.loc_img_rounded{
    border-radius: 15px !important;
    border: 1px solid #fbfbfb;
    width: 100px; 
    height: 100px; 
}

</style>
