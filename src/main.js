import { createApp } from 'vue'
import "@fontsource/montserrat"
import './scss/styles.scss'
import App from './App.vue'

import { MotionPlugin } from '@vueuse/motion'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faSquareFacebook, faSquareTwitter, faTiktok, faInstagram } from '@fortawesome/free-brands-svg-icons'

library.add(
    faSquareFacebook,
    faSquareTwitter,
    faTiktok,
    faInstagram
)

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'




createApp(App)
.use(MotionPlugin)
.component('font-awesome-icon', FontAwesomeIcon)
.mount('#app')
