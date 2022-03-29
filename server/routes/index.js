const router = require('express').Router()

const temperatureRoute = require('./temperature')
const dataRoute = require('./data')

router.use('/api/temperature',temperatureRoute)
router.use('/api/data',dataRoute)


//Test get route
router.get('/api/test',(req,res)=>{
    res.send({'Test':'Hello world'})
})

module.exports = router