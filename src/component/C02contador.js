import React, { Fragment, useState } from 'react'

const C02contador = () => {
    const[numero, setNumero] = useState(0);
    const aumentar = () => {
        setNumero(numero + 1);
    }
  return (
    <div>
      <Fragment>
        <h3>Mi primer componente {numero}</h3>
        <button onClick={aumentar}>Clic aqui para Aumentar</button>
      </Fragment>
    </div>
  )
}

export default C02contador
