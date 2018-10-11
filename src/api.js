import axios from 'axios'

const config = {
  host: window.location.host.split('.')[0],
  jsonUrl: 'https://jsonplaceholder.typicode.com/users'
}

export default {
  getAllUsers() {
    const userUrl = `${config.jsonUrl}/`
    const res = axios.get(userUrl)
    return res
  },
  getSingleUser(id) {
    const userUrl = `${config.jsonUrl}/${id}`
    const res = axios.get(userUrl)
    return res
  }
}
