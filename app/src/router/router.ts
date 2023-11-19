import { createWebHashHistory, createRouter } from "vue-router";
import { BASE_URL } from "@/env";
import BasePage from "@/components/chart_pages/BasePage.vue";
import BarPage from "@/components/chart_pages/BarPage.vue";


const routes = [
    {
        path: "/",
        name: "index",
        component: BasePage,
    },
    {
        path: "/bar",
        name: "bar",
        component: BarPage,
    },
];

const router = createRouter({
    history: createWebHashHistory(BASE_URL),
    routes,
});

export default router;