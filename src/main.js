import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faHouse, faMagnifyingGlass, faBook, faSquarePlus, faHeart, faCircleArrowLeft, faCircleArrowRight, faUser as fasUser, faCaretDown, faCirclePlay, faShuffle, faBackwardStep, faForwardStep, faRepeat } from '@fortawesome/free-solid-svg-icons'
import { faUser as farUser, faHeart as fasHeart } from '@fortawesome/free-regular-svg-icons'


library.add(faHouse, faMagnifyingGlass, faBook, faSquarePlus, faHeart, faCircleArrowLeft, faCircleArrowRight, fasUser, farUser, faCaretDown, faCirclePlay, fasHeart, faShuffle, faBackwardStep, faForwardStep, faRepeat)

createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app')

