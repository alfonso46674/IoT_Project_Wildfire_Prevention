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

function createData(uid,sensorId, co2, temperature, humidity, location, date, time) {
  return { uid,sensorId, co2, temperature, humidity, location, date, time};
}


const rows = [
  createData(1,1,60,32,50,"clickable data","2022-11-23","15:30:02"),
  createData(2,1,60,32,50,"clickable data","2022-09-02","15:30:02"),
  createData(3,1,60,32,50,"clickable data","2022-11-01","15:30:02"),
  createData(4,1,60,32,50,"clickable data","2022-11-23","15:30:02"),
  createData(5,1,60,32,50,"clickable data","2022-11-23","15:30:02"),
  createData(6,1,60,32,50,"clickable data","2022-11-23","15:30:02"),
];

const TableInfo = () => {
  //TODO make this url only accesible from config/env_variables
  let url = "http://localhost:8080"
  const urlGetData = `${url}/api/data/history`

  const [sensorData,setSensorData] = React.useState([])

  React.useEffect(()=>{
    axios.get(urlGetData)
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
              <TableCell>Sensor</TableCell>
              <TableCell align="right">CO2</TableCell>
              <TableCell align="right">Temperature</TableCell>
              <TableCell align="right">Humidity</TableCell>
              <TableCell align="right">Location</TableCell>
              <TableCell align="right">Timestamp</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {sensorData.map((row) => (
              <TableRow
                key={row.uid}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.sensorId}
                </TableCell>
                <TableCell align="right">{row.co2}</TableCell>
                <TableCell align="right">{row.temperature}</TableCell>
                <TableCell align="right">{row.humidity}</TableCell>
                <TableCell align="right">{row.location}</TableCell>
                <TableCell align="right">{row.dateTime}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default TableInfo;

