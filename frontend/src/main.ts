import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import axios from  './axios/axios'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
/* import specific icons */
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { faGear } from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(faUserSecret, faGear)
const app = createApp(App).component('font-awesome-icon', FontAwesomeIcon)

app.use(router)
app.use(axios, {
    baseUrl: import.meta.env.VITE_SERVER 
})

app.mount('#app')
