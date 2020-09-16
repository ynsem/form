<template>
  <div class="container mt-4">
    <transition name="bounce">
      <div class="row step" v-show="step === 1">
        <div class="col-sm-6 mx-auto">
          <form novalidate @submit.prevent="register">
            <div class="form-group">
              <label for="email">Email address</label>
              <input
                v-model="formData.email"
                type="email"
                class="form-control"
                id="email"
                aria-describedby="emailHelp"
              />
            </div>

            <div class="form-group">
              <label for="password">Password</label>
              <input
                v-model="formData.password"
                type="password"
                class="form-control"
                id="password"
              />
            </div>

            <!-- <div class="form-group form-check">
              <input type="checkbox" class="form-check-input" id="check" />
              <label class="form-check-label" for="check">Check me out</label>
            </div> -->

            <button @click="nextStep" type="submit" class="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </transition>

    <div class="row step" v-show="step === 2">
      <div class="col-lg-6 mx-auto text-center">
        <img src="./img/img.jpg" class="img-fluid" alt="красивая картинка" />
        <button @click="prevStep" type="button" class="btn btn-primary mt-4">
          Logout
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { required } from 'vuelidate/lib/validators';

export default {
  data() {
    return {
      step: 1,
      formData: {
        email: '',
        password: '',
      },
    };
  },
  methods: {
    nextStep() {
      if (this.step < 2) {
        this.step++;
      }
    },
    prevStep() {
      if (this.step > 1) {
        this.step--;
      }
    },

    register() {
      console.log(this.formData);
    },
  },
  validations: {
    formData: {
      email: {
        required,
      },
      password: {
        required,
      },
    },
  },
};
</script>

<style>
.bounce-enter-active {
  animation: bounce-in 0.1s;
}
.bounce-leave-active {
  animation: bounce-in 0.1s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
}
</style>
