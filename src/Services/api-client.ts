import axios from "axios";


export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: '21ead42227eb4cf3aeb7b54aae57fccc'
  }
})
