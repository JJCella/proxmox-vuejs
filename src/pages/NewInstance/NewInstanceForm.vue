<template>
  <card class="card" title="New Instance">
    <div>
      <form @submit.prevent>
        <div class="row">
          <div class="col-md-5">
            <fg-input type="text"
                      label="Company"
                      :disabled="true"
                      placeholder="Paper dashboard"
                      v-model="user.company">
            </fg-input>
          </div>
          <div class="col-md-3">
            <fg-input type="text"
                      label="Instance Owner"
                      :disabled="true"
                      placeholder="Username"
                      v-model="user.username">
            </fg-input>
          </div>
          <div class="col-md-4">
            <fg-input type="text"
                      label="Instance Owner Contact"
                      :disabled="true"
                      placeholder="Email"
                      v-model="user.email">
            </fg-input>
          </div>
        </div>

        <div class="row">
          <div class="col-md-4">
            <fg-input type="text"
                      label="Instance Name"
                      placeholder="Instance Name"
                      v-model="instance.name">
            </fg-input>
          </div>
        </div>

          <div class="row">
            <div class="col-md-4">
              <div class="form-group">
                <label>Image</label>
                <select class="form-control" v-model='instance.image'>
                  <option>Debian 9</option>
                  <option>Debian 10</option>
                  <option>Ubuntu 18.04</option>
                  <option>Ubuntu 18.10</option>
                </select>
              </div>
              </div>

              <div class="col-md-4">
              <div class="form-group">
                <label>Memory</label>
                <select class="form-control" v-model='instance.ram'>
                  <option>512Mo</option>
                  <option>1Go</option>
                  <option>2Go</option>
                  <option>4Go</option>
                </select>
              </div>
            </div>

            <div class="col-md-4">
              <div class="form-group">
                <label>CPU</label>
                <select class="form-control" v-model='instance.cpu'>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                </select>
              </div>
            </div>
        </div>

        <div class="row">
          <div class="col-md-12">
            <div class="form-group">
              <label>Description</label>
              <textarea rows="5" class="form-control border-input"
                        placeholder="Here can be your description"
                        v-model="instance.description">

              </textarea>
            </div>
          </div>
        </div>
        <div class="text-center">
          <p-button type="info"
                    round
                    @click.native.prevent="createInstance">
            Create Instance
          </p-button>
        </div>
        <div class="clearfix"></div>
      </form>
    </div>
  </card>
</template>
<script>
import { RepositoryFactory } from '../../api/RepositoryFactory'
import router from '../../router'
// eslint-disable-next-line no-unused-vars
const InstancesRepository = RepositoryFactory.get('instances')
export default {

  data () {
    return {
      instance: {
        name: this.generateRandomString(10),
        image: 'Debian 9',
        ram: 0,
        disk: 0,
        description: ''
      },
      user: {
        company: 'Polytech ANGERS',
        username: 'jayremy',
        email: 'jayremy120@gmail.com'
      }
    }
  },
  methods: {
    async createInstance () {
      await InstancesRepository.createInstance(this.instance)
      this.$swal.fire({
        title: 'Success!',
        text: 'Instance has been created',
        icon: 'success',
        confirmButtonText: 'Cool'
      })
      router.push('/instances')
    },
    generateRandomString (length) {
      var string = ''
      var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
      for (var i = 0; i < length; i++) { string += possible.charAt(Math.floor(Math.random() * possible.length)) }
      return string
    }
  }
}
</script>
<style>
</style>
