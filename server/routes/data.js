const router = require('express').Router()
const db = require('../helpers/database')

//returns all of the stored data
router.get('/history')

//returns the most recent data for each sensor
router.get('/recentActivity')

//returns all of the sotred data for a single sensor
router.get('/sensorData')

//Upload data to the DB and relate it to a sensor
router.post('/upload')

//Delete an entry given its data uid
router.delete('/delete')



module.exports = router
