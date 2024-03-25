import React from "react";
import Car from "./Car";

 function Carage(){
   const carInfo = {color:'blue', brand:'Toyata'};
   const Cars = [
    { item: 1, brand: "Ford"},
    { item: 2, brand: "Bucatti"},
    { item: 3, brand: "Nisssan"},
  ];
  return (
    <ul>
        {Cars.map((carInfo)=> <li><Car carInfo = {carInfo} /></li> )}
    </ul>
  )
}

export default Carage