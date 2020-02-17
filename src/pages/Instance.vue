<template>
  <div>
    <LoadingCircleFull ref="loading"></LoadingCircleFull>
    <div class="row card">
      <div class="col-12">
        <div class="table-cell">
        <img src="@/assets/img/vm.png" class="float-left">
        <a class="category"><h4>{{ data.name }}</h4></a>
        <span>
          <font-awesome-icon class="text-primary" icon="memory"></font-awesome-icon>
          {{ data.maxmem  | prettyBytes }} Memory  |
          <font-awesome-icon class="text-primary" icon="hdd"></font-awesome-icon>
          {{ data.maxdisk | prettyBytes}} Disk  |
          <font-awesome-icon class="text-primary" icon="server"></font-awesome-icon>
          Atlas Datacenter
        </span>
          <div class="float-right">
            <toggle-button @change="change" v-model="toggle" color="" :sync="true" :width="100" :height="40" :font-size="20" :labels="true"/>
          </div>
        <div>
        </div>
      </div>
      </div>
    </div>

    <div class="row">
      <div class="col-xl-5 col-lg-4 col-md-3">
        <div class="card">
          <div class="row">
            <div class="col-xl-4 col-lg-5 col-md-6">
              <ul class="nav flex-column">
                <router-link class="nav-item" to="access">Access</router-link>
                <router-link class="nav-item" to="power">Power</router-link>
                <router-link class="nav-item" to="networking">Networking</router-link>
                <router-link class="nav-item" to="destroy">Destroy</router-link>
                <router-link class="nav-item" to="noVNC">NoVNC</router-link>
              </ul>

            </div>
          </div>
        </div>
      </div>
      <div class="col-xl-7 col-lg-8 col-md-9">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import { RepositoryFactory } from '../api/RepositoryFactory'
import LoadingCircleFull from '../components/LoadingCircleFull'
const InstancesRepository = RepositoryFactory.get('instances')

export default {
  name: 'Instance',
  components: {
    LoadingCircleFull
  },
  data: function () {
    return {
      id: this.$route.params.id,
      data: {},
      timer: ''
    }
  },
  computed: {
    toggle: function () {
      if (this.data.status === 'running') { return true }
      return false
    }
  },
  mounted () {
    this.fetch()
    this.timer = setInterval(this.fetch, 15000)
  },

  beforeDestroy () {
    clearInterval(this.timer)
  },

  methods: {
    async fetch () {
      const { data } = await InstancesRepository.getInstance(this.id)
      this.data = data
    },
    cancelAutoUpdate () {
      clearInterval(this.timer)
    },

    async change (value, srcEvent) {
      this.$refs.loading.start(2000)
      if (value.value) {
        await InstancesRepository.changeInstanceStatus(this.id, 'start')
      } else {
        await InstancesRepository.changeInstanceStatus(this.id, 'stop')
      }
      this.fetch()
    }
  }
}

</script>

<style scoped>

</style>
