<template>
    <v-container class="grey lighten-4">
        <v-row cols="12" class="brown darken-3 pa-2 P_20 text_white">
            <v-col cols="4">
                <h4>주문번호</h4>
            </v-col>
            <v-col cols="6">
                <h3 >No238562312</h3>
            </v-col>
            <v-col cols="2">
                <p class="ml-auto">2024.08.09</p>
            </v-col>
        </v-row>
        
        <v-row>
            <v-col md="10" offset-md="1">
                <v-card class="text-center">
                    <p class="P_14 pt-3">주문을 곧 확인하겠습니다.</br>잠시만 기다려주세요.</p>
                        <div class="d-flex align-center P_14">
                            <div>
                                <div class="pa-4 circle brown darken-2 mt-8">
                                    <v-icon x-large dark>notes</v-icon>
                                </div>
                                <p class="mt-5">주문요청</p>
                            </div>
                            <v-divider></v-divider>
                            <div>
                                <div class="pa-4 circle brown darken-2 mt-8">
                                    <v-icon x-large dark>notes</v-icon>
                                </div>
                                <p class="mt-5">주문요청</p>
                            </div>
                            <v-divider></v-divider>
                            <div>
                                <div class="pa-4 circle brown darken-2 mt-8">
                                    <v-icon x-large dark>notes</v-icon>
                                </div>
                                <p class="mt-5">주문요청</p>
                            </div>
                            <v-divider></v-divider>
                            <div>
                                <div class="pa-4 circle brown darken-2 mt-8">
                                    <v-icon x-large dark>notes</v-icon>
                                </div>
                                <p class="mt-5">주문요청</p>
                            </div>
                        </div>
                </v-card>
            </v-col>
        </v-row>

        <v-card>
            <v-row>
            <v-col md="10" offset-md="1" class="text-center">
                <p class="P_14 pa-3">주문을 곧 확인하겠습니다.</br>잠시만 기다려주세요.</p>
                <div class="d-flex P_14">
                    <v-col cols="3">
                        <span class="pa-4 circle brown darken-2">
                            <v-icon x-large dark>notes</v-icon>
                        </span>
                        <p class="mt-5">주문요청</p>
                    </v-col>
                    <v-col cols="3">
                        <span class="pa-4 circle grey lighten-2">
                            <v-icon x-large dark>approval</v-icon>
                        </span>
                        <p class="mt-5 text_gray300">주문확인</p>
                    </v-col>
                    <v-col cols="3">
                        <span class="pa-4 circle grey lighten-2">
                            <v-icon x-large dark>hourglass_empty</v-icon>
                        </span>
                        <p class="mt-5 text_gray300">픽업대기</p>
                    </v-col>
                    <v-col cols="3">
                        <span class="pa-4 circle grey lighten-2">
                            <v-icon x-large dark>check</v-icon>
                        </span>
                        <p class="mt-5 text_gray300">픽업완료</p>
                    </v-col>
                </div>
            </v-col>
            </v-row>
        </v-card>

        <v-row cols="12" class="white mt-7 pa-2">
            <v-col cols="12">
            <p class="P_14 font-weight-bold">주문 매장</p>
            <h3 class="P_24 text_pink mt-1">폴바셋GFC점</h3>
            <p class="P_14 text_gray300">서울특별시 강남구 테헤란로 152 강남파이낸스센터 지하 1층</p>
                <div class="d-flex justify-space-between ">
                <v-btn outlined rounded class="P_14 mt-6">070-8998-8984 <v-icon small>perm_phone_msg</v-icon></v-btn>
                <a href="#none" class="P_12 text_gray500 mt-auto">카카오 지도 보기<v-icon class="pl-1">keyboard_arrow_right</v-icon></a>
                </div>
            </v-col>
        </v-row>

        <v-row class="white mt-6 pl-10 pr-10">
            <v-col cols="12" class="d-flex P_12" style="padding: 20px 0 0;">
                <p>주문내역</p>
                <p>1개</p>
                <p class="ml-auto">나만의 메뉴 등록하기 <v-icon class="pl-1">favorite</v-icon></p>
            </v-col>
            <v-col cols="12" class="d-flex justify-space-between" style="padding: 0;">
                <v-col cols="4">
                    <v-img src="../assets/menuimage/커피/아이스룽고.jpg" alt="아이스룽고" style="width: 110px;" class="rounded-xl ml-2"></v-img>
                </v-col>
                <v-col cols="8" class="pa-5">
                    <div class="d-flex justify-space-between P_16">
                        <p>룽고</p>
                        <p>4,900원</p>
                    </div>
                    <div class="d-flex justify-space-between P_12 text_gray300">
                        <p>샷추가</p>
                        <p>+1000원</p>
                    </div>
                    <p class="P_12 text_gray300">ICE</p>
                    <p class="text-end mt-8">5,900원</p>
                </v-col>
            </v-col>
            <v-col cols="12" style="padding: 0;">
                <v-divider></v-divider>
            </v-col>
            <v-col cols="12" class="d-flex justify-space-between P_24 pa-4 font-weight-bold">
                <p class="text_brown">결제 금액</p>
                <p class="text_pink">4,900원</p>
            </v-col>
        </v-row>

        <v-row class="white mt-6 pa-2">
            <v-col cols="12">
            <div class="d-flex justify-space-between">
                <p class="text_brown P_14">결제 방법</p>
                <p class="P_12 text_gray500">카카오페이 결제</p>
            </div>
            <a href="#none" class="text_gray300 P_12">결제내역 자세히 보기<v-icon class="pl-1">keyboard_arrow_right</v-icon></a>
            </v-col>
        </v-row>
        <div class="text-center mt-5">
            <v-btn color="black" class="text_white pa-4 ma-2" style="width: 210px;" large>그대로 메뉴 담기</v-btn>
            <v-btn color="grey lighten-1" class="pa-3 ma-2" style="width: 210px;" large>영수증 보기</v-btn>
        </div>
    </v-container>
</template>


<script>
import { CommonOption } from '@/datasources/StoreList';

export default{
    name:"OrderInfo",
    data(){
        return{

        }
    },
    computed: {

    },
    components: {

    },
    methods:{
        
        }
}

</script>

<style scoped>
p{
    margin: 0;
    padding: 0;
}

v-col{
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

.text_white{
    color: #FFFFFF;
}
.text_brown{
    color: #503629;
}
</style>
