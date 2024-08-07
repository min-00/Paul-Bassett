export default {
    state: {
        IsLoading: false, // 로딩 처리
        ErrorMessage: "" // 오류 메세지
    },
    mutations: {
        SetLoading(state, payload) {
            state.IsLoading = payload
        },
        SetErrorMessage(state, payload) {
            state.ErrorMessage = payload
        }
    },
    getters: {
        getLoading(state) {
            return state.getLoading
        },
        getErrorMsg(state) {
            return state.ErrorMessage
        }
    }
}