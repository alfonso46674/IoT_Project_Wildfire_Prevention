import React from 'react'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'

const MapPopup = props => {
    console.log(props)
    return (
        <div className="popup-box">
          <div className="box">
            <span className="close-icon" onClick={props.handleClose}>x</span>
            <MapContainer center={[props.latitude,props.longitude]} zoom={13} style={{ height: '100vh', width: '100wh' }}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[props.latitude,props.longitude]}>
                    <Popup>
                    Sensors last location
                    </Popup>
                </Marker>
            </MapContainer>
          </div>
        </div>
      );
}


export default MapPopup;