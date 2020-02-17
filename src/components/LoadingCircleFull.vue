<template>
  <div class="vld-parent">
    <loading :active.sync="isLoading"
             :can-cancel="true"
             :on-cancel="onCancel"
             color="#04a1dd"
             :height="128"
             :width="128"
             :is-full-page="fullPage"></loading>
  </div>
</template>

<script>
import Loading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/vue-loading.css'

export default {
  data () {
    return {
      isLoading: false,
      fullPage: true
    }
  },
  components: {
    Loading
  },
  methods: {
    start (timeout) {
      this.isLoading = true
      if (timeout) {
        this.isLoading = true
        setTimeout(() => {
          this.isLoading = false
        }, timeout)
      }
    },
    cancel () {
      this.isLoading = false
    },
    onCancel () {

    }
  }
}
</script>
