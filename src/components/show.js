import React from "react";
import illu from './../illustration.svg'
import './show.css'
const Show=({os , problemH })=>{

    return(
    <div className="container">
         
        
         <div className="illustration"><img src={illu} className="illustration" alt="logo" /></div>

         <h1 style={{top: `415px`,left: `280px`,color:`transparent`}} >You Have To {problemH} </h1>
    </div>);

}

export default Show;