import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap/dist/css/bootstrap.min.css'
import { initializeApp } from "firebase/app";

import PrimeVue from 'primevue/config'
import Aura from '@primevue/themes/aura'

const app = createApp(App)
app.use(PrimeVue, { theme: { preset: Aura } })
app.use(router)

const firebaseConfig = {
  apiKey: "AIzaSyCd9kded6na7d-GR5dpBUvlP1IRnFG4caw",
  authDomain: "week7-feng.firebaseapp.com",
  projectId: "week7-feng",
  storageBucket: "week7-feng.appspot.com",
  messagingSenderId: "719766904132",
  appId: "1:719766904132:web:b64206aad757ec04158b11"
};

initializeApp(firebaseConfig);
app.mount('#app')
