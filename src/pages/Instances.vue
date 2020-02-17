<template>
    <div class="row">
      <div class="col-12 mb-5">
        <card :title="table.title" :subTitle="table.subTitle">
        </card>
      </div>
      <div class="col-xl-4 col-lg-5 col-md-6" v-for="instance in table.data"  v-bind:key="instance.id">
        <card class="card-user shadow-lg">
          <div>
            <div class="author">
              <img class="avatar border-white" src="@/assets/img/debian_logo.png" alt="...">
              <h3>
                <span v-if='isRunning(instance)' class="badge badge-pill badge-success">ON</span>
                <span v-else class="badge badge-pill badge-danger">OFF</span>
              </h3>
              <h4 class="title"> {{ instance.name }} | {{ instance.image ||  'Debian 10' }}
                <br>
                <a href="#">
                  <small>@jayremy</small>
                </a>
              </h4>
            </div>
            <p class="description text-center">
              No description
            </p>
          </div>
          <hr>
          <div class="text-center">
            <div class="row">
              <div class="col-lg-3">
                <h5>Memory
                  <br>
                  <small>{{ instance.maxmem  | prettyBytes }}</small>
                </h5>
              </div>
              <div class="col-lg-3">
                <h5>Disk
                  <br>
                  <small>{{ instance.maxdisk  | prettyBytes }}</small>
                </h5>
              </div>
              <div class="col-lg-3">
                <h5>Netin
                  <br>
                  <small>{{ instance.netin  | prettyBytes }}</small>
                </h5>
              </div>
              <div class="col-lg-3">
                <h5>Netin
                  <br>
                  <small>{{ instance.netout | prettyBytes }}</small>
                </h5>
              </div>
            </div>
          </div>
          <div class="text-center mt-3">
            <router-link class="btn btn-primary stretched-link" :to="'instance/' + instance.id">Details</router-link>
            <div></div>
          </div>
        </card>
      </div>
    </div>
</template>
<script>
import { RepositoryFactory } from '../api/RepositoryFactory'
const InstancesRepository = RepositoryFactory.get('instances')

export default {
  components: {
  },
  data: function () {
    return {
      table: {
        title: 'Instances',
        subTitle: 'List of your instances',
        data: []
      }
    }
  },
  created () {
    this.fetch()
  },
  methods: {
    async fetch () {
      const { data } = await InstancesRepository.get()
      this.table.data = data
    },
    isRunning: function (instance) {
      if (instance.status === 'running') { return true }
      return false
    }
  }
}
</script>
<style>
</style>
