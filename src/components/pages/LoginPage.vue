<template>
  <p v-if="Object.keys(validationErrors).length != 0" class="text-center">
    <small class="text-danger">Incorrect Email or Password</small>
  </p>
  <form class="max-w-sm mx-auto">
    <div class="mb-5">
      <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >Correo</label
      >
      <input
        type="email"
        id="email"
        v-model="email"
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="name@flowbite.com"
        required
      />
    </div>
    <div class="mb-5">
      <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >Contraseña</label
      >
      <input
        type="password"
        id="password"
        v-model="password"
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        required
      />
    </div>
    <div class="flex items-start mb-5">
      <div class="flex items-center h-5">
        <input
          id="remember"
          type="checkbox"
          value=""
          class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
          required
        />
      </div>
      <label for="remember" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
        >Remember me</label
      >
    </div>
    <button
      type="submit"
      :disabled="isSubmitting"
      @click="loginAction()"
      class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
    >
      Submit
    </button>
  </form>
</template>

<script>
import axios from 'axios'
//  import LayoutDiv from '../LayoutDiv.vue';

export default {
  name: 'LoginPage',
  components: {
    //  LayoutDiv,
  },
  data() {
    return {
      email: '',
      password: '',
      validationErrors: {},
      isSubmitting: false
    }
  },
  created() {
    if (localStorage.getItem('token') != '' && localStorage.getItem('token') != null) {
      this.$router.push('/dashboard')
    }
  },
  methods: {
    loginAction() {
      this.isSubmitting = true
      let payload = {
        email: this.email,
        password: this.password
      }
      axios
        .post('/login', payload)
        .then((response) => {
          console.log({ response })
          localStorage.setItem('token', response.data.accessToken)
          this.$router.push('/dashboard')
          return response
        })
        .catch((error) => {
          this.isSubmitting = false
          if (error.response.data.errors != undefined) {
            this.validationErrors = error.response.data.errors
          }
          if (error.response.data.error != undefined) {
            this.validationErrors = error.response.data.error
          }
          return error
        })
    }
  }
}
</script>
