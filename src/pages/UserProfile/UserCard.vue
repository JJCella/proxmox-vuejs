<template>
  <card class="card-user">
    <div slot="image">
      <img src="@/assets/img/background.jpg" alt="...">
    </div>
    <div>
      <div class="author">
        <img class="avatar border-white" src="@/assets/img/snake_black_mini.png" alt="...">
        <h4 class="title">Jérémy CELLA
          <br>
          <a href="#">
            <small>@jayremy</small>
          </a>
        </h4>
      </div>
      <p class="description text-center">
        Power User | Moderator
      </p>
    </div>
    <hr>
    <div class="text-center">
      <div class="row">
        <div v-for="(info, index) in details" :key="index" :class="getClasses(index)">
          <h5>{{info.title}}
            <br>
            <small>{{info.subTitle}}</small>
          </h5>
        </div>
      </div>
    </div>
  </card>
</template>
<script>
export default {
  data () {
    return {
      details: [
        {
          title: '2',
          subTitle: 'Instances'
        },
        {
          title: '15GB',
          subTitle: 'Used'
        },
        {
          title: '10€',
          subTitle: 'Spent'
        }
      ]
    }
  },
  methods: {
    getClasses (index) {
      var remainder = index % 3
      if (remainder === 0) {
        return 'col-lg-3 offset-lg-1'
      } else if (remainder === 2) {
        return 'col-lg-4'
      } else {
        return 'col-lg-3'
      }
    }
  }
}
</script>
<style>
</style>
