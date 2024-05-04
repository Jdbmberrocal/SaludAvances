

<template>
  <layout-div>
    <MenuBar></MenuBar>
    <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
        <div class="flex justify-between">
        <h2>Historia Clínica</h2>
        <RouterLink to="/histories/create" class="text-green-700 hover:text-white border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-3 py-1.5 text-center me-2 mb-2 dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-800">Crear historia Clinica</RouterLink>
        </div>
      <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead
          class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" class="px-6 py-3">Paciente</th>
            <th scope="col" class="px-6 py-3">Profesional</th>
            <th scope="col" class="px-6 py-3">Tamaño</th>
            <th scope="col" class="px-6 py-3">Pulso</th>
            <th scope="col" class="px-6 py-3">Estado</th>
            <th scope="col" class="px-6 py-3">Fecha</th>
            <th scope="col" class="px-6 py-3">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700" v-for="history in histories" :key="history.id" >
            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
              {{ history.patient.name }} {{ history.patient.lastname }}
            </th>
            <td class="px-6 py-4">{{ history.professional.name }} {{ history.professional.lastname }}</td>
            <td class="px-6 py-4">{{ history.size }} cm</td>
            <td class="px-6 py-4">{{ history.pulse }} L/m</td>
            <td class="px-6 py-4" v-if="history.state == 0"><span class="bg-yellow-100 text-yellow-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-yellow-900 dark:text-yellow-300">Egreso parcial</span></td>
            <td class="px-6 py-4" v-else-if="history.state == 1"><span class="bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300">Egreso Definitivo</span></td>
            <td class="px-6 py-4">{{ history.created_at }}</td>
            <!-- <td class="px-6 py-4"><RouterLink :to="`/users/edit/${history.id}`" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Ver historia</RouterLink></td> -->
            <td class="px-6 py-4">
              <RouterLink :to="`/evolution/list/${history.id}`" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Evoluciones</RouterLink>
              <!-- <RouterLink :to="`/edit/${user.id}`" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</RouterLink> -->
                <button v-if="history.state == 0" 
                    @click="handleDelete(history.id)"
                    className="btn btn-outline-danger mx-1">
                    Delete
                </button>
            </td>
          </tr>

        </tbody>
      </table>
    </div>
    <FooterBar></FooterBar>
  </layout-div>
</template>

<script>
import axios from 'axios'
import LayoutDiv from '../../LayoutDiv.vue'
import Swal from 'sweetalert2'
import MenuBar from '../../Menu.vue'
import FooterBar from '../../Footer.vue'

export default {
  name: 'ProjectList',
  components: {
    LayoutDiv,
    MenuBar,
    FooterBar
  },
  data() {
    return {
      histories: []
    }
  },
  created() {
    this.fetchHistoriesList()
  },
  methods: {
    fetchHistoriesList() {
      axios
        .get('/histories', { headers:{Authorization: 'Bearer ' + localStorage.getItem('token')}})
        .then((response) => {
          this.histories = response.data.clinic_histories
          return response
        })
        .catch((error) => {
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
            .delete(`/histories/${id}`, { headers:{Authorization: 'Bearer ' + localStorage.getItem('token')}})
            .then((response) => {
              Swal.fire({
                icon: 'success',
                title: 'Project deleted successfully!',
                showConfirmButton: false,
                timer: 1500
              })
              this.fetchHistoriesList()
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
    }
  }
}
</script>


<!-- https://www.binaryboxtuts.com/vue-js-tutorials/how-to-develop-login-and-registration-in-vue-js-app-using-api/ -->
<!-- https://www.binaryboxtuts.com/vue-js-tutorials/how-to-develop-vue-js-crud-app-using-a-rest-api/ -->