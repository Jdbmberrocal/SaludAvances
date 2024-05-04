

<template>
  <layout-div>
    <MenuBar></MenuBar>
    <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
        <div class="flex justify-between">
        <h2>Pacientes</h2>
        <RouterLink to="/users/create" class="text-green-700 hover:text-white border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-3 py-1.5 text-center me-2 mb-2 dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-800">Green</RouterLink>
        </div>
      <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead
          class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" class="px-6 py-3">Nombre</th>
            <th scope="col" class="px-6 py-3">Apellidos</th>
            <th scope="col" class="px-6 py-3">Documento</th>
            <th scope="col" class="px-6 py-3">Dirección</th>
            <th scope="col" class="px-6 py-3">Correo</th>
            <th scope="col" class="px-6 py-3">Fecha</th>
            <th scope="col" class="px-6 py-3">Historia Clínica</th>
            <th scope="col" class="px-6 py-3">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700" v-for="user in users" :key="user.id" >
            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
              {{ user.name }}
            </th>
            <td class="px-6 py-4">{{ user.celphone }}</td>
            <td class="px-6 py-4">{{ user.type_identification }}: {{ user.identification_number }}</td>
            <td class="px-6 py-4">{{ user.address }}</td>
            <td class="px-6 py-4">{{ user.email }}</td>
            <td class="px-6 py-4">{{ user.created_at }}</td>
            <td class="px-6 py-4"><RouterLink :to="`/users/edit/${user.id}`" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Ver historia</RouterLink></td>
            <td class="px-6 py-4">
              <RouterLink :to="`/users/edit/${user.id}`" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</RouterLink>
              <!-- <RouterLink :to="`/edit/${user.id}`" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</RouterLink> -->
                <button 
                    @click="handleDelete(user.id)"
                    className="btn btn-outline-danger mx-1">
                    Delete
                </button>
            </td>
          </tr>

        </tbody>
      </table>
    </div>
  </layout-div>
</template>

<script>
import axios from 'axios'
import LayoutDiv from '../../LayoutDiv.vue'
import Swal from 'sweetalert2'
import MenuBar from '../../Menu.vue'

export default {
  name: 'ProjectList',
  components: {
    LayoutDiv,
    MenuBar,
  },
  data() {
    return {
      users: []
    }
  },
  created() {
    this.fetchProjectList()
  },
  methods: {
    fetchProjectList() {
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
    }
  }
}
</script>


<!-- https://www.binaryboxtuts.com/vue-js-tutorials/how-to-develop-login-and-registration-in-vue-js-app-using-api/ -->
<!-- https://www.binaryboxtuts.com/vue-js-tutorials/how-to-develop-vue-js-crud-app-using-a-rest-api/ -->