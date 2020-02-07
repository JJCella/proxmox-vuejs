<template>
  <div class="container">
    <div class="d-flex align-items-center justify-content-center login-dark">
      <form @submit.prevent="auth">
        <h2 class="sr-only">Login Form</h2>
        <div class="illustration"><ion-icon name="lock-closed-outline"></ion-icon></div>

        <div class="form-group" :class="{ 'form-group--error': $v.login.email.$error }">
          <input v-model.trim.lazy="$v.login.email.$model" class="form-control" name="email" placeholder="Email">
        </div>
        <div v-if="$v.login.email.$dirty">
          <div class="error" v-if="!$v.login.email.email">Please enter a valid email address.</div>
          <div class="error" v-if="!$v.login.email.required">Email is required.</div>
        </div>

        <div class="form-group" :class="{ 'form-group--error': $v.login.password.$error }">
          <input v-model.trim.lazy="$v.login.password.$model" class="form-control" type="password" name="password" placeholder="Password">
        </div>
        <div v-if="$v.login.password.$dirty">
          <div class="error" v-if="!$v.login.password.required">Password is required.</div>
        </div>
        <p v-if="error">
          <div>{{ error }}</div>
        </p>
        <div class="form-group"><button class="btn btn-primary btn-block" :disabled="$v.$invalid" type="submit">Log In</button></div><a href="#" class="forgot">Forgot your email or password?</a></form>
    </div>
  </div>
</template>

<script>
import { required, email } from 'vuelidate/lib/validators'
export default {
  name: 'App',
  data () {
    return {
      error: null,
      loading: false,
      login: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    auth: function () {
      let email = this.login.email
      let password = this.login.password
      this.$store.dispatch('login', { email, password })
        .then(() => this.$router.push('/'))
        .catch(err => Object.assign(this.error, err.response.data.detail))

      this.loading = true
      setTimeout(() => {
        this.loading = false
      }, 5000)
    }
  },
  validations: {
    login: {
      email: {
        required,
        email
      },
      password: {
        required
      }
    }
  }
}
</script>

<style lang="scss">
  .login-dark {
    height: 500px;
    background-size:cover;
  }

  .login-dark form {
    max-width:320px;
    width:90%;
    background-color:#1e2833;
    padding:40px;
    border-radius:4px;
    color:#fff;
    box-shadow:3px 3px 4px rgba(0,0,0,0.2);
  }

  .login-dark .illustration {
    text-align:center;
    padding:15px 0 20px;
    font-size:100px;
    color:#2980ef;
  }

  .login-dark form .form-control {
    background:none;
    border:none;
    border-bottom:1px solid #434a52;
    border-radius:0;
    box-shadow:none;
    outline:none;
    color:inherit;
  }

  .login-dark form .btn-primary {
    background:#214a80;
    border:none;
    border-radius:4px;
    padding:11px;
    box-shadow:none;
    margin-top:26px;
    text-shadow:none;
    outline:none;
  }

  .login-dark form .btn-primary:hover, .login-dark form .btn-primary:active {
    background:#214a80;
    outline:none;
  }

  .login-dark form .forgot {
    display:block;
    text-align:center;
    font-size:12px;
    color:#6f7a85;
    opacity:0.9;
    text-decoration:none;
  }

  .login-dark form .forgot:hover, .login-dark form .forgot:active {
    opacity:1;
    text-decoration:none;
  }

  .login-dark form .btn-primary:active {
    transform:translateY(1px);
  }
</style>
