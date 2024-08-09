<template>
    <v-dialog v-model="isOpen" max-width="300" persistent>
        <div class="modal_card">

        <div class="modal_content">
            <div class="modal_message">
                <slot> </slot>
            </div>
        </div>

        <div class="modal_actions">
            <v-btn class="modal_confirm_button" color="black" :class="buttonClass"
            @click="handleButtonClick">
            {{ closeText }}
            </v-btn>
        </div>
        </div>
    </v-dialog>
</template>

<script>
export default {
  props: {
    isOpen: {
      type: Boolean,
      required: true
    },
    closeText: {
      type: String,
      default: '확인'
    },
    buttonType: {
      type: String,
      default: 'default'
    }
  },
  computed: {
    buttonClass() {
      return {
        'modal_confirm_button': true,
        'login_button': this.buttonType === 'login',
        'default_button': this.buttonType === 'default'
      }
    }
  },
  methods: {
    handleButtonClick() {
      if (this.buttonType === 'login') {
        this.$emit('redirectToLogin');
      } else {
        this.closeModal();
      }
    },
    closeModal() {
      this.$emit('update:isOpen', false);
    }
  }
};
</script>

<style scoped>
.modal_card {
    height: 150px;
    display: flex;
    flex-direction: column;
    background: #ffffff;
    justify-content: space-between;
}

.close_button {
    background: #000000;
}

.modal_content {
    flex-grow: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
}

.modal_confirm_button {
    width: 100%;
    height: 30px;
    color: white;
    font-size: 16px;
    /* background-color: black; */
    border-radius: 0;
    padding: 0;
    }
</style>
