<template>
    <router-view></router-view>
</template>

<script>
import repository from './api/repository'

export default {
  name: 'App',
  created: function () {
    repository.interceptors.response.use((response) => {
      return response
    }, (error) => {
      if (error.response) {
        if (error.response.status === 401) {
          this.$store.dispatch('logout').then(() => this.$router.push('/login'))
        }
      }
      return Promise.reject(error)
    })
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
