import React from 'react';
import './homepage.scss'
import Navbar from '../../components/navbar/navbar';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'

const HomepageContainer  = () => {
  
  return (
    <div>
      <Navbar/>
        <MapContainer center={[51.505, -0.09]} zoom={13} style={{ height: '100vh', width: '100wh' }}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[51.505, -0.09]}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </MapContainer>
    </div>
  );
}

export default HomepageContainer
