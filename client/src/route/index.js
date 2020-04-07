import Vue from 'vue';
import VueRouter from 'vue-router'

Vue.use(VueRouter)

//load components

import Index from '../components/Index/index.vue'
import AddTask from '../components/Addtask/index.vue'
import ShowTask from '../components/Showtask/index.vue'
import Whatidid from '../components/Whatidid/index.vue'
var router = new VueRouter({
    mode: "history",
    routes: [
        { path: "/", name: "index", component: Index },
        { path: "/addtask", name: "addtask", component: AddTask },
        { path: "/showtask/:id", name: "showtask", component: ShowTask },
        { path: "/whatidid", name: "whatidid", component: Whatidid },


    ]
})

export default router