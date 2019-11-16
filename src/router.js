import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
	mode: "history",
	scrollBehavior(to) {
		if (to.hash) {
			return {
				selector: to.hash
			};
		} else {
			return { x: 0, y: 0 };
		}
	},
	routes: [
		{
			path: "/",
			component: () => import("./components/Home.vue")
        },
        {
			path: "/result",
			component: () => import("./components/Results/Result.vue")
		},
		{
			path: "/loading",
			component: () => import("./components/Loader.vue")
		}
	]
});