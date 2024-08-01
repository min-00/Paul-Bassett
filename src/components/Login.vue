<template>
    <v-container>
        <v-row class="mt-7">
        <v-col cols="6" offset="3" sm="4" offset-sm="4" >
            <v-img  
            src="@/assets/loginimage/paul_logo.png"></v-img>
        </v-col>
    </v-row>

<v-row class="mt-7">
<v-col cols="10" offset="1"  sm="10" offset-sm="1">
    <form action="">
        <h5>아이디</h5>
        <v-text-field
                    name="Email"
                    type="email"
                    v-model="email"
                    outlined
                    required
                ></v-text-field>

                <h5>비밀번호</h5>
                <v-text-field
                    name="Password"
                    type="password"
                    v-model="pwd"
                    outlined
                    required
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

                <v-progress-circular
                    indeterminate
                    :width="7"
                    :size=70
                    color="green"
                    v-if="getLoading"
                ></v-progress-circular>

                <v-alert
                    class="mt-3"
                    type="error"
                    dismissible
                    v-model="checkAlert"
                >
                    오류메세지
                    {{ getErrorMsg }}
                </v-alert>
    </form>
</v-col>
</v-row>
    </v-container>

</template>
<script>
    export default{
        name: "Login"
    }

</script>