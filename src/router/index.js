import Vue from 'vue';
import VueRouter from 'vue-router';
import PersonagensGot from "@/components/PersonagensGot";
import DetalharPersonagem from "@/components/DetalharPersonagem";


Vue.use(VueRouter);

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'PersonagensGot',
      component: PersonagensGot
    },
    {
      path: '/characters/:id',
      name: 'DetalharPersonagem',
      component: DetalharPersonagem
    }
  ]
});
