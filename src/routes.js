const { Router } = require('express')

const routes = Router()

const views = __dirname + "/views/"

const profile = {
  name: 'Jonyelson Lopes',
  avatar: 'https://avatars.githubusercontent.com/u/55725692?v=4',
  "monthly-budget": 2000,
  "hours-per-day": 5,
  "days-per-week": 5,
  "vacation-per-year": 4
}

routes.get('/', (request, response) => response.render(views + "index"))
routes.get('/job', (request, response) => response.render(views + 'job'))
routes.get('/job/edit', (request, response) => response.render(views + 'job-edit'))
routes.get('/profile', (request, response) => response.render(views + 'profile', { profile }))

module.exports = routes