const { Router } = require('express')

const routes = Router()

const views = __dirname + "/views/"

const profile = {
  name: 'Jonyelson Lopes',
  avatar: 'https://github.com/JL-Sousa',
  "monthly-budget": 2000,
  "hours-per-day": 5,
  "days-per-week": 5,
  "vacation-per-year": 4
}

const jobs = []

routes.get('/', (request, response) => response.render(views + "index"))
routes.get('/job', (request, response) => response.render(views + 'job'))
routes.post('/job', (request, response) => {

  const job = request.body
  job.createdAt = Date.now()

  jobs.push()
  return response.redirect('/')
})
routes.get('/job/edit', (request, response) => response.render(views + 'job-edit'))
routes.get('/profile', (request, response) => response.render(views + 'profile', { profile }))

module.exports = routes