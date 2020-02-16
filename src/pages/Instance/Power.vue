<template>
  <div class="card pl-5 pr-5">
      <div v-if="status === 'running'">
      <h4><p class=""></p>Turn off Instance</h4>
      <p></p>
      <div class="text-center">
        <button type="submit" v-on:click="stop()" class="btn btn-info btn-fill btn-wd">Turn off</button>
      </div>
    </div>
    <div v-if="status === 'stopped'">
      <h4><p class=""></p>Turn on Instance</h4>
      <p>Quam ob rem vita quidem talis fuit vel fortuna vel gloria, ut nihil posset accedere, moriendi autem sensum celeritas abstulit; quo de genere mortis difficile dictu est; quid homines suspicentur, videtis; hoc vere tamen licet dicere, P. Scipioni ex multis diebus, quos in vita celeberrimos laetissimosque viderit, illum diem clarissimum fuisse, cum senatu dimisso domum reductus ad vesperum est a patribus conscriptis, populo Romano, sociis et Latinis, pridie quam excessit e vita, ut ex tam alto dignitatis gradu ad superos videatur deos potius quam ad inferos pervenisse</p>
      <p>Sed tamen haec cum ita tutius observentur, quidam vigore artuum inminuto rogati ad nuptias ubi aurum dextris manibus cavatis offertur, inpigre vel usque Spoletium pergunt. haec nobilium sunt instituta.</p>
      <div class="text-center mt-5">
        <button type="submit" v-on:click="start()" class="btn btn-info btn-fill btn-lg mb-5">Turn on</button>
      </div>
    </div>
  </div>
</template>

<script>
import {RepositoryFactory} from '../../api/RepositoryFactory'

const InstancesRepository = RepositoryFactory.get('instances')
export default {
  name: 'Power',
  data: function () {
    return {
      status: '',
      id: this.$route.params.id,
      data: {}
    }
  },
  created () {
    this.fetch()
  },
  methods: {
    async start () {
      // await InstancesRepository.changeInstanceStatus(this.id, 'start')
      this.$swal.fire({
        title: 'Success!',
        text: 'Instance has been started',
        icon: 'success',
        confirmButtonText: 'Cool'
      }).then(() => this.$router.go())
    },
    async stop () {
      await InstancesRepository.changeInstanceStatus(this.id, 'stop')
      this.$swal.fire({
        title: 'Success!',
        text: 'Instance has been stopped',
        icon: 'success',
        confirmButtonText: 'Cool'
      }).then(() => this.$router.go())
    },
    async fetch () {
      const { data } = await InstancesRepository.getInstance(this.id)
      this.status = data.status
    }
  }
}
</script>

<style scoped>

</style>
