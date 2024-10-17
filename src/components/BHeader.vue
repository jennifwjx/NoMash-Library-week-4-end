<template>
  <!-- Using Bootstrap's Header template (starter code) -->
  <!-- https://getbootstrap.com/docs/5.0/examples/headers/ -->
  <div class="container">
    <header class="d-flex justify-content-center py-3">
      <ul class="nav nav-pills">
        <li class="nav-item">
          <router-link to="/" class="nav-link" active-class="active" aria-current="page">Home (Week 5)</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/login" class="nav-link" active-class="active">Login</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/about" class="nav-link" active-class="active">About</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/FireSignup" class="nav-link" active-class="active">Firebase Signup</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/FireLogin" class="nav-link" active-class="active">Firebase Login</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/AddBook" class="nav-link" active-class="active">Add Book</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/BookList" class="nav-link" active-class="active">Book list</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/BookCount" class="nav-link" active-class="active">Count Book</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/Weather" class="nav-link" active-class="active">Weather check</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/CountBook" class="nav-link" active-class="active">Book count</router-link>
        </li>
        <li class="nav-item">
          <button to="/logout" class="nav-link" @click="clearForm">Log Out
          </button>
        </li>
      </ul>
    </header>
  </div>
</template>

<style scoped>
.b-example-divider {
  height: 3rem;
  background-color: rgba(0, 0, 0, 0.1);
  border: solid rgba(0, 0, 0, 0.15);
  border-width: 1px 0;
  box-shadow:
    inset 0 0.5em 1.5em rgba(0, 0, 0, 0.1),
    inset 0 0.125em 0.5em rgba(0, 0, 0, 0.15);
}

.form-control-dark {
  color: #fff;
  background-color: var(--bs-dark);
  border-color: var(--bs-gray);
}
.form-control-dark:focus {
  color: #fff;
  background-color: var(--bs-dark);
  border-color: #fff;
  box-shadow: 0 0 0 0.25rem rgba(255, 255, 255, 0.25);
}

.bi {
  vertical-align: -0.125em;
  fill: currentColor;
}

.text-small {
  font-size: 85%;
}

.dropdown-toggle {
  outline: 0;
}
</style>

<script setup>
import router from '@/router';
const clearForm = () => {
  // formData.value = {
  //   username: '',
  //   password: '',
  //   confirmPassword: '',
  //   isAustralian: false,
  //   reason: '',
  //   gender: ''
  // };
  alert("Log Out successful!")
  router.push({name : 'Login'})}
</script>