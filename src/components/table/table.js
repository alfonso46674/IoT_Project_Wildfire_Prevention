import * as React from 'react';
import './table.css';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from 'axios';
import {url} from '../../config/env_variables';
import MapPopup from '../mapPopup/mapPopup';

let urlObtainHistory = `${url}/api/data/history`

const TableInfo = () => {
  //state variables to look for changes in the sensors data from the backend
  const [sensorData,setSensorData] = React.useState([])

  //obtain the sensors data from the backend
  React.useEffect(()=>{
    axios.get(urlObtainHistory)
    .then(res =>{
      console.log(res.data)
      setSensorData(res.data)
    })
    .catch(err => {
      console.log(err)
    })
  },[])

  
  //variables for the map dialog state
  const [isOpen, setIsOpen] = React.useState(false)

  const togglePopup = () => {
    setIsOpen(!isOpen)
    console.log(isOpen)
  }

  
  return (
    <div className='TableDivContainer'>
      <TableContainer component={Paper} style={{ width: 1200, marginLeft:'6rem'}}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell align="center">Sensor</TableCell>
              <TableCell align="center">CO2</TableCell>
              <TableCell align="center">Temperature</TableCell>
              <TableCell align="center">Humidity</TableCell>
              <TableCell align="center">Location</TableCell>
              <TableCell align="center">Risk</TableCell>
              <TableCell align="center">Timestamp</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {sensorData.map((row) => (
              <TableRow
                key={row.uid}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell align="center" component="th" scope="row">
                  {row.sensorId}
                </TableCell>
                <TableCell align="center">{row.co2}</TableCell>
                <TableCell align="center">{row.temperature}</TableCell>
                <TableCell align="center">{row.humidity}</TableCell>
                <TableCell align="center">
                  <input type="button" value="Show on map" onClick={togglePopup}/>
                  {isOpen && <MapPopup
                    latitude={row.latitudeGPS}
                    longitude={row.longitudeGPS}
                    handleClose={togglePopup}
                  />}
                  </TableCell>
                <TableCell align="center">{row.risk}</TableCell>
                <TableCell align="center">{row.dateTime}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default TableInfo;

