import React from 'react'
import ReactDOM from 'react-dom'

// let elm = <h2> My Element </h2>;

 function Tick(){

     const timeElement = <div>
         Time is {' '}
         {new Date().toLocaleTimeString()};
     </div>
     ReactDOM.render(
         timeElement,
         document.getElementById("root")
     );

 };

setInterval(Tick , 1000);
