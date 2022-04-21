const router = require('express').Router()

const dataRoute = require('./data')

router.use('/api/data',dataRoute)


//Test get route
router.get('/api/test',(req,res)=>{
    res.send({'Test':'Hello world'})
})

module.exports = router