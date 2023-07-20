import React, {useState, Fragmet} from 'react';

const Contador2 = () => {
    
    const [valor, setValor] = useState(0);
    const [numero, setNumero] = useState(0);

    const IncrementoDos = () =>{
        setNumero(numero +1);
        console.log("Mensaje de contador");
    }

    return (
        <Fragmet>
            <button onClick={()=>setValor(valor+1)}>contador 1</button>
            <span>Incremento de contador 1: {valor}</span>
            <hr/>
            <button onClick={IncrementoDos}>Contador 2</button>
            <span>Incremento de contador 2: {numero}</span>
        </Fragmet>
    );
}

export default Contador2;