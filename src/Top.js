import React from "react"
export default function Top(){
    const today = new Date();
    console.log(today.toUTCString());
    let tday = today.toUTCString();
return(
     
<div className="header">

     <img className = "Image" src = "download.png"/>
     
     <p className="date">{tday}</p>
     
</div>
)

}

