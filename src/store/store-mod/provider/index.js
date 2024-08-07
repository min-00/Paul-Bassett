import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import router from "@/router"

export default {
  state: {
    User: null
  },
  mutations: {
    SetUser(state, payload) {
      state.User = payload
    }
  },
  getters: {
    GetUser(state) { // 사용자 정보
      return state.User
    },
    GetAuthStatus(state) { // 로그인 상태
      return (state.User != null)
    }
  },
  actions: {
    // 이메일 회원가입
    RegisterUser({ commit }, payload) {
      commit("SetLoading", true) // 로딩 상태로 변경

      // 파이어베이스에 이메일 회원정보 저장
      firebase.auth().createUserWithEmailAndPassword(payload.sEmail, payload.sPwd)
        .then(UserInfo => {
          // commit( "호출할 mutation 함수", "mutation 함수의 payload에 전달할 값" )
          commit("SetUser", {
            email: UserInfo.user.email
          })
          commit("SetLoading", false)  // 로딩완료 상태로 변경
          commit("SetErrorMessage", "") // 스토어 에러메시지 초기화
          router.push("/JoinEnd") // 로그인 후 main 컴포넌트로 이동
        })
        .catch(err => {
          commit("SetErrorMessage", err.message)
          commit("SetLoading", false)
        })
    },

    // 이메일 로그인
    DoLogin({ commit }, payload) {
      commit("SetLoading", true) // 로딩 상태로 변경

      // 파이어베이스에 이메일로 로그인 요청
      firebase.auth().signInWithEmailAnvkdPassword(payload.sEmail, payload.sPwd)
        .then(UserInfo => {
          // commit( "호출할 mutation 함수", "mutation 함수의 payload에 전달할 값" )
          commit("SetUser", {
            name: UserInfo.user.email
          })
          commit("SetLoading", false) // 로딩완료 상태로 변경
          commit("SetErrorMessage", "")
          router.push("/main") // 로그인 후 main 컴포넌트로 이동
        })
        .catch(err => {
          commit("SetErrorMessage", err.message)
          commit("SetLoading", false)
        })
    },

    // 구글계정 로그인(팝업)
    DoGoogleLogin_Popup({ commit }) {
      commit("SetLoading", true) // 로딩 상태로 변경 

      // 파이어베이스에 구글 계정 로그인 요청
      // 로그인제공자 객체 생성
      var oProvider = new firebase.auth.GoogleAuthProvider();
      oProvider.addScope("profile");
      oProvider.addScope("email");
      firebase.auth().signInWithPopup(oProvider)
        .then(UserInfo => {
          // commit( "호출할 mutation 함수", "mutation 함수의 payload에 전달할 값" )
          commit("SetUser", {
            id: UserInfo.user.uid,
            name: UserInfo.user.displayName,
            email: UserInfo.user.email
          })
          commit("SetLoading", false) // 로딩완료 상태로 변경
          commit("SetErrorMessage", "")
          router.push("/JoinEnd") // 로그인 후 main 컴포넌트로 이동
        })
        .catch(err => {
          commit("SetErrorMessage", err.message)
          commit("SetLoading", false)
        })
    },

    // 자동 로그인 처리
    DoLoginAuto({ commit }, UserInfo) {
      // 자동 로그인 시 스토어에 계정정보 저장
      commit("SetUser", {
        id: UserInfo.uid,
        name: UserInfo.displayName,
        email: UserInfo.email,
      })
      commit("SetLoading", false) // 로딩완료 상태로 변경
      commit("SetErrorMessage", "")
    },

    // 로그아웃
    DoLogout({ commit }) {
      firebase.auth().signOut()
      commit("SetUser", null)
      router.push("/")
    }
  }
}