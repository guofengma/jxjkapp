import axios from 'axios'
export default (val) => {
  axios.defaults.headers.post['Authorization'] = val
}