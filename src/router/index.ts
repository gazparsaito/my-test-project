import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import TabsPage from '../views/TabsPage.vue';
import LoginScreen from '../views/LoguinScreen.vue';
// import Tab1Page from '@/views/Tab1Page.vue';


const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/login', // Redireciona para a tela de login
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginScreen,
  },
  {
    path: '/tabs',
    name: 'Tabs',
    component: TabsPage,
    children: [
      {
        path: 'tab1',
        name: 'Tab1',
        component: () => import('@/views/Tab1Page.vue'),
      },
      {
        path: 'tab2',
        name: 'Tab2',
        component: () => import('@/views/Tab2Page.vue'),
      },
      {
        path: 'tab3',
        name: 'Tab3',
        component: () => import('@/views/Tab3Page.vue'),
      },
      {
        path: 'tab4',
        name: 'Tab4',
        component: () => import('@/views/Tab4Page.vue'),
      },
      {
        path: '',
        redirect: '/tabs/tab1', // Redirecionamento padrão
      },
    ],
  },
];


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});

export default router;
