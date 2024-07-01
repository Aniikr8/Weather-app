import React from "react"
import Card from "./Card"
import ThermostatIcon from '@mui/icons-material/Thermostat';
import AirIcon from '@mui/icons-material/Air';
import CloudQueueIcon from '@mui/icons-material/CloudQueue';
import OpacityOutlinedIcon from '@mui/icons-material/OpacityOutlined';
import WeatherCard  from "./WeatherCard";

import splashicon from "./splash-icon.svg"
export default function Content(props){

   

    const arr = [];
    arr.push(props.time)

   

    const [Weather, setAllWeather] = React.useState([])
    
  
   
      console.log(Weather && Weather.location && Weather.location.name);
      
      const Wcard = props.time.map(item => {
        console.log(item+"value")
        return (
          
              <Card
              
              time = {item}
              image = {props}
              /> 
            
                 
        
        );
    });
    let Wfcard;

if (props.forecast) {
  Wfcard = props.forecast.map((forecast,index) => {
  
    if(index > 0 ){
    return (
      <WeatherCard
      key={index + 1}
      date = {forecast.date}
      text = {forecast.day.condition.text}
      icon =  {forecast.day.condition.icon}
      temp = {forecast.day.maxtemp_c}
      wind = {forecast.day.maxwind_mph}
      humidity = {forecast.day.avghumidity}
      cloud = {forecast.day.daily_chance_of_rain}
      time={index + 1}
      />
    ) };
  });
} else {
  Wfcard = null; 
}
    console.log(Wfcard)
    console.log(props.load)
    console.log(props.flag)
    console.log("car")
    
   return   props.flag? ( 

   
    <div className="main-body">
     <div className="left">
<h4>CURRENT WEATHER</h4>
<div className="submain">
  <div className="">
    <h3>{props.name}</h3>
    <h5>{props.Date}</h5>
  </div>
  <div className="">
    <h3>{props.Temp} &deg;c</h3>
    <h5>{props.Text}</h5>
  </div>
  <div className="">
   <img src = {props.image}/>
  </div>
</div>
<h4>AIR CONDITIONS</h4>
<div className="submain2">
<div className="">
<h5><ThermostatIcon className="icon temp"/> Real Feel</h5>
    <h3>{props.Temp} &deg;c</h3>
   
  </div>
  <div className="">
  <h5><AirIcon className="icon"/> Wind</h5>
    <h3>{props.wind} m/s</h3>

  </div>
  <div className="">
  <h5><CloudQueueIcon className="icon"/> Clouds</h5>
    <h3>{props.cloud} %</h3>
 
  </div>
  <div className="">
  <h5><OpacityOutlinedIcon className="icon"/> Humidity</h5>
    <h3>{props.humidity} %</h3>
 
  </div>

</div >

<h4>TODAY FORECAST</h4>


<div className="card-container">{Wcard}</div>












     </div>
     <div className="right">
     <h4>WEEKLY FORECAST</h4>
    <div className="rightcard-main">
    

    {Wfcard}
    
    </div>

     </div>
 
</div> 

   ) :<div className="on-load"><img className="" src= {splashicon}
  
   />  <h2>Search location for weather forecasting
       
   </h2><h3>(Time Zone is America/Toronto so the result vary)</h3>
           </div>
}