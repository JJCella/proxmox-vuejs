<template>
<div></div>
</template>

<script>
export default {
  name: 'Logout',

  mounted: function () {
    this.logout()
  },

  methods: {
    logout: function () {
      this.$store.dispatch('logout')
        .then(() => {
          this.$router.push('/login')
        })
    }
  }
}
</script>

<style scoped>

</style>
