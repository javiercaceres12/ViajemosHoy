import './App.css';
import React from 'react';
import { Routes, Route} from "react-router-dom";
import Footer from './componentes/footer/index';
import Inicio from './paginas/Inicio';
import Hoteles from './paginas/Hoteles';
import Nav from './componentes/nav';
import Noticias from './componentes/noticias';
import Paquetes from './paginas/Paquetes';
import {useEffect, useState} from 'react';
import inicio from './paginas/Inicio';
import login from './paginas/Login';


function App() {
  const [hoteles,setHoteles] = useState([]);
  const [paquetes,setPaquetes] = useState([]);
  const [datos,setDatos]= useState(true);
  const urlPaquetes = "https://pruebagcd.herokuapp.com/paquetes";
  const fecthHotels= async()=>{
    const urlHotels = "https://pruebagcd.herokuapp.com/hoteles";
    const response = await fetch(urlHotels);
    const resJson = await response.json();
    // resJson.forEach(h=>console.log(h))
    if(resJson.length ===0){
      console.log('No hay datos');
    }else{
      setHoteles(resJson)
      setDatos(false)
    }
  } 
  const fecthPaquetes= async()=>{
    const response = await fetch(urlPaquetes);
    const resJson = await response.json();
    // resJson.forEach(h=>console.log(h))
    if(resJson.length ===0){
      console.log('No hay datos');
    }else{
      setPaquetes(resJson)
    }
  } 
  useEffect(()=>{
    fecthHotels();
    fecthPaquetes();
  },[])
  return (
    <React.Fragment>
      <login/>
      <Nav/>
      <Noticias/>
      
      {datos? <div className='container d-flex justify-content-between'>
        <h3 className='ml-5'>Cargando...</h3>
        <span className='btn btn-primary disabled placeholder-glow col-6'></span>
        
      </div>:
    <Routes>
        <Route path="/" element={<login login={login} />} />
        <Route path="inicio" element={<Inicio inicio={inicio} />} />
        <Route path="hoteles" element={<Hoteles hoteles={hoteles} />} /> 
        <Route path="paquetes" element={<Paquetes paquetes={paquetes} />} />
    </Routes>
}   
    <Footer/> 
    </React.Fragment>
  );
}

export default App;