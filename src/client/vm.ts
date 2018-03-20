// 

import router from '@/client/routes/router'
import store from '@/client/stores/store'
import App from '@/client/app/app'



export default new App({ router, store }).$mount('#app')


