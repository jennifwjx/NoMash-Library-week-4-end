import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import LoginView from '../views/LoginView.vue'
import FirebaseSignupView from '@/views/FirebaseSignupView.vue'
import FirebaseLoginView from '@/views/FirebaseLoginView.vue'
import AddBookView from '@/views/AddBookView.vue'
import BookList from '@/components/BookList.vue'
import GetBookCountView from '@/views/GetBookCountView.vue'
import WeatherView from '@/views/WeatherView.vue'
import CountBookAPI from '@/views/CountBookAPI.vue'



const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginView
  },
  {
    path: '/about',
    name: 'About',
    component: AboutView
  },
  {
    path: '/FireSignup',
    name: 'FireSignup',
    component: FirebaseSignupView
  },
  {
    path: '/FireLogin',
    name: 'FireLogin',
    component: FirebaseLoginView
  },
  {
    path: '/AddBook',
    name: 'AddBook',
    component: AddBookView
  },
  {
    path: '/BookList',
    name: 'BookList',
    component: BookList
  },
  {
    path: '/BookCount',
    name: 'BookCount',
    component: GetBookCountView
  },
  {
    path: '/Weather',
    name: 'Weather',
    component: WeatherView
  }
  ,
  {
    path: '/CountBook',
    name: 'CountBook',
    component: CountBookAPI
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  // Perform logic before every route change
  if (to.name == 'About') {
    // For example, redirect to home if trying to access any other route
    alert("You can't access the page, plaese log in first!")
    next({ name: 'Login' });
  } else {
    next();
  }
});

export default router