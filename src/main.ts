import './assets/main.scss'
import './input.css'

import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faUserSecret, faDownload  } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faFacebook, faLinkedin  } from '@fortawesome/free-brands-svg-icons'

library.add(faUserSecret, faDownload, faGithub, faFacebook, faLinkedin )

const app = createApp(App)

app.component('font-awesome-icon', FontAwesomeIcon)
app.use(ElementPlus)

app.mount('#app')
