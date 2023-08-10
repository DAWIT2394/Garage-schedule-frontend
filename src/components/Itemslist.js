import { useEffect, useState } from "react";
import './card.css';
import {  useNavigate, useParams } from 'react-router-dom';
import axios from "axios";

const Item = () => {
  
  const navigator = useNavigate();
  const{id}=useParams()
  const handele=(id)=>{
    navigator(`/View/${id}`)
  }
  
  const handeleto=()=>{
    navigator('/CarForm')
  }
  const [cards, ] = useState([
    {
      Name: "name of persone",
      plate_Number: 'A5484552',
    },
    {
      Name: "Dave",
      plate_Number: "B454854",
    },
    {
      Name: "john",
      plate_Number: "Car plate number",
    },
    {
      Name: "Dagi",
      plate_Number: "Car plate number",
    },
    {
      Name: "kalab",
      plate_Number: "Car plate number",
    },
    {
      Name: "nahome",
      plate_Number: "Car plate number",
    },
  ]);

  const [searchTerm, setSearchTerm] = useState("");
 const [cart, setcar] = useState();
  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredCards = cards.filter((cart) => {
    return cart.plate_Number.toLowerCase().includes(searchTerm.toLowerCase());
  });
useEffect(() => {
  const getallinfo=async()=>{
    try {
      const response=await axios.get('/api/Carrouter')
      setcar(response.data)
    } catch (error) {
      
    }
  }
  getallinfo()
}, []);

  return (
    <section>
      <h1 className="head">REGISTERD CARS</h1>
      
      <div className="card-container">
      <input
      className="search"
        type="text"
        placeholder="Search by plate number"
        onChange={handleSearch}
      />
        <div className="cards">
          {cart&&cart.map((card, i) => (
            <div key={i} className="card">
              <h3>{card.full_name}</h3>
              
              <h3>{card.plate_number}</h3>
              <button onClick={()=>handele(card._id)} className="btn2">View Detailes</button>
              
            </div>
            
          ))}
        </div>
      </div>
     <button className="homebtn" onClick={handeleto}>Back to home</button>
    </section>
  );
};

export default Item;
