const initialState={
    contadorA:[],
    contadorB:[],
  contadorC:[],
  subtotalA:[],
  subtotalB:[],
  subtotalC:[],
  totalDeSubtotales:[], 
    total:[0],

    }
    function rootReducer(state=initialState,action){
    switch(action.type){
        case 'GET_SUMA_SUBTOTALES': state.subtotalA=Number (action.payload)
                                        console.log('redux.A',state.subtotalA)
                                        state.subtotalB=Number(action.payload)
                                        console.log('redux.B',state.subtotalB)
                                        state.subtotalC=Number(action.payload)
                                        console.log('redux.C',state.subtotalC)
        
        
        return {...state,totalDeSubtotales:Number(state.subtotalA)+Number(state.subtotalB)+Number(state.subtotalC)}




        case 'GET_TOTAL': 
                        return{...state,total:Number(state.contadorA)+Number(state.contadorB)+Number(state.contadorC)}

        case 'INCREMENTAR_CONTADOR':  switch(action.payload){
                                            case'contadorA': state.contadorA++ 
                                            break
                                            case'contadorB':state.contadorB++
                                            break
                                            case 'contadorC':state.contadorC++
                                            break
                                        default: break}
                                        
        return{...state}
    
        default:return state
    }}
    
export default rootReducer