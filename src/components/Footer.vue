

<template>
    

<footer class="bg-white rounded-lg shadow m-4 dark:bg-gray-800">
    <div class="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
      <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400"> <a href="#" class="hover:underline">Flowbite™</a>. All Rights Reserved.
    </span>
    <ul class="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
      <p class="hover:underline me-4 md:me-6">{{ user.name }} {{ user.lastname }} - {{ user.type }}</p>
    </ul>
    </div>
</footer>

</template>
<script>
     import axios from 'axios';
export default {
    name: 'FooterBar',
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
  
     
  
   },
};
</script>