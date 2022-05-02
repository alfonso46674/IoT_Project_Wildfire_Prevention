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

let urlObtainHistory = `${url}/api/data/history`

const TableInfo = () => {

  const [sensorData,setSensorData] = React.useState([])

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
                <TableCell align="center">{row.location}</TableCell>
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

