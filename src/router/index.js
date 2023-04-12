import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import DrinkCategories from "../views/DrinkCategories.vue";
import DrinkByLetter from "../views/DrinkByLetter.vue";
import DrinkByName from "../views/DrinkByName.vue";
import DefaultLayout from "../components/DefaultLayout.vue";
import DrinkDetails from "../views/DrinkDetails.vue";
import DrinkByCategory from "../views/DrinkByCategory.vue";
import NotFound from "../views/NotFound.vue";

const routes = [
  {
    path: "/",
    component: DefaultLayout,
    children: [
      {
        path: "/",
        name: "home",
        component: Home,
      },
      {
        path: "/by-letter/:letter?",
        name: "byLetter",
        component: DrinkByLetter,
      },
      {
        path: "/by-name/:name?",
        name: "byName",
        component: DrinkByName,
      },
      {
        path: "/drinkCategories",
        name: "drinkCategories",
        component: DrinkCategories,
      },
      {
        path: "/by-category/:id?",
        name: "byCategory",
        component: DrinkByCategory,
      },
      {
        path: "/drink/:id",
        name: "drinkDetails",
        component: DrinkDetails,
      },
    ],
  },
  {
    path: "/:pathMatch(.*)",
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
