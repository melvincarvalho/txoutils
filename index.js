const fetch = require('node-fetch')

const explorerUri = 'https://chainz.cryptoid.info/marks/api.dws?q=txinfo&t='

async function gettx(tx, callback) {
  const url = explorerUri + tx
  // console.log('url', url)

  await fetch(url)
    .then(res => res.json())
    .then(json => {
      callback(null, json)
    })
}

module.exports.gettx = gettx
