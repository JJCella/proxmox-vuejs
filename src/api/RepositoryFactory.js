import instancesRepository from './instancesRepository'

const repositories = {
  instances: instancesRepository
}

export const RepositoryFactory = {
  get: name => repositories[name]
}
