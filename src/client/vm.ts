// 

import 'animate.css/animate.css'
// import 'bootstrap/scss/bootstrap.scss'
import '@ibm/plex/scss/ibm-plex.scss'
import 'mdi/scss/materialdesignicons.scss'
import '@/client/styles/styles.scss'
import '@/client/styles/styles.css'

import router from '@/client/routes/router'
import store from '@/client/stores/store'
import App from '@/client/app/app'



export default new App({ router, store }).$mount('#app')


