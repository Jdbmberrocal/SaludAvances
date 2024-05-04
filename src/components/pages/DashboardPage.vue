<template>
    <layout-div>
        <MenuBar></MenuBar>
       <div class="row justify-content-md-center">
         <div class="col-12">
             <!-- <nav class="navbar navbar-expand-lg navbar-light bg-light">
                 <div class="container-fluid">
                     <a class="navbar-brand" href="#">Dashboard</a>
                     <div class="d-flex">
                         <ul class="navbar-nav">
                             <li class="nav-item">
                                 <a @click="logoutAction()" class="nav-link " aria-current="page" href="#">Logout</a>
                             </li>
                         </ul>
                     </div>
                 </div>
             </nav> -->
             


<div class="p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
  <h2 class="text-center mt-5">Welcome, {{user?.name}}! - {{ user?.type }}</h2  >
</div>

         </div>
       </div>
    </layout-div>
 </template>
   
 <script>
 import axios from 'axios';
 import LayoutDiv from '../LayoutDiv.vue';
 import MenuBar from '../../components/Menu.vue'
   
 export default {
   name: 'DashboardPage',
   components: {
     LayoutDiv,
     MenuBar,
   },
   data() {
     return {
       user: {},
     };
   },
   created() {
     this.getUser();
     if(localStorage.getItem('token') == "" || localStorage.getItem('token') == null){
       this.$router.push('/')
     }else {
       this.getUser();
     }
  
   },
   methods: {
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
  
     logoutAction () {
       axios.post('/logout',{}, { headers:{Authorization: 'Bearer ' + localStorage.getItem('token')}})
       .then((r) => {
           localStorage.setItem('token', "")
           this.$router.push('/')
           return r
       })
       .catch((e) => {
         return e
       });
     }
  
   },
 };
 </script>