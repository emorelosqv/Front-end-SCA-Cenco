import './assets/main.css'

/* Importacion de Bootstrap */
import 'bootstrap/dist/css/bootstrap.min.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

/* Importacion de fontawesome */
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { 
    faHouse, faBoxArchive, 
    faCalendarDays, faEye, 
    faFile, faAddressCard, faFilePdf,
    faUserInjured, faBook,
    faMagnifyingGlass, faCheck,
    faBan, faEraser, faUser, faRightFromBracket, 
    faChartPie, faUsers, faClipboardCheck, faPersonFalling
 } from '@fortawesome/free-solid-svg-icons'

/* Importacion de sweetalert */
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

/* Inlcusion de los iconos a la libreria de fontawesome */
library.add(faHouse)
library.add(faBoxArchive)
library.add(faCalendarDays)
library.add(faEye)
library.add(faFile)
library.add(faAddressCard)
library.add(faUserInjured)
library.add(faBook)
library.add(faMagnifyingGlass)
library.add(faFilePdf)
library.add(faBan)
library.add(faCheck)
library.add(faEraser)
library.add(faUser)
library.add(faRightFromBracket)
library.add(faChartPie)
library.add(faUsers)
library.add(faClipboardCheck)
library.add(faPersonFalling)

/*  Styling de sweetalert2 para cambiar los colores de los botones 
*   a la paleta de colores de censo
*/
const options = {
    confirmButtonColor: '#f7941d',
    cancelButtonColor: '#f7941d',
};

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(VueSweetalert2, options);
app.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app')
