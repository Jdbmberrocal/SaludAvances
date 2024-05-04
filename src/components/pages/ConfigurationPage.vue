<template>
    <layout-div>
      <MenuBar></MenuBar>

        <div class="w-full  p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
            <form class="space-y-6" action="#">
                <h5 class="text-xl font-medium text-gray-900 dark:text-white">Configuración</h5>
                <div class="flex flex-row space-x-3">
                  <!-- <input type="hidden" name="professional_id" id="professional_id" v-model="history.professional_id" value=""> -->
                  
                  <div class="basis-1/5">
                    <div >
                        <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nombre</label>
                        <input type="text" name="name" id="name" v-model="user.name" class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
                    </div>
                  </div>
                  <div class="basis-1/5">
                    <div>
                        <label for="lastname" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Apellidos</label>
                        <input type="text" name="lastname" id="lastname" v-model="user.lastname" class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                    </div>
                  </div>
                  <div class="basis-1/5">
                    <div >
                        <label for="celphone" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Celular</label>
                        <input type="number" name="celphone" id="pulse" v-model="user.celphone" class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                    </div>
                  </div>
                  <div class="basis-1/5">
                    <div >
                        <label for="address" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Dirección</label>
                        <input type="text" name="address" id="address" v-model="user.address" class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                    </div>
                  </div>
                  <div class="basis-1/5">
                    <div >
                        <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Correo</label>
                        <input type="email" name="email" id="email" v-model="user.email" class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                    </div>
                  </div>
                </div>
                <div class="flex flex-row space-x-3">
                  <div class="basis-1/5">
                    <div >
                        <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Contraseña</label>
                        <input type="password" name="password" id="password" v-model="user.password" class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                    </div>
                  </div>
                </div>
                

                <button type="submit" @click="handleSave()" :disabled="isSaving"
                class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Guardar configuración</button>

            </form>
        </div>

    </layout-div>
  </template>
   
  <script>
  import axios from 'axios';
  import { toast } from 'vue3-toastify';
  import 'vue3-toastify/dist/index.css';
  import LayoutDiv from '../LayoutDiv.vue';
  import Swal from 'sweetalert2'
  import MenuBar from '../Menu.vue'
   
  export default {
    name: 'ConfigurationPage',
    components: {
      LayoutDiv,
      MenuBar
    },
    
    data() {
      return {
        user: {
          name: '',
          lastname: '',
          celphone: '',
          address: '',
          email: '',
          password: ''
        },
        // users:'',
        isSaving:false,
      };
    },
    created() {
      this.getUser()
    },
    methods: {
      handleSave() {
          this.isSaving = true
          axios.put(`/users/${this.user.id}`, this.user, {  headers:{Authorization: 'Bearer ' + localStorage.getItem('token')}})
            .then(response => {
              Swal.fire({
                  icon: 'success',
                  title: 'Configuración guardada',
                  showConfirmButton: false,
                  timer: 1500
              })
              this.isSaving = false
              //
              return response
            })
            .catch(error => {
              this.isSaving = false

              if (error.response.data.errors != undefined) {
                console.log(error.response.data.errors)
                for (const campo in error.response.data.errors) {
                  toast.error(`${error.response.data.errors[campo][0]}`, {
                    autoClose: 5000,
                  });
                }
              }

              return error
            });
      },
      getUser() {
         axios.get('/user', { headers:{Authorization: 'Bearer ' + localStorage.getItem('token')}})
         .then((r) => {
            this.user = r.data;
            return r
         })
         .catch((e) => {
            return e
         });
     },
    },
  };
  </script>