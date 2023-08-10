import React, { useState } from "react";
import "./style.css";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const CarForm = () => {
  const navigat=useNavigate()
  const [full_name, setName] = useState("");
  const [car_model, setmodel] = useState("");
  const [date_end, setdate] = useState("");
  const [plate_number, setPlateNumber] = useState("");
  const [phone_number, setPhoneNumber] = useState("");
  const [car_mantance, setcarmant] = useState("");
  const [description, setDescription] = useState("");
  const [date,setStartDat]=useState("")
// const [get, setget] = useState();
const createtable =async()=>{
  const table ={description,date,plate_number,phone_number,car_model,full_name,car_mantance,date_end}
  try {
    const response=await axios.post('/api/Carrouter',table)
    alert(response.data.msg)
    navigat('/Item')
    // setget(response.data)
  } catch (error) {
    
  }
}



  

  return (
    <section>   
      <h1>WELCOME </h1>
       <form>
      <input
        type="text"
        placeholder="Name"
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Plate number"
        onChange={(e) => setPlateNumber(e.target.value)}
      />
      <input
        type="text"
        placeholder="Phone number"
        onChange={(e) => setPhoneNumber(e.target.value)}
      />
      <input
        type="date"
        placeholder="Start date"
        onChange={(e) => setStartDat(e.target.value)}
      />
      <input
        type="date"
        placeholder="End date"
        onChange={(e) => setdate(e.target.value)}
      />
      <input
        type="text"
        placeholder="Car model"
        onChange={(e) => setmodel(e.target.value)}
      />
      <select
        className="desc"
        name="service"
        id="service"
        onChange={(e) => setcarmant(e.target.value)}
      >
        <option value="Electric Maintenance">Electric Maintenance</option>
        <option value="Body Maintenance">Body Maintenance</option>
        <option value="Mechanic Maintenance">Mechanic Maintenance</option>
      </select>
      <textarea
        className="desc"
        placeholder="Description"
        onChange={(e) => setDescription(e.target.value)}
      />
      
      
      <button
        className="btn"
        type="button"
        onClick={()=>createtable()}
        style={{ position: "absolute", bottom: 0,right: 0,backgroundColor:"orange",borderRadius:"10px",fontSize:"30px",marginRight:"200px",
        onMouseEnter: {
          backgroundColor: "red",
        },
        onMouseLeave: {
          backgroundColor: "orange", }}}
      >
       Submit  
      </button>
    </form>
    </section>

  );
};

export default CarForm;
