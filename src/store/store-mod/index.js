import Vue from "vue"
import Vuex from "vuex"
import modCommon from "./store-mod/common"
import modProvider from "./store-mod/provider"

Vue.use(Vuex)

// 규모에 따라 스토어를 모듈로 분리하여 사용
// common : 로딩상태, 에러 처리 등 공통 정보
// provider : 구글, 이메일 인증 처리
export default new Vuex.Store({
  modules: {
    common: modCommon,
    provider: modProvider
  }
})