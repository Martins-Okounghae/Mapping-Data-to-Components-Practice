import React from "react";
import Detail from "./Detail";
import Emoji from "./Emoji";

function Card(props){
return(
    <div className="term">
        <Emoji emoji = {props.emoji} name= {props.name}/>
         
        <Detail detailInfo ={props.meaning}/>
          
    </div>


);

}

export default Card;


