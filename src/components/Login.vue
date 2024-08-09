<template>
  <v-container>
    <v-row class="mt-7">
      <v-col cols="6" offset="3" sm="4" offset-sm="4">
        <v-img src="@/assets/loginimage/paul_logo.png"></v-img>
      </v-col>
    </v-row>

    <v-row class="mt-7">
      <v-col cols="10" offset="1" sm="10" offset-sm="1">
        <form @submit.prevent="DoLogin" ref="form">
          <h5>아이디(이메일)</h5>
          <v-text-field
            name="user_id"
            v-model="user_id"
            type="email"
            outlined
            required
            class="mt-1"
            :rules="user_id_rule"
          ></v-text-field>

          <h5>비밀번호</h5>
          <v-text-field
            name="Password"
            type="password"
            v-model="pwd"
            outlined
            required
            class="mt-1"
            :rules="pwd_rule"
          ></v-text-field>

          <v-btn
            type="submit"
            color="grey darken-4"
            dark
            v-if="!getLoading"
            size="x-large"
            width="100%"
            height="50px"
          >로그인</v-btn>

          <p class="text-center mt-3">
            아직 회원이 아니신가요?
            <span class="crownred cursor" @click="toJoin">가입하기</span>
          </p>

          <v-progress-circular indeterminate :width="7" :size="70" color="green" v-if="getLoading"></v-progress-circular>

          <v-alert class="mt-3" type="error" dismissible v-model="checkAlert">
            오류메세지
            {{ getErrorMsg }}
          </v-alert>
        </form>
      </v-col>
    </v-row>
  
    <v-row class="mt-14">
      <v-col cols="3" offset="1" class="center">
        <v-divider class="box" />
      </v-col>
      <v-col cols="4">
        <p class="text-center">SNS 로그인</p>
      </v-col>
      <v-col cols="3" class="center">
        <v-divider class="box" />
      </v-col>
    </v-row>

    <v-row class="mt-2">
      <v-col cols="10" offset="1" sm="5">
        <v-img contain src="@/assets/loginimage/googlelogin.png" class="cursor" @click="DoGoogleLogin_Popup"></v-img>
      </v-col>
      <v-col cols="10" offset="1" sm="5" offset-sm="0">
        <v-img contain src="@/assets/loginimage/kakaologin.png" class="cursor"></v-img>
      </v-col>
    </v-row>
  </v-container>
</template>


<script>
export default {
  mounted() {
    // 사용자 배열을 로컬스토리지에 저장
    const users = [
      { id: 1, uid: "111111@naver.com", upw: "123456", uname: '유저1' },
      { id: 2, uid: "222222", upw: "1234", uname: '유저2' },
      { id: 3, uid: "333333", upw: "1234", uname: '유저3' },
      { id: 4, uid: "444444", upw: "1234", uname: '유저4' },
    ];
    localStorage.setItem('users', JSON.stringify(users));
  },
  data() {
    return {
      name: "Login",
      valid: false,
      user_id: "",
      user_id_rule: [
        v => !!v || "아이디를 작성해주세요",
        v =>
          /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-za-z0-9\-]+/.test(v) ||
          "이메일 형식에 맞게 작성해주세요.",
          v => v.length > 3 || "아이디는 3자 이상 작성해주세요"
        ],
        pwd: "",
        pwd_rule: [
          v => !!v || "비밀번호를 작성해주세요",
          v => v.length <= 16 || "비밀번호는 6~16자로 작성해주세요",
          v => v.length > 6 || "비밀번호는 6~16자로 작성해주세요"
        ],
        checkAlert: false,
      };
  },
  computed: {
    getLoading() {
      this.$store.getters.getisLoading;
    },
    getErrorMsg() {
      this.$store.getters.getErrorMsg;
    }
  },
  methods: {
    DoGoogleLogin_Popup() { // 스토어에 구글계정 로그인 처리 요청
        this.$store.dispatch("DoGoogleLogin_Popup")
      },
      toJoin() {
      this.$router.push("Join");
    },
    DoLogin() {
      const users = JSON.parse(localStorage.getItem('users')) || [];
      const user = users.find(u => u.uid === this.user_id && u.upw === this.pwd);

      if (user) {
        alert(`환영합니다, ${user.uname}님.`);
        localStorage.setItem('loggedInUser', JSON.stringify(user));
        this.$router.push('/');
      } else {
        alert('아이디 또는 비밀번호를 확인해주세요.');
      }

      this.$store.dispatch("DoLogin", {
        // 전송할 데이터(payload)
        sEmail: this.user_id,
        sPwd: this.pwd
      });
    }
  },
  watch: {
    // getErrorMsg 함수가 오류 메세지를 반환했을 때 메세지 출력
    getErrorMsg(errMsg) {
      if (errMsg) {
        this.checkAlert = true;
      }
    },
    checkAlert(val) {
      // checkAlert 값이 false로 바뀌면 store의 오류 메세지 초기화
      if (val === false) {
        this.$store.commit("setErrorMsg", "");
      }
    }
  }
};
</script>

<style>
.center {
  padding-top: 24px !important ;
}

.crownred {
  color: #e80a4d;
}

.cursor {
  cursor: pointer;
}
</style>