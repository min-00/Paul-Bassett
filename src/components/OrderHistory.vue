<template>
    <v-container style="padding: 0;">
        <v-row>
            <div class="pa-3">
                <v-select
                hide-details
                v-model="order_status"
                :items="selectedStatus"
                prepend-inner-icon="mdi-magnify"></v-select>
            </div>
        
            <div>
                <v-tabs color="black" grow v-model="tab" class="P_14">
                    <v-tabs-slider color="black"></v-tabs-slider>
                    <v-tab>주문</v-tab>
                    <v-tab>예약</v-tab>
                </v-tabs>

                <div class="d-flex align-center">
                    <div class="d-flex pa-4 P_16 cPoint" @click="dateModalOpen">
                        <v-icon class="pr-3">mdi-calendar</v-icon>
                        <p>{{ startDate }}</p>
                        <p class="pl-2 pr-2"> - </p>
                        <p>{{ endDate }}</p>
                    </div>
                    <v-btn @click="dateModalOpen" class="ml-auto P_14 mr-4" color="grey" outlined rounded>기간 설정</v-btn>
                </div>
                <!--날짜모달창-->
                <div class="dateModal-wrap" v-show="dateModalCheck" @click="dateModalOpen">
                    <div class="dateModal-container" @click.stop="">
                        <div class="dateModal-btn text-center" >
                            <p>기간을 선택해주세요.</p>
                            <div>
                                <v-btn @click="calculateDate('7days')">7일</v-btn>
                                <v-btn @click="calculateDate('1month')">1개월</v-btn>
                                <v-btn @click="calculateDate('3months')">3개월</v-btn>
                                <v-btn @click="showDatePicker = !showDatePicker">직접 설정</v-btn>
                            </div>
                            <v-row>
                                <v-col>
                                    <v-text-field
                                    v-model="startDate"
                                    readonly
                                    ></v-text-field>
                                </v-col>
                                <v-col>
                                    <v-text-field
                                    v-model="endDate"
                                    readonly
                                    ></v-text-field>
                                </v-col>
                            </v-row>
                            <v-dialog v-model="showDatePicker" persistent width="290">
                                <v-date-picker
                                v-model="dates"
                                range @input="handleDateChange"
                                ></v-date-picker>
                                <v-card class="text-center">
                                <v-btn width="290" text @click="showDatePicker = false">취소</v-btn>
                                </v-card>
                            </v-dialog>
                            <p>최근 3개월까지의 이력만 조회 가능합니다.</p>
                            <v-btn @click="dateModalOpen">닫기</v-btn>
                            <v-btn @click="dateModalOpen">확인</v-btn>
                        </div>
                    </div>
                </div>

                <!--기본값(전체)-->
                <div v-if="selectedStatus === '주문상태(전체)'">
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
                <div v-if="selectedStatus === '미수령' ">
                    <div class="card">
                        <h3>상태: {{ selectedStatus }}</h3>
                        <v-list>
                            <v-list-item v-for="orderList in orderLists" :key="orderList.orderID">
                                <div class="loclist_box_title">
                                    <span>{{orderList.order_status}}</span>
                                    <span>{{orderList.address}}</span>
                                    <span> {{orderList.number}} </span>
                                </div>
                            </v-list-item>
                        </v-list>
                    </div>
                </div>
                <div v-if="selectedStatus === ''">
                    <div class="card text-center">
                        <p>주문 내역이 없습니다.</p>
                    </div>
                </div>

            </div>
        </v-row>
    </v-container>
</template>

<script>
import { statusList } from '@/datasources/order_status.js';

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
        ],
        orderLists : statusList.order_statusList,
        selectedStatus: '',
        dateModalCheck: false,
        startDate: new Date().toISOString().split('T')[0],
        endDate: new Date().toISOString().split('T')[0],
        showDatePicker: false,
        dates: [new Date().toISOString().split('T')[0], new Date().toISOString().split('T')[0]],
        
        }
    },
    computed: {
        dateRangeText () {
        return this.dates.join(' ~ ')
        },
    },
    
    methods: {

    dateModalOpen() {
        this.dateModalCheck = !this.dateModalCheck
    },
    calculateDate(period) {
        const today = new Date();
        let startDate, endDate;

        switch (period) {

            case '7days':
            endDate = today;
            startDate = new Date(today);
            startDate.setDate(today.getDate() - 7);
            break;

            case '1month':
            endDate = today;
            startDate = new Date(today);
            startDate.setMonth(today.getMonth() - 1);
            break;

            case '3months':
            endDate = today;
            startDate = new Date(today);
            startDate.setMonth(today.getMonth() - 3);
            break;

            default:
                return;
        }
        //숫자를 string으로 변경해줌
        this.startDate = startDate.toISOString().split('T')[0];
        this.endDate = endDate.toISOString().split('T')[0];
    },
    handleDateChange() {
      // dates 배열의 길이가 2일 때만 다이얼로그를 닫음
        if (this.dates.length === 2) {
        this.showDatePicker = false;
        };
        const [aDate, bDate] = this.dates;
        this.startDate = aDate;
        this.endDate = bDate
    },
    },
    watch: {
        modalCheck: function () {
        const html = document.querySelector('.  html-overflow');
        if( this.modalCheck === true ){
            html.style.overflow = 'hidden'
        } else {
            html.style.overflow = 'auto'}
        }
    }
}
</script>

<style scoped>
/* dimmed */
.dateModal-wrap {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.4);
    z-index: 20;
}
  /* modal or popup */
.dateModal-container {
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 420px;
    background: #fff;
    border-radius: 10px;
    padding: 20px;
    box-sizing: border-box;
    z-index: 20;
}
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

.cPoint{
    cursor: pointer;
}

</style>