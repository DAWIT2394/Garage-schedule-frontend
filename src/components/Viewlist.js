import React, { useEffect, useState } from "react";
import "./style.css";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

function View(props) {
const navigat=useNavigate()
const handel=()=>{
  navigat("/Item");

}
const [car, setcar] = useState();
const {id} =useParams()
useEffect(() => {
  const getallinfo=async()=>{
    try {
      const response=await axios.get(`/api/Carrouter/${id}`)
      setcar(response.data)
    } catch (error) {
      
    }
  }
  getallinfo()
}, []);
 

 return(
<div className="HE">
<h1 className="head">Detaile information </h1>
      <div className="card-body">
      <ul>
        {  car&&<li style={{ marginTop: "10px" }}>name: {car.full_name}</li>}
         {car&& <li style={{ marginTop: "10px" }}>Plate number: {car.plate_number}</li>}
          {car&&<li style={{ marginTop: "10px" }}>Phone number: {car.phone_number}</li>}
         {car&& <li style={{ marginTop: "10px" }}>Getting Date: {car.date}</li>}
         {car&& <li style={{ marginTop: "10px" }}>End Date Date: {car.date_end}</li>}

        {car&&  <li style={{ marginTop: "10px" }}>Card model: {car.car_model}</li>}
         {car&& <li style={{ marginTop: "10px" }}>Maintenance type: {car.car_mantance}</li>}
        {car&&  <li style={{ marginTop: "10px" }}>Description: {car.description}</li>}
        </ul>
        <button className="btn3" onClick={handel}>
          Back </button>
    </div>
    </div>

  );
};

export default View;
