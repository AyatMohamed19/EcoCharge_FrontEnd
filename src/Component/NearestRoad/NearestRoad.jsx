import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
import MapboxDirections from '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions'
import 'mapbox-gl/dist/mapbox-gl.css';
import axios from 'axios'
import './style.css' 
mapboxgl.accessToken = 'pk.eyJ1IjoiaXRpcHJvamVjdCIsImEiOiJjbGVsY2E5czQwdTNjM3ZwZzNycmtnMjJxIn0.F7H8MLWhaWVkVhKlD-WlZw';
const getNearestStation = (position)=>{
return  axios.get(`https://ecocharge-backend-3ms8.onrender.com/api/map/${position.coords.longitude},${position.coords.latitude}`)
 }

const NearestRoad = () => {
    const mapContainer = useRef(null);
    const map = useRef(null);
   
    const [zoom] = useState(20);
     
    useEffect(() => {
      // axios.get('https://api.mapbox.com/directions-matrix/v1/mapbox/driving/31.3366043,30.0602272?sources=0&destinations=28.861167,30.885000&access_token=pk.eyJ1IjoiaXRpcHJvamVjdCIsImEiOiJjbGVsY2E5czQwdTNjM3ZwZzNycmtnMjJxIn0.F7H8MLWhaWVkVhKlD-WlZw')
      // .then(res=>console.log(res))
      navigator.geolocation.getCurrentPosition(function(position) {
        console.log('test');
        let nearestStation ;
    getNearestStation(position).then(res=>{nearestStation=(res.data.location)
      console.log("Latitude is :", position.coords.latitude);
      
      console.log("Longitude is :", position.coords.longitude);
      
      if (map.current) return; // initialize map only once
      map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/streets-v12',
        center: [position.coords.longitude, position.coords.latitude],
        zoom: zoom
      });
      const directions = new MapboxDirections({
        accessToken: mapboxgl.accessToken,
        unit: 'metric',
        profile: 'mapbox/driving'
      }); 
      map.current.on('load',  function() {
        directions.setOrigin([position.coords.longitude,position.coords.latitude])
        directions.setDestination(nearestStation)})
        map.current.addControl(directions, 'top-left')
        map.current.addControl(new mapboxgl.FullscreenControl());
    })
    })
    });
    
    
    return (
        <div>
           <h2 className="card-h pt-3">Nearest Station</h2>
           
           <div className="container py-3" style={{width:'100vw', height:'100vh'}} ref={mapContainer} > 
       
           </div>
        </div>
    );
};

export default NearestRoad;