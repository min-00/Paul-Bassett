<template>
  <v-container>
    <v-row class="mt-7">
      <v-col cols="6" offset="3" sm="4" offset-sm="4">
        <v-img src="@/assets/loginimage/paul_logo.png"></v-img>
        <h4 class="text-center mt-4">회원가입</h4>
      </v-col>
    </v-row>

    <v-row class="mt-7">
      <v-col cols="10" offset="1" sm="10" offset-sm="1">
        <form @submit.prevent="RegisterUser">
          <h5>
            이메일 아이디
            <span class="crownred">*</span>
          </h5>
          <v-text-field
            name="j_user_id"
            v-model="j_user_id"
            type="email"
            outlined
            required
            class="mt-1"
            :rules="j_user_id_rule"
          ></v-text-field>

          <h5>
            비밀번호
            <span class="crownred">*</span>
          </h5>
          <v-text-field
            name="j_Password"
            v-model="j_pwd"
            :rules="j_pwd_rule"
            outlined
            required
            class="mt-1"
          ></v-text-field>

          <h5>
            비밀번호 확인
            <span class="crownred">*</span>
          </h5>
          <v-text-field
          name="j_Password_re"
          v-model="j_pwd_re"
          :rules="j_pwd_re_rule"
          outlined
          required
          class="mt-1"></v-text-field>

          <h5>
            전화번호<span class="crownred">*</span>
          </h5>
          <v-text-field
            name="phoneNumber"
            v-model="j_phonenum"
            :rules="j_phonenum_rule"
            outlined
            class="mt-1"
          ></v-text-field>

          <v-btn
            type="submit"
            color="grey darken-4"
            dark
            v-if="!getLoading"
            size="x-large"
            width="100%"
            height="50px"
          >회원가입</v-btn>
        </form>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      name: "Join",
      valid: false,
      j_user_id: "",
      j_user_id_rule: [
        v => !!v || "아이디는 필수 입력사항입니다.",
        v => /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-za-z0-9\-]+/.test(v) || "이메일 형식에 맞게 작성해주세요.",
        v => v.length > 3 || "아이디는 3자 이상 작성해주세요"
      ],
      j_pwd: "",
      j_pwd_rule: [
        v => !!v || "비밀번호는 필수 입력사항입니다.",
        v => v.length <= 16 || "비밀번호는 6~16자만 가능합니다.",
        v => v.length > 6 || "비밀번호는 6~16자만 가능합니다.",
        v =>
          /^[a-zA-Z0-9]*$/.test(v) ||
          "비밀번호는 영대소문자와 숫자만 가능합니다."
      ],
      j_pwd_re: "",
      j_pwd_re_rule: [
        v => !!v || "비밀번호 확인은 필수 입력사항입니다.",
        v => (!!v && v) === this.j_pwd || "비밀번호와 일치하지 않습니다."
      ],
      j_phonenum: "",
      j_phonenum_rule: [
        v => /^\d{3}-\d{3,4}-\d{4}$/.test(v) || "'-' 를 포함하여 숫자만 작성하여 주세요(ex. 000-0000-0000)"
      ]
    };
  },
  computed : {
    getLoading() {
        return this.$store.getters.getLoading
      },
      getErrMsg() {
        return this.$store.getters.getErrorMessage
      }
  },
  methods: {
      RegisterUser() {
          this.$store.dispatch("RegisterUser", {
            sEmail: this.j_user_id,
            sPwd: this.j_pwd
          })
      }
    },
    watch: {
      // getErrorMsg 함수가 오류 메세지를 반환했을 때 메세지 출력
      GetErrMsg(Msg) {
        if (Msg) this.Alert = true
      },
      // checkAlert 값이 false로 바뀌면 store의 오류 메세지 초기화
      Alert(Value) {
        if (Value == false) this.$store.commit("SetErrorMessage", "")
      }
    }
};
</script>

<style>
.center {
  padding-top: 24px !important ;
}
.del_pa {
  padding-top: 0;
  padding-bottom: 0;
}
.crownred {
  color: #e80a4d;
}
</style>