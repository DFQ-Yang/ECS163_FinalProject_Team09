import {draw_map} from "./map.js"
import {global_config} from "../config/global_config.js"
const {createApp} = Vue
createApp({
    //store data that needs to use in html, used for dynamic web design
    data(){
        return{

        }
    },
    //things to run when the web initially opened
    mounted(){
        draw_map();
        console.log(global_config.helloGlobal);
        console.log(global_config.helloVue3);
    },
    //methods triggered from html, such as @click.
    methods:{

    }
}).mount('#app')