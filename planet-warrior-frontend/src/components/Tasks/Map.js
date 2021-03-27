import React, {useState} from 'react';
import { GoogleMap, LoadScript, InfoWindow, Marker } from '@react-google-maps/api';
import Task from './Task'


const containerStyle = {
  width: '720px',
  height: '720px',
  // position: 'absolute',
  
};

const onLoad = marker => {
  console.log('marker: ', marker)
}


const Map = ({tasks}) => {

  const [selectedTask,setSelectedTask] = useState(null)

  let center = {lat: 45.513025510894856, lng: -122.61487031046339}

  return (
    <div>
  <LoadScript
        googleMapsApiKey="AIzaSyD8cHhFQ8Kp2ng4GcNY73z5VlztJ5BqRNg"
      >
        {<GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={11} 
        >
          {tasks.map(task =>  (
            <Marker 
            onClick={() => setSelectedTask(task)}
            onLoad={onLoad}
            position={{lat: task.latitude, lng: task.longitude}}
            >
            </Marker>
          ) )} 

          {selectedTask && (
            <InfoWindow
            position={{lat: selectedTask.latitude, lng: selectedTask.longitude}}
            onCloseClick={() => setSelectedTask(null)}
            >
            <div><Task task={selectedTask}/></div>
              </InfoWindow>
          )}

        </GoogleMap>}
  </LoadScript>
    </div>
  );
}

export default Map;
