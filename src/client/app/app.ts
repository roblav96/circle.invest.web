// 

import * as Vts from 'vue-property-decorator'
import { mixins as Mixins } from 'vue-class-component'
import Vue from 'vue'
import _ from 'lodash'
import NavBar from '@/client/components/navbar/navbar'



@Vts.Component({
	components: {
		'v-navbar': NavBar,
	},
})
export default class extends Vue {

	initing = true
	mounted() {
		setTimeout(() => {
			this.initing = false
			window.scrollTo({ top: 0, behavior: 'instant' })
		}, 1)
		setTimeout(() => delete this.initing, 300)
	}

}


