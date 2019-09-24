import axios from 'axios'

export default axios.create({
  baseURL: "https://api.unsplash.com/" ,
  headers: {
    Authorization: 'Client-ID 301668726b45ee5e2b280e3d4fa67d31d7bf996b4ffcb65e88bb92df6b1d497e'
  }
})