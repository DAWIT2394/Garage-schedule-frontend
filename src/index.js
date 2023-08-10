import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CarForm from "./components/car";
import View from "./components/Viewlist";
import Item from "./components/Itemslist";
import './index.css'
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<CarForm />} />
          <Route  path='/View/:id' element={<View />} />
          <Route  path="Item" element={<Item />} />
          <Route  path="/" element={<Item />} />
          <Route  path="CarForm" element={<CarForm />} />




        
          </Routes>
     
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

