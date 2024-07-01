import React from "react";
import ThermostatIcon from '@mui/icons-material/Thermostat';
import AirIcon from '@mui/icons-material/Air';
import CloudQueueIcon from '@mui/icons-material/CloudQueue';
import OpacityOutlinedIcon from '@mui/icons-material/OpacityOutlined';


export default function WeatherCard(props){
return(
    <div className="rightcard">
<div className="date gridcontainer">
      
        <div class="grid-item"><span className="span1">{props.date}</span></div>
  <div class="grid-item"><span className="span2"><ThermostatIcon className="icon temp"/> {props.temp}</span></div>
  <div class="grid-item"><span className="span2"><AirIcon className="icon"/>{props.wind}</span></div>  
  <div class="grid-item"><span className="cloud span2"><img className = "weather-img" src = {props.icon}/>{props.text}</span></div>
  <div class="grid-item"><span className="span2"><CloudQueueIcon className="icon"/>{props.cloud} %</span></div>
  <div class="grid-item"><span className="span2"><OpacityOutlinedIcon className="icon"/>{props.humidity} %</span></div>
  
    </div>

    </div>
)

}