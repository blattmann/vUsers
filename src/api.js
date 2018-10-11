import axios from 'axios'

const config = {
  host: window.location.host.split('.')[0],
  jsonUrl: 'https://jsonplaceholder.typicode.com/users'
}

export default {
  getAllUsers() {
    const userUrl = `${config.jsonUrl}/`
    // console.log('userUrl: ', userUrl)
    const res = axios.get(userUrl)
    // console.log('res: ', res)
    return res
  },
  getSingleUser(id) {
    const userUrl = `${config.jsonUrl}/${id}`
    console.log('userUrl: ', userUrl)
    const res = axios.get(userUrl)
    // console.log('res: ', res)
    return res
  }
}
