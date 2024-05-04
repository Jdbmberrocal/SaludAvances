<template>
    <layout-div>
      <MenuBar></MenuBar>

        <div class="w-full  p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
            <form class="space-y-6" action="#">
                <h5 class="text-xl font-medium text-gray-900 dark:text-white">Crear historia clínica</h5>
                <div class="flex flex-row space-x-3">
                  <input type="hidden" name="professional_id" id="professional_id" v-model="history.professional_id" value="">
                  <div class="basis-1/5">
                    <div >
                        <label for="weight" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Paciente</label>
                        <select name="patient_id" id="patient_id" v-model="history.patient_id" class="text-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                          <option selected>Seleccione el paciente</option>
                          <template v-for="user in users" :key="user.id">

                            <option v-if="user.type == 'paciente'" :value=" user.id">{{ user.name }} {{ user.lastname }}</option>
                          </template>
      
                        </select>
                        <!-- <input type="number" name="weight" id="weight" v-model="history.weight" class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/> -->
                    </div>
                  </div>
                  <div class="basis-1/5">
                    <div >
                        <label for="weight" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Peso</label>
                        <input type="number" name="weight" id="weight" v-model="history.weight" class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
                    </div>
                  </div>
                  <div class="basis-1/5">
                    <div >
                        <label for="size" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Estatura en centimetros</label>
                        <input type="number" name="size" id="size" v-model="history.size" class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                    </div>
                  </div>
                  <div class="basis-1/5">
                    <div >
                        <label for="pulse" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Pulso</label>
                        <input type="number" name="pulse" id="pulse" v-model="history.pulse" class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                    </div>
                  </div>
                  <div class="basis-1/5">
                    <div >
                        <label for="temperature" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Temperatura</label>
                        <input type="text" name="temperature" id="temperature" v-model="history.temperature" class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                    </div>
                  </div>
                </div>
                <div class="flex flex-row space-x-3">
                  <div class="basis-1/4">
                    <div >
                        <label for="blood_pressure" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Presión arterial</label>
                        <input type="text" name="blood_pressure" id="blood_pressure" v-model="history.blood_pressure" class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                    </div>
                  </div>
                  <div class="basis-1/4">
                    <div >
                        <label for="general_state" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Estado general</label>
                        <input type="text" name="general_state" id="general_state" v-model="history.general_state" class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                    </div>
                  </div>
                  <div class="basis-1/4">
                    <div >
                        <label for="date_time" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Fecha y hora</label>
                        <input type="datetime-local" name="date_time" id="date_time" v-model="history.date_time" class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                    </div>
                  </div>
                  <div class="basis-1/4">
                    <div >
                        <label for="antecedent" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Antecedente</label>
                        <input type="datetime" name="antecedent" id="antecedent" v-model="history.antecedent" class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                    </div>
                  </div>
                </div>
                <div class="flex flex-row space-x-3">
                  <div class="basis-1/4">
                    <div >
                        <label for="professional_concept" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Diagnostico del profesional</label>
                        <input type="text" name="professional_concept" id="professional_concept" v-model="history.professional_concept" class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                    </div>
                  </div>
                  <div class="basis-1/4">
                    <div >
                        <label for="recommendations" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Recomendaciones</label>
                        <input type="text" name="recommendations" id="recommendations" v-model="history.recommendations" class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                    </div>
                  </div>
                  <div class="basis-1/4">
                    <div >
                        <label for="recommendations" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Estado</label>
                        <select name="state" id="state" v-model="history.state" class="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                          <option selected>Seleccione un estado</option>
                          <option value="1">Cerrada</option>
                          <option value="0">Abierta</option>
                        </select>
                        <!-- <input type="text" name="recommendations" id="recommendations" v-model="history.recommendations" class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" /> -->
                    </div>
                  </div>
                </div>
                  

                
                <button type="submit" @click="handleSave()" :disabled="isSaving"
                class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Guardar historia clinica</button>

            </form>
        </div>

    </layout-div>
  </template>
   
  <script>
  import axios from 'axios';
  import { toast } from 'vue3-toastify';
  import 'vue3-toastify/dist/index.css';
  import LayoutDiv from '../../LayoutDiv.vue';
  import Swal from 'sweetalert2'
  import MenuBar from '../../Menu.vue'
   
  export default {
    name: 'ProjectCreate',
    components: {
      LayoutDiv,
      MenuBar
    },
    
    data() {
      return {
        history: {
          patient_id: '',
          professional_id: '',
          size: '',
          pulse: '',
          temperature: '',
          weight: '',
          recommendations: '',
          professional_concept: '',
          antecedent: '',
          date_time: '',
          general_state: '',
          blood_pressure: '',
          state: '',
        },
        users:'',
        isSaving:false,
      };
    },
    created() {
      this.fetchUsersList()
    },
    methods: {
      handleSave() {
          this.isSaving = true
          axios.post('/histories', this.history, {  headers:{Authorization: 'Bearer ' + localStorage.getItem('token')}})
            .then(response => {
              Swal.fire({
                  icon: 'success',
                  title: 'Historia guardada',
                  showConfirmButton: false,
                  timer: 1500
              })
              this.isSaving = false
              this.history.patient_id = ''
              this.history.professional_id =  ''
              this.history.size =  ''
              this.history.pulse =  ''
              this.history.temperature =  ''
              this.history.weight = ''
              this.history.recommendations =  ''
              this.history.professional_concept =  ''
              this.history.antecedent = ''
              this.history.date_time = ''
              this.history.general_state = ''
              this.history.blood_pressure = ''
              this.history.state = ''
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
      fetchUsersList() {
      axios
        .get('/users', { headers:{Authorization: 'Bearer ' + localStorage.getItem('token')}})
        .then((response) => {
          this.users = response.data.users
          return response
        })
        .catch((error) => {
          return error
        })
    },
    },
  };
  </script>