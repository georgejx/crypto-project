const express = require('express')
const app = express()
const api = require('binanceapi')
const { Binance } = api // rest api
const { BinanceWS } = api // websocket api

const conf = {
    api: "tjvLGRv4UuMZKjK3f8ONS2SliWsDHbbc6qer8lK4fzOpylRTL7O3v3zKQ6ZeLmkv",
    secret: "X6rYwXPZn4zY6dYDJmTbmJV5zZMDcIrbbpuKN36P3qnvK5bauKBjfnsixVXm6CWK"
}

const client = new Binance(conf)

const clientWS = new BinanceWS()

app.get('/', (req, res) => {
  res.send('HEY!')
  client.allPrices()
    .then( (data)=> console.log(data) )
    .catch( (err)=> console.log(err) )
})
app.listen(3000, () => console.log('Server running on port 3000'))