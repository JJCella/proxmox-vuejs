<template>
  <div>
    <div class="row">
      <div class="col-md-6 col-xl-3" v-for="stats in statsCards" :key="stats.title">
        <stats-card>
          <div class="icon-big text-center" :class="`icon-${stats.type}`" slot="header">
            <i :class="stats.icon"></i>
          </div>
          <div class="numbers" slot="content">
            <p>{{stats.title}}</p>
            {{ getStats(stats.name) }} {{ stats.postfix }}
          </div>
          <div class="stats" slot="footer">
            <i :class="stats.footerIcon"></i> {{stats.footerText}}
          </div>
        </stats-card>
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <chart-card title="Instances CPU"
                    sub-title="24 Hours performance"
                    :chart-data="usersChart.data"
                    :chart-options="usersChart.options">
          <span slot="footer">
            <i class="ti-reload"></i> Updated 3 minutes ago
          </span>
        </chart-card>
      </div>
    </div>

  </div>
</template>
<script>
import { StatsCard, ChartCard } from '@/components/index'
import Chartist from 'chartist'
import { RepositoryFactory } from '../api/RepositoryFactory'
const InstancesRepository = RepositoryFactory.get('instances')
export default {
  components: {
    StatsCard,
    ChartCard
  },
  /**
   * Chart data used to render stats, charts. Should be replaced with server data
   */
  computed: {
  },
  data () {
    return {
      stats: { instances: 0 },
      statsCards: [
        {
          type: 'warning',
          icon: 'ti-server',
          title: 'Instances',
          name: 'instances',
          footerText: 'Updated now',
          footerIcon: 'ti-reload'
        },
        {
          type: 'success',
          icon: 'ti-wallet',
          title: 'Monthy costs',
          name: 'monthly_costs',
          postfix: '€',
          footerText: 'Last day',
          footerIcon: 'ti-calendar'
        },
        {
          type: 'danger',
          icon: 'ti-pulse',
          title: 'Errors',
          name: 'errors',
          footerText: 'In the last hour',
          footerIcon: 'ti-timer'
        },
        {
          type: 'info',
          icon: 'ti-dashboard',
          title: 'Up instances',
          name: 'up_instances',
          footerText: 'Updated now',
          footerIcon: 'ti-reload'
        }
      ],
      usersChart: {
        data: {
          labels: [
            '9:00AM',
            '12:00AM',
            '3:00PM',
            '6:00PM',
            '9:00PM',
            '12:00PM',
            '3:00AM',
            '6:00AM'
          ],
          series: [
            [13, 17, 18, 12, 15, 26, 27, 20, 15],
            [13, 17, 18, 12, 15, 26, 27, 20, 15]
          ]
        },
        options: {
          low: 0,
          high: 100,
          showArea: true,
          height: '245px',
          axisX: {
            showGrid: false
          },
          lineSmooth: Chartist.Interpolation.simple({
            divisor: 3
          }),
          showLine: true,
          showPoint: false
        }
      }
    }
  },
  created () {
    this.fetch()
  },
  methods: {
    getStats (stat) {
      return this.stats[stat] || 'N/A'
    },
    async fetch () {
      const { data } = await InstancesRepository.getStats()
      this.stats = data
    }
  }
}
</script>
<style>
</style>
