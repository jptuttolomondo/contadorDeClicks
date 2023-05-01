import './App.css';
//import React, { useState } from 'react'
import {useEffect } from 'react'
import {useDispatch,useSelector} from'react-redux'
import { incrementar} from './actions'
import comanda from'./comanda.json'

function App() {
//let totalMuestra= useSelector((state)=>state.total)
let contadorA=useSelector((state)=>state.contadorA)
let contadorB=useSelector((state)=>state.contadorB)
let contadorC=useSelector((state)=>state.contadorC)

let sumaSubtotales=0
const dispatch=useDispatch()

useEffect(()=>{

dispatch(incrementar(contadorA))
dispatch(incrementar(contadorB))
dispatch(incrementar(contadorC))


},[dispatch,contadorA,contadorB,contadorC])

function addCounterA(){
dispatch(incrementar('contadorA'))
//dispatch(total(totalMuestra))
 }


function addCounterB(){ 
dispatch(incrementar('contadorB'))
//dispatch(total(totalMuestra)) 
}

function addCounterC(){
dispatch(incrementar('contadorC'))
//dispatch(total(totalMuestra))
}


return (
<div className="App">
     
<h1> Calculadora de clicks</h1>
<button id='A' onClick={e=>addCounterA(e)}>productoA</button>     <p></p>     
<button id='B'onClick={e=>addCounterB(e)}>productoB</button>     <p></p>
<button id='C'onClick={e=>addCounterC(e)}>productoC</button>     <p></p>
    
          {comanda.map(e=>{
            return(
                  <div key={e.id}> 
                       <p>Mesa:{ e.Mesa}</p>  
                        <p>Mozo:{ e.Mozo}</p>
                        <table border="1" cellspacing="0" cellpadding="10" >
                        <tr >
                                            <td>Cantidad</td>
                                            <td>Descripcion</td>
                                            <td>Precio Unitario</td>
                                            <td>Subtotal</td>
                                            </tr> 
                                            </table>
                                       
                        {e.Items.map(elem=>{elem.id===1?elem.Cantidad=contadorA
                                            :elem.id===2?elem.Cantidad=contadorB
                                            :elem.Cantidad=contadorC
                                        return(
                                           <div key={elem.id}> 

                                            <table border="1" cellspacing="0" cellpadding="10" >

                                             
                                            <td>{elem.Cantidad}</td>
                                            <td>{ elem.descripcion}</td>
                                            <td>{ elem['precio Unitario']}</td>
                                            <td>{elem.subtotal=elem['precio Unitario']*elem.Cantidad }</td>

                                          
                                          
                                            
                                      </table> 
                                      <p hidden>{sumaSubtotales+=elem.subtotal}</p> 
                                      </div>  
                                      )
                                      
                              })}
                                     <p>Total:{sumaSubtotales }  </p>  
                  </div>
            )
                                  }
          )
                      }
           
  
 
  
        
</div>
  );
}

export default App;










                          
                          
