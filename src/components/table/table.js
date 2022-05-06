import React, { useState, useEffect } from 'react';
import './table.scss';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from 'axios';
import { url } from '../../config/env_variables';
import MapPopup from '../mapPopup/mapPopup';

let urlObtainHistory = `${url}/api/data/history`

const TableInfo = () => {
  //state variables to look for changes in the sensors data from the backend
  const [sensorData, setSensorData] = React.useState([])
  const [mapData, setmapData] = useState([])
  const [refreshSensorData, setRefreshSensorData] = React.useState(false)

  // State variables for notifications
  const [warning, setWarning] = useState(false)
  const [danger, setDanger] = useState(false)

  //obtain the sensors data from the backend
  const getSensorData = async () => {
    axios.get(urlObtainHistory)
      .then(res => {
        console.log(res.data)
        setSensorData(res.data.reverse())
        // setSensorData(sensorData.reverse())
        // Conditional functions for the warking anotatinos
        if (res.data.filter(e => e.risk === 'Inminent' || '').length > 0) {
          setDanger(true);
          setTimeout(() => {
            setDanger(false)
          }, "10000")
        }
        else if (res.data.filter(e => e.risk === 'High').length > 0) {
          setWarning(true);
          setTimeout(() => {
            setWarning(false)
          }, "10000")
        }
        else {
          setWarning(false);
          setDanger(false);
        }
      })
      .catch(err => {
        console.log(err)
      })
  }

  //look for changes in the state of the sensors data
  React.useEffect(() => {
    getSensorData();
  }, [refreshSensorData])


  //variables for the map dialog state
  const [isOpen, setIsOpen] = React.useState(false)

  const togglePopup = () => {
    setIsOpen(!isOpen)
    console.log(isOpen)
  }


  return (
    <div className='TableDivContainer'>
      <button type="button" className="btn btn-outline-primary refresh" onClick={() => setRefreshSensorData(!refreshSensorData)}>Refresh data</button>
      {
        warning && <p className='warning'>WARNING, the sensors are detecting an important increment</p>
      }
      {
        danger && <p className='danger'>DANGER, the sensors are detecting dangerous levels.</p>
      }
      <TableContainer component={Paper} >
        <Table>
          <TableHead>
            <TableRow >
              <TableCell align="center" className='top-row'>SENSOR</TableCell>
              <TableCell align="center" className='top-row'>CO2</TableCell>
              <TableCell align="center" className='top-row'>TEMPERATURE</TableCell>
              <TableCell align="center" className='top-row'>HUMIDITY</TableCell>
              <TableCell align="center" className='top-row'>LOCATION</TableCell>
              <TableCell align="center" className='top-row'>RISK</TableCell>
              <TableCell align="center" className='top-row'>TIME STAMP</TableCell>
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
                <TableCell align="center">{row.temperature + 'ºC'}</TableCell>
                <TableCell align="center">{row.humidity}</TableCell>
                <TableCell align="center">
                  <button type="button" class="btn btn-outline-primary refresh" onClick={togglePopup}>Show in map</button>
                  {isOpen && <MapPopup
                    latitude={row.latitudeGPS}
                    longitude={row.longitudeGPS}
                    handleClose={togglePopup}
                  />}
                </TableCell>
                <TableCell align="center" className={`${row.risk === 'Inminent' ? "darger-class" : row.risk === 'High' ? 'warning-class' : ''}`}>{row.risk} </TableCell>
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

