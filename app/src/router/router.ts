import { createRouter, createWebHistory } from "vue-router";
import { Paths } from "../types/types";
import Home from "../components/pages/Home.vue";
import Exercise from "../components/pages/Exercises.vue";
import Workouts from "../components/pages/Workouts.vue";
import Login from "../components/pages/Login.vue";
import { useSessionStore } from "../store/sessionStore";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: Paths.Home,
      name: "Home",
      component: Home,
    },
    {
      path: Paths.Exercises,
      name: "Exercises",
      component: Exercise,
    },
    {
      path: Paths.Workouts,
      name: "Workouts",
      component: Workouts,
    },
    {
      path: Paths.Login,
      name: "Login",
      component: Login,
    },
  ],
});

router.beforeEach((to, from, next) => {
  const store = useSessionStore();
  if (to.fullPath === Paths.Workouts && !store.session) {
    next(Paths.Login);
  }
  next();
});

export default router;
