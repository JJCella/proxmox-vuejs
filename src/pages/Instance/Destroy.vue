<template>
  <div class="card pl-5 pr-5">
    <div>
      <h4><p class=""></p>Destroy Instance</h4>
      <p>Quam ob rem vita quidem talis fuit vel fortuna vel gloria, ut nihil posset accedere, moriendi autem sensum celeritas abstulit; quo de genere mortis difficile dictu est; quid homines suspicentur, videtis; hoc vere tamen licet dicere, P. Scipioni ex multis diebus, quos in vita celeberrimos laetissimosque viderit, illum diem clarissimum fuisse, cum senatu dimisso domum reductus ad vesperum est a patribus conscriptis, populo Romano, sociis et Latinis, pridie quam excessit e vita, ut ex tam alto dignitatis gradu ad superos videatur deos potius quam ad inferos pervenisse</p>
      <p>Sed tamen haec cum ita tutius observentur, quidam vigore artuum inminuto rogati ad nuptias ubi aurum dextris manibus cavatis offertur, inpigre vel usque Spoletium pergunt. haec nobilium sunt instituta.</p>
      <div class="text-center mt-5">
        <button type="submit" v-on:click="destroy()" class="btn btn-danger btn-fill btn-lg mb-5">Destroy</button>
      </div>
    </div>
  </div>
</template>

<script>
import { RepositoryFactory } from '../../api/RepositoryFactory'

const InstancesRepository = RepositoryFactory.get('instances')
export default {
  name: 'Destroy',
  data: function () {
    return {
      status: '',
      id: this.$route.params.id,
      data: {}
    }
  },
  created () {
  },
  methods: {
    async destroy () {
      this.$swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, destroy it!'
      }).then((result) => {
        if (result.value) {
          InstancesRepository.destroyInstance(this.id)
          this.$swal.fire(
            'Deleted!',
            'Your instance has been destroyed.',
            'success'
          ).then(() => this.$router.push('/instances'))
        }
      })
    }
  }
}
</script>

<style scoped>

</style>
