<template>
  <layout-div>
    <MenuBar></MenuBar>
    <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
      <div class="flex justify-between">
        <h2 class="text-lg text-gray-900 dark:text-white p-3">Evoluciones</h2>
        <!-- <RouterLink
          to="/users/create"
          class="text-green-700 hover:text-white border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-3 py-1.5 text-center me-2 mb-2 dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-800"
          >Crear historia Clinica</RouterLink> -->
      </div>
      <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead
          class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
        >
          <tr>
            <th scope="col" class="px-6 py-3">Información del paciente</th>
            <th scope="col" class="px-6 py-3">Concepto medico</th>
            <th scope="col" class="px-6 py-3">Tipo de diagnostico</th>
            <th scope="col" class="px-6 py-3">Pronotico</th>
            <th scope="col" class="px-6 py-3">Estado</th>
            <th scope="col" class="px-6 py-3">Fecha</th>
            <th scope="col" class="px-6 py-3">Action</th>
          </tr>
        </thead>

        <tbody>
          <tr
            class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700"
            v-for="evolution in evolutions"
            :key="evolution.id"
          >
            <th
              scope="row"
              class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              {{ evolution.patient_information }}
            </th>
            <td class="px-6 py-4">{{ evolution.medical_concept }}</td>
            <td class="px-6 py-4">{{ evolution.type_diagnosis }}</td>
            <td class="px-6 py-4">{{ evolution.forecast }}</td>
            <td class="px-6 py-4">{{ evolution.exit }}</td>
            <td class="px-6 py-4">{{ evolution.created_at }}</td>
            <!-- <td class="px-6 py-4"><RouterLink :to="`/users/edit/${history.id}`" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Ver historia</RouterLink></td> -->
            <td class="px-6 py-4">
              <button @click="handleDelete(evolution.id)" v-if="evolution.exit == 'No'" className="btn btn-outline-danger mx-1">
                Delete
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
      <!-- clinic_history_id
patient_information
medical_concept
principal_diagnostic
related_diagnosis
type_diagnosis
forecast
exit
date_hours -->
      <form class="max-w-sm mx-auto mt-5" action="#" method="post" @submit.prevent="handleSave">
        <!-- <input type="hidden" name="clinic_history_id" v-model="evolution.clinic_history_id" > -->
        <div class="mb-5">
          <label
            for="patient_information"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >Información del paciente</label
          >
          <input
            type="text"
            id="patient_information"
            v-model="evolution.patient_information"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />
        </div>
        <div class="mb-5">
          <label
            for="medical_concept"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >Concepto Medico</label
          >
          <input
            type="text"
            id="medical_concept"
            v-model="evolution.medical_concept"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />
        </div>
        <div class="mb-5">
          <label
            for="principal_diagnostic"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >Diagnostico Principal</label
          >
          <input
            type="text"
            id="principal_diagnostic"
            v-model="evolution.principal_diagnostic"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />
        </div>
        <div class="mb-5">
          <label
            for="related_diagnosis"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >Diagnostico Relacionado</label
          >
          <input
            type="text"
            id="related_diagnosis"
            name="related_diagnosis"
            v-model="evolution.related_diagnosis"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
        <div class="mb-5">
          <label
            for="type_diagnosis"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >Tipo de Diagnostico</label
          >

          <select
            v-model="evolution.type_diagnosis"
            class="text-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option selected>Seleccione el paciente</option>
            <option>Nuevo</option>
            <option>Presuntivo</option>
            <option>Sintomático</option>
            <option>Anatomico</option>
            <option>Direfencial</option>
            <option>Certeza</option>
          </select>
        </div>
        <div class="mb-5">
          <label for="forecast" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >Pronostico</label
          >

          <select
            v-model="evolution.forecast"
            class="text-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option selected>Seleccione el paciente</option>
            <option>Bueno</option>
            <option>Regular</option>
            <option>Malo</option>
          </select>
        </div>
        <div class="mb-5">
          <label for="forecast" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >Salida</label
          >

          <select
            v-model="evolution.exit"
            class="text-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option selected>Seleccione el paciente</option>
            <option>Si</option>
            <option>No</option>
          </select>
        </div>

        <!-- @submit.prevent="handleSave()" -->
        <button
          type="submit"
          :disabled="isSaving"
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Guardar evolución
        </button>
      </form>
    </div>
  </layout-div>
</template>

<script>
import axios from 'axios'
import { toast } from 'vue3-toastify'
import 'vue3-toastify/dist/index.css'
import LayoutDiv from '../../LayoutDiv.vue'
import Swal from 'sweetalert2'
import MenuBar from '../../Menu.vue'

export default {
  name: 'ProjectList',
  components: {
    LayoutDiv,
    MenuBar
  },
  data() {
    return {
      evolutions: [],
      evolution: {
        clinic_history_id: '',
        patient_information: '',
        medical_concept: '',
        principal_diagnostic: '',
        related_diagnosis: '',
        type_diagnosis: '',
        forecast: '',
        exit: '',
        date_hours: ''
      }
    }
  },
  created() {
    const id = this.$route.params.id
    this.fetchEvolutionsList(id)

    this.evolution.date_hours = this.obtenerFechaHora()
    this.evolution.clinic_history_id = this.$route.params.id
  },
  methods: {
    fetchEvolutionsList(id) {
      axios
        .get(`/evolutions/list/${id}`, {
          headers: { Authorization: 'Bearer ' + localStorage.getItem('token') }
        })
        .then((response) => {
          this.evolutions = response.data.clinic_evolutions
          return response
        })
        .catch((error) => {
          return error
        })
    },
    handleSave() {
      this.isSaving = true
      axios
        .post('/evolutions', this.evolution, {
          headers: { Authorization: 'Bearer ' + localStorage.getItem('token') }
        })
        .then((response) => {
          Swal.fire({
            icon: 'success',
            title: 'Evolución guardada',
            showConfirmButton: false,
            timer: 1500
          })
          this.isSaving = false
          this.evolution.clinic_history_id = ''
          this.evolution.patient_information = ''
          this.evolution.medical_concept = ''
          this.evolution.principal_diagnostic = ''
          this.evolution.related_diagnosis = ''
          this.evolution.type_diagnosis = ''
          this.evolution.forecast = ''
          this.evolution.exit = ''
          this.evolution.date_hours = ''

          this.fetchEvolutionsList(this.id)
          return response
        })
        .catch((error) => {
          this.isSaving = false
          if (error.response != undefined) {
            if (error.response.data.errors != undefined) {
              console.log(error.response.data.errors)
              for (const campo in error.response.data.errors) {
                toast.error(`${error.response.data.errors[campo][0]}`, {
                  autoClose: 5000
                })
              }
            }
          }

          return error
        })
    },
    handleDelete(id) {
      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
          axios
            .delete(`/users/${id}`)
            .then((response) => {
              Swal.fire({
                icon: 'success',
                title: 'Project deleted successfully!',
                showConfirmButton: false,
                timer: 1500
              })
              this.fetchProjectList()
              return response
            })
            .catch((error) => {
              Swal.fire({
                icon: 'error',
                title: 'An Error Occured!',
                showConfirmButton: false,
                timer: 1500
              })
              return error
            })
        }
      })
    },
    obtenerFechaHora() {
      const fecha = new Date()

      const año = fecha.getFullYear()
      const mes = String(fecha.getMonth() + 1).padStart(2, '0')
      const dia = String(fecha.getDate()).padStart(2, '0')

      const horas = String(fecha.getHours()).padStart(2, '0')
      const minutos = String(fecha.getMinutes()).padStart(2, '0')
      const segundos = String(fecha.getSeconds()).padStart(2, '0')

      const fechaHoraFormateada = `${año}-${mes}-${dia} ${horas}:${minutos}:${segundos}`

      return fechaHoraFormateada
    }
  }
}
</script>

<!-- https://www.binaryboxtuts.com/vue-js-tutorials/how-to-develop-login-and-registration-in-vue-js-app-using-api/ -->
<!-- https://www.binaryboxtuts.com/vue-js-tutorials/how-to-develop-vue-js-crud-app-using-a-rest-api/ -->
