// 

import 'animate.css'
import '@ibm/plex/css/ibm-plex.css'
import 'mdi/css/materialdesignicons.css'

import router from '@/client/routes/router'
import store from '@/client/stores/store'
import App from '@/client/app/app'



export default new App({ router, store }).$mount('#app')


