import * as React from 'react';
import './table.css';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(sensorId, co2, temperature, humidity, location, date, time) {
  return { sensorId, co2, temperature, humidity, location, date, time};
}

const rows = [
  createData(1,60,32,50,"clickable data","2022-11-23","15:30:02"),
  createData(1,60,32,50,"clickable data","2022-09-02","15:30:02"),
  createData(1,60,32,50,"clickable data","2022-11-01","15:30:02"),
  createData(1,60,32,50,"clickable data","2022-11-23","15:30:02"),
  createData(1,60,32,50,"clickable data","2022-11-23","15:30:02"),
  createData(1,60,32,50,"clickable data","2022-11-23","15:30:02"),
];

const TableInfo = () => {
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
              <TableCell align="right">Date</TableCell>
              <TableCell align="right">Time</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.sensorId}
                </TableCell>
                <TableCell align="right">{row.co2}</TableCell>
                <TableCell align="right">{row.temperature}</TableCell>
                <TableCell align="right">{row.humidity}</TableCell>
                <TableCell align="right">{row.location}</TableCell>
                <TableCell align="right">{row.date}</TableCell>
                <TableCell align="right">{row.time}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default TableInfo;

