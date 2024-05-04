import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'

// import LoginPage from '../components/pages/LoginPage';
import LoginPage from '../components/pages/LoginPage.vue'
// import RegisterPage from './components/pages/RegisterPage';
import DashboardPage from '../components/pages/DashboardPage.vue';
import PatientsPage from '../components/pages/patients/PatientList.vue';
import PatientsCreatePage from '../components/pages/patients/PatientCreate.vue';
import HistoryListPage from '../components/pages/histories/HistoryList.vue';
import HistoryCreatePage from '../components/pages/histories/HistoryCreate.vue';
import EvolutionListPage from '../components/pages/evolutions/EvolutionList.vue';
import ConfigurationPage from '../components/pages/ConfigurationPage.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: LoginPage
    },
    {
      path: '/users',
      name: 'users',
      component: PatientsPage
    },
    {
      path: '/users/create',
      name: 'users_create',
      component: PatientsCreatePage
    },
    {
      path: '/histories',
      name: 'histories',
      component: HistoryListPage
    },
    {
      path: '/histories/create',
      name: 'histories_create',
      component: HistoryCreatePage
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: DashboardPage
    },
    {
      path: '/evolution/list/:id',
      name: 'evolution_list',
      component: EvolutionListPage
    },
    {
      path: '/configuration',
      name: 'configuration',
      component: ConfigurationPage
    }
  ]
})

export default router
