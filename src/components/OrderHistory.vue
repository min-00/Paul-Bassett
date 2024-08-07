<template>
    <v-container style="padding: 0;">
        <div class="pa-3">
            <v-select
            hide-details
            :items="order_status"
            prepend-inner-icon="mdi-magnify"></v-select>
        </div>
    
        <div>
            <v-tabs color="black" grow v-model="tab" class="P_14">
                <v-tabs-slider color="black"></v-tabs-slider>
                <v-tab href="#stores">주문</v-tab>
                <v-tab href="#map">예약</v-tab>
            </v-tabs>
            
            <div class="d-flex align-center">
                <div class="d-flex pa-4 P_14">
                    <v-icon class="pr-3">folder_open</v-icon>
                    <p class="pr-3">2024.05.09</p>
                    <p>2024.05.09</p>
                </div>
                <v-btn class="ml-auto P_14 mr-4" color="grey" outlined rounded>기간 설정</v-btn>
            </div>
        
            <div class="grey lighten-4 pa-6">
                <!--주문요청-->
                <v-row cols="8" offset="2" class="white mb-1">
                    <v-col cols="3">
                        <v-img src="../assets/menuimage/커피/아이스룽고.jpg" alt="아이스룽고" style="width: 90px;" class="rounded-xl ml-2"></v-img>
                    </v-col>
                    <v-col cols="9">
                        <div class="d-flex justify-space-between">
                            <div>
                                <p class="P_12 text_gray500">폴바셋 GFC점</p>
                                <p class="P_20 font-weight-bold">룽고</p>
                                <p class="P_12 text_gray300 mt-2">주문 2024.07.22 18:09</p>
                                <p class="P_12 text_gray300">픽업 - -</p>
                            </div>
                            <div class="text-end mr-2">
                                <v-chip color="#EA094B" dark>주문요청</v-chip>
                                <p class="P_12 text_gray500 mt-5">결제금액</p>
                                <p class="P_16 text_pink font-weight-bold">5,900원</p>
                            </div>
                        </div>
                    </v-col>
                </v-row>
                <!--픽업완료-->
                <v-row cols="8" offset="2" class="white mb-1">
                    <v-col cols="3">
                        <v-img src="../assets/menuimage/커피/아이스룽고.jpg" alt="아이스룽고" style="width: 90px;" class="rounded-xl ml-2"></v-img>
                    </v-col>
                    <v-col cols="9">
                        <div class="d-flex justify-space-between">
                            <div>
                                <p class="P_12 text_gray500">폴바셋 GFC점</p>
                                <p class="P_20 font-weight-bold">룽고</p>
                                <p class="P_12 text_gray300 mt-2">주문 2024.07.22 18:09</p>
                                <p class="P_12 text_gray300">픽업 2024.07.22 18:09</p>
                            </div>
                            <div class="text-end mr-2">
                                <v-chip outlined class="text_pink" color="#EA094B">픽업완료</v-chip>
                                <p class="P_12 text_gray500 mt-5">결제금액</p>
                                <p class="P_16 text_pink font-weight-bold">5,900원</p>
                            </div>
                        </div>
                    </v-col>
                </v-row>

                <!--픽업완료2-->
                <v-row cols="8" offset="2" class="white mb-1">
                    <v-col cols="3">
                        <v-img src="../assets/menuimage/커피/아이스룽고.jpg" alt="아이스룽고" style="width: 90px;" class="rounded-xl ml-2"></v-img>
                    </v-col>
                    <v-col cols="9">
                        <div class="d-flex justify-space-between">
                            <div>
                                <p class="P_12 text_gray500">폴바셋 GFC점</p>
                                <p class="P_20 font-weight-bold">룽고</p>
                                <p class="P_12 text_gray300 mt-2">주문 2024.07.22 18:09</p>
                                <p class="P_12 text_gray300">픽업 2024.07.22 18:09</p>
                            </div>
                            <div class="text-end mr-2">
                                <v-chip outlined class="text_pink" color="#EA094B">픽업완료</v-chip>
                                <p class="P_12 text_gray500 mt-5">결제금액</p>
                                <p class="P_16 text_pink font-weight-bold">5,900원</p>
                            </div>
                        </div>
                    </v-col>
                </v-row>
            </div>
        </div>
    </v-container>
</template>


<script>
export default {
    data () {
        return {
        filter: {},
        sortBy: 'name',
        order_status: [
            '주문상태(전체)',
            '주문요청',
            '주문접수',
            '준비완료',
            '수령완료',
            '미수령',
            '결제취소'
        ]
        }
    },
    computed: {
    
    },
    methods: {
    },
    }
</script>

<style scoped>
p{
    margin: 0;
    padding: 0;
}

.P_16{
    font-size: 16px;
}

.P_12{
    font-size: 12px;
}

.P_10{
    font-size: 10px;
}

.P_14{
    font-size: 14px;
}

.P_24{
    font-size: 24px;
}

.P_20{
    font-size: 20px;
}
.text_pink{
    color: #EA094B;
}

.text_gray500{
    color: #606060;
}

.text_gray300{
    color: #C1C1C1;
}

</style>