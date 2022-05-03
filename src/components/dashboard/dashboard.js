import React from 'react';
import Card from '@mui/material/Card';
import './dashboard.scss'
import CardContent from '@mui/material/CardContent';
import Header from '../../components/header/header';
import TableInfo from '../../components/table/table';


const Dashboard  = () => {
  return (
    <div>
      <Card sx={{ minWidth: 275}} >
        <CardContent className='dashboard'>
          <Header/>
          <TableInfo/>
        </CardContent>
      </Card>
    </div>
  );
}

export default Dashboard
