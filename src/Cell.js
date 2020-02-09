import React, {useState} from 'react';
import './App.css';


const Cell =({active,hitAttmept})=>{

   let [hitStatus,hitStatusChange]= useState(false)


    const hitAttempt=()=>{
        if (active){
            hitAttmept()
            hitStatusChange(true)
            setTimeout(()=>{
                hitStatusChange(false)
            },300)
        }
    }
         return (
             <div>
    <div onClick={hitAttempt} className={hitStatus?"cell hited" : active? "cell active":"cell"}>

         </div>
             </div>
  );
}

export default Cell;
