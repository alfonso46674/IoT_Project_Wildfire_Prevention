if(process.env.NODE_ENV === 'development'){
    require('dotenv').config();

    module.exports = {
        port: 8081,
        url: 'http://localhost:8081'
    }

    
}else if(process.env.NODE_ENV === 'production'){
    module.exports = {
        port: 8081,
        url:'https://iot-wildfire.mybluemix.net'
    }
}