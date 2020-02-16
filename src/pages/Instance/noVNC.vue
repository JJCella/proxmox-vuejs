
<template>
  <div>
  <div class="row">
    <div class="text-center col-12 mb-5">
      <button class="btn btn-round btn-info" v-if="!this.rfb" @click="connect">Connect</button>
      <div v-if="this.rfb">
        <button class="btn btn-round btn-danger" @click="disconnect">Disconnect</button>
        <button class="btn btn-round btn-danger" @click="disconnect">Shutdown</button>
        <button class="btn btn-round btn-danger" @click="disconnect">Reboot</button>
      </div>
    </div>

  </div>
    <div class="row">
      <div ref="view" id="view"></div>
    </div>
  </div>
</template>

<script>
import RFB from '@novnc/novnc/core/rfb'
export default {
  name: 'noVNC',
  props: {
    websockify: String
  },
  data () {
    return {
      rfb: null,
      passwd: ''
    }
  },

  methods: {
    connect () {
      if (!this.rfb) { this.rfb = new RFB(this.$el.lastChild, 'ws://192.168.30.100:6080') }
    },
    disconnect () {
      if (this.rfb) {
        this.rfb.disconnect()
        this.rfb = null
      }
    }
  },
  mounted () {
  }
}
</script>
