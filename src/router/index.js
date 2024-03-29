import { createRouter, createWebHistory } from "vue-router";
import HelloWorld from "../components/HelloWorld.vue";
import DashBoard from "../layout/DashBoard.vue";
import MemberList from "../view/member/MemberList.vue";
import Memberadd from "../view/member/Memberadd.vue";
import Memberedit from "../view/member/Memberedit.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: DashBoard,
      children: [
        {
          path: "",
          name: "about",
          component: HelloWorld,
        },
        {
          path: "/list",
          name: "list",
          component: MemberList,
        },
        {
          path: "/add",
          name: "add",
          component: Memberadd,
        },
        {
          path: "/memberedit/:id/edit",
          name: "memberedit",
          component: Memberedit,
        },
      ],
    },
  ],
});
export default router;
