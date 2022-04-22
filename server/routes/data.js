const router = require('express').Router()
const db = require('../helpers/database')

//returns all of the stored data
router.get('/history',(req,res)=>{
    try{    
        //read db.json
        let dbJSON = db.read()

        res.status(200).send(dbJSON)
    }catch(error){
        res.status(400).send({'Error while obtaining the data':error})        
    }
})

//returns the most recent data for each sensor
router.get('/recentActivity')

//returns all of the stored data for a single sensor
router.get('/sensorData')

//Upload data to the DB and relate it to a sensor
router.post('/upload',(req,res)=>{
    try{
        let {co2, temperature, humidity, latitudeGPS, longitudeGPS, sensorId} = req.body
        if( co2 !== undefined && temperature !== undefined && humidity !== undefined &&
            latitudeGPS !== undefined && longitudeGPS && sensorId !== undefined)
            {
            //read the db.json
            let dbJSON = db.read()
            //create the new data to store in the db.json
            let data = {
                uid: dbJSON.length == 0 ? 1 :  Math.max.apply(Math,dbJSON.map(function(o){return o.uid;})) + 1,
                sensorId: sensorId,
                co2: co2,
                temperature: temperature,
                humidity: humidity,
                latitudeGPS: latitudeGPS,
                longitudeGPS: longitudeGPS,
                timestamp: +new Date(), //used for comparisons
                dateTime: new Date().toLocaleString() // used to display it in the front end 
                //TODO Display the dateTime in a better way, and make sure it is in UTC time
            }

            //append the data object to the db
            dbJSON.push(data)
            //save the new version of the db by overwritting the old db.json
            db.write(dbJSON)

            res.status(200).send({'Success':'Data uploaded'})
        }
    }catch(error){
        res.status(400).send({'Error while uploading the data':error})
    }
})

//Delete an entry given its data uid
router.delete('/delete',(req,res)=>{
    try{
        let uidToDelete = req.query.uid
        //delete by property and propertyValue with the db helper function
        if(db.delete('uid',parseInt(uidToDelete))){
            res.status(200).send({'Success':`Data deleted for the object with uid ${uidToDelete}` })
        } else {
            res.status(400).send({'Deletion error':`Data with the uid ${uidToDelete} does not exist`})
        }


    }catch(error){
        res.status(400).send({'Error while deleting the data':error})
    }
    
})



module.exports = router
