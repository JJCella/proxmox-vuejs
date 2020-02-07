import axios from 'axios'

const baseDomain = 'http://localhost:8080'
const baseURL = 'http://localhost:8000'

export default axios.create({ baseURL })
