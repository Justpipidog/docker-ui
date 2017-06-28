const request = require('../lib/request')

module.exports = {
  list,
  read,
  destroy,
  prune,
}

async function list(req, res) {
  try {
    res.send(await request('get', 'images/json'))
  }
  catch(e) {
    res.status(500).send(e)
  }
}

async function read(req, res) {
  try {
    res.send(await request('get', `images/${req.params.id}/json`))
  }
  catch(e) {
    res.status(500).send(e)
  }
}

async function destroy(req, res) {
  try {
    const response = await request('delete', `images/${req.params.id}`)

    res.send(response)
  }
  catch(e) {
    res.status(500).send(e)
  }
}

async function prune(req, res) {
  try {
    const response = await request('post', 'images/prune')

    res.send(response)
  }
  catch(e) {
    res.status(500).send(e)
  }
}
