import React from 'react';
import Card from '@mui/material/Card';
import './dashboard.scss'
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Header from '../../components/header/header';
import TableInfo from '../../components/table/table';
import { notification } from 'antd';
import Button from '@mui/material/Button';


const Dashboard  = () => {
  const openNotificationWarning = () =>{
    notification.warning({
      message: 'Hey man watch out with the fire',
      description:
        'Our sensonrs near the area have detected a fire nearby, be careful.',
      onClick: () => {
        console.log('Notification Clicked!');
      },
    });
  }

  const openNotificationError = () =>{
    notification.error({
      message: 'Hey man you are on fire',
      description:
        'Supposedly you are on fire right now, according to our sensonrs.',
      onClick: () => {
        console.log('Notification Clicked!');
      },
    });
  }
  return (
    <div>
      <Card sx={{ minWidth: 275}} >
        <CardContent className='dashboard'>
          <Header/>
          <TableInfo/>
        </CardContent>
        <CardActions style={{marginLeft:'7%'}}>
          <Button size="medium" variant="outlined" color="warning"onClick={openNotificationWarning}>Warning notification</Button>
          <Button size="medium" variant="outlined" color="error" onClick={openNotificationError}>Fire notification</Button>
        </CardActions>
      </Card>
    </div>
  );
}

export default Dashboard
