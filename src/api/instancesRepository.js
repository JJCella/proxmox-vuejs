import repository from './repository'

const resource = '/users/me/vms'

export default {
  get () {
    return repository.get(`${resource}`)
  },
  getInstance (instanceId) {
    return repository.get(`${resource}/${instanceId}`)
  },
  createInstance (payload) {
    return repository.post(`${resource}`, payload)
  },

  destroyInstance (instanceId) {
    return repository.delete(`${resource}/${instanceId}`)
  },

  changeInstanceStatus (instanceId, status) {
    return repository.post(`${resource}/${instanceId}/${status}`)
  },

  getStats () {
    return repository.get('/users/me/stats')
  }
}
