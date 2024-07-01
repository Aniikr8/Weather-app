import React from "react"
import ReactDOM from "react-dom"
import Top from "./Top.js"
import Content from "./Content.js"
import Card from "./Card.js"
import axios from 'axios'
export default function App() {

var a = false
   const [state, setData] = React.useState({});
  const[location,setLocation] = React.useState('') 
  const[load,setLoad] =  React.useState(false)
  const[flag,setflag] = React.useState(false)
  const url = `http://api.weatherapi.com/v1/forecast.json?key=13c04e61f60e47719de110415242401&q=${location}&days=8&aqi=no&alerts=no#`
  const searchLocation = (event) => {
   if (event.key === 'Enter') {
     axios.get(url).then((response) => {
       setData(response.data)
    
     
     })
     setLocation('')
   setflag( true );
   setLoad(true);
  
   }
   
 }



 const numberOfTimes = 3; // You can adjust this based on your requirement

 const formattedTimes = [];
 
 for (let i = 0; i < numberOfTimes; i++) {
   const time = state.forecast ? state.forecast.forecastday[0].hour[i]?.time : null;
 
   // Convert time to a Date object
   const apiTime = time ? new Date(time) : null;
 
   // Format the time
   const formattedTime = apiTime ? apiTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) : null;
 
   formattedTimes.push(formattedTime);
 }








  return  (
<div>

   <div className="BigBox">
  <Top />
  <input className = "input"   value={location}
          onChange={event => setLocation(event.target.value)}
          onKeyPress={searchLocation}
          placeholder='Enter Location'
          type="text" />

{/* <h6>{state.forecast ? state.forecast.forecastday[0].hour[0].time:null}</h6>  
<h6>{formattedTimes[0]}</h6>  */}
<Content
// array = {state.formattedTimes}
flag = {flag}
name = {state.location ? state.location.name: null}
Date = {state.location ? state.location.localtime: null}
Temp = {state.current ? state.current.temp_c: null}
Text = {state.current ? state.current.condition.text : null}
image = {state.current ? state.current.condition.icon : null}
wind =  {state.current ? state.current.wind_mph : null}
cloud =  {state.current ? state.current.cloud : null}
humidity = {state.current ? state.current.humidity:null}
time = {formattedTimes}
forcastimg = {state.forecast ? state.forecast.forecastday[0].hour[0].condition.icon : null}

forecast = {state.forecast ? state.forecast.forecastday : null}
load = {load}
/>
   </div>
</div>

   ) 
}
ReactDOM.render(<App />, document.getElementById("root"))