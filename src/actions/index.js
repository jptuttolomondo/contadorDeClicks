export function incrementar(payload){ return {type:'INCREMENTAR_CONTADOR',payload} }

export function total(payload ){ return{type:'GET_TOTAL',payload}    }

export function sumaDeSubtotales(payload){ 
  // console.log('pasa por action', payload)
    return{type:'GET_SUMA_SUBTOTALES',payload} }


export function asignacionDeSubtotales(payload){ 
    return{type:'ASIGNAR_SUBTOTAL_A',payload}
}
