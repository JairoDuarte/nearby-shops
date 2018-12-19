<template>
    <section class="section section-shaped  my-0">
         <base-alert v-if="renderComponent.status" type="success" icon="ni ni-like-2" dismissible>
                <span slot="text"><strong>Success!</strong> {{renderComponent.message}}!</span>
            </base-alert>
        <div class="container " >
            
            <div class="row justify-content-center">
                <div class="col-lg-5">
                    <card type="secondary" shadow
                          header-classes="bg-white pb-5"
                          body-classes="px-lg-5 py-lg-5"
                          class="border-0">
                        <template>
                            <div class="text-muted text-center mb-3">
                                <small>Sign in with</small>
                            </div>
                            <div class="btn-wrapper text-center">
                                <base-button type="neutral">
                                    <img slot="icon" src="img/icons/common/google.svg">
                                    Google
                                </base-button>
                            </div>
                        </template>
                        <template>
                            <div class="text-center text-muted mb-4">
                                <small>Or sign in with credentials</small>
                            </div>
                            <p class="text-warning" v-if="errors.length">
    <b>Please correct the following error(s):</b>
    <ul>
      <li v-for="error in errors" :key="error.index">{{ error }}</li>
    </ul>
  </p>
                            <form role="form">
                                <base-input alternative
                                            class="mb-3"
                                            placeholder="Email"
                                            type="email"
                                            pattern="/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/"
                                            v-model="user.email"
                                            addon-left-icon="ni ni-email-83">
                                </base-input>
                                <base-input alternative
                                            type="password"
                                            v-model="user.password"
                                            placeholder="Password"
                                            addon-left-icon="ni ni-lock-circle-open">
                                </base-input>
                               
                                <div class="text-center">
                                    <base-button @click="signin" type="primary" class="my-4">Sign In</base-button>
                                </div>
                            </form>
                        </template>
                    </card>
                    <div class="row mt-3">
                        <div class="col-6">
                            <a href="#" class="text-light">
                                <small></small>
                            </a>
                        </div>
                        <div class="col-6 text-right">
                            <a href="#" @click="modalshow" class="text-light">
                                <small >Create new account</small>
                            </a>
                            <modal :show.sync="active"
                   body-classes="p-0"
                   modal-classes="modal-dialog-centered modal-sm">
                   <card type="secondary" shadow
                          header-classes="bg-white pb-5"
                          body-classes="px-lg-5 py-lg-5"
                          class="border-0">
                        <template>
                            <div class="text-muted text-center mb-3">
                                <small>Sign in with</small>
                            </div>
                            <div class="btn-wrapper text-center">
                                <base-button type="neutral">
                                    <img slot="icon" src="img/icons/common/google.svg">
                                    Google
                                </base-button>
                            </div>
                        </template>
                        <template>
                            <div class="text-center text-muted mb-4">
                                <small>Or sign up with credentials</small>
                            </div>
                            <p class="text-warning" v-if="errorsregister.length">
    <b>Please correct the following error(s):</b>
    <ul>
      <li v-for="error in errorsregister" :key="error.index">{{ error }}</li>
    </ul>
  </p>
                            <form role="form">
                                <base-input alternative
                                            class="mb-3"
                                            placeholder="Name"
                                            v-model="registeruser.name"
                                            addon-left-icon="ni ni-hat-3">
                                </base-input>
                                <base-input alternative
                                            class="mb-3"
                                            v-model="registeruser.email"
                                            placeholder="Email"
                                            addon-left-icon="ni ni-email-83">
                                </base-input>
                                <base-input alternative
                                            type="password"
                                            v-model="registeruser.password"
                                            placeholder="Password"
                                            addon-left-icon="ni ni-lock-circle-open">
                                </base-input>
                                <div class="text-muted font-italic">
                                    <small>password strength:
                                        <span class="text-success font-weight-700">strong</span>
                                    </small>
                                </div>
                                <base-checkbox>
                                    <span>I agree with the
                                        <a href="#">Privacy Policy</a>
                                    </span>
                                </base-checkbox>
                                <div class="text-center">
                                    <base-button @click="register" type="primary" class="my-4">Sign up</base-button>
                                </div>
                            </form>
                        </template>
                    </card>

                            </modal>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
import Modal from "@/components/Modal.vue";
export default {
  components: {
    Modal
  },
  data() {
    return {
      active: false,
      alert: false,
      user: {},
      registeruser: {},
      errors: [],
      renderComponent: { status: false, message: "" },
      errorsregister: []
    };
  },
  methods: {
    modalshow() {
      this.active = !this.active;
    },
    emailIsvalid(email) {
      // eslint-disable-next-line
      var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    },
    forceRerender() {
      // Remove my-component from the DOM
      this.renderComponent.status = !this.renderComponent.status;
    },
    async signin() {
      this.errors = [];
      if (
        this.user.password &&
        this.emailIsvalid(this.user.email) &&
        this.user.password.length > 7
      ) {
        try {
          let res = await this.$store.dispatch("signin", { user: this.user });
          this.$router.push({ name: "home" });
        } catch (e) {
          this.errors.push(e.data.message);
        }
      }

      if (!this.user.password) {
        this.errors.push("Password required.");
      }
      if (this.user.password.length < 8) {
        this.errors.push("Password required min 8.");
      }
      if (!this.emailIsvalid(this.user.email)) {
        this.errors.push("Input a valid Email .");
      }
    },
    register() {
      if (
        this.registeruser.password &&
        this.emailIsvalid(this.registeruser.email) &&
        this.registeruser.name
      ) {
        console.log(this.registeruser);
        this.$store
          .dispatch("register", { user: this.registeruser })
          .then(response => {
            console.log(response);
            this.modalshow();
            this.renderComponent.message = " Please Sign in";
            this.forceRerender();
          });
      }
      this.errorsregister = [];

      if (!this.registeruser.name) {
        this.errorsregister.push("Name required.");
      }
      if (!this.registeruser.password) {
        this.errorsregister.push("Password required.");
      }
      if (!this.emailIsvalid(this.registeruser.email)) {
        this.errorsregister.push("Email required.");
      }
    }
  }
};
</script>
<style>
.section {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
#main {
  height: 100vh;
}
</style>
