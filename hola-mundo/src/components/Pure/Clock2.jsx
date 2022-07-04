import React, { useState , useEffect } from 'react'

const Clock2 = (props) => {

    const [fecha, setFecha] = useState(new Date());
    const valInicial = 0;
    const [edad, setEdad] = useState(valInicial);
    const nombre = 'Martín'
    const apellidos = 'San José'
    let timerID

    useEffect(() => {

        timerID = setInterval (
            () => Tick(), 1000
        );
    
        return () => {
            clearInterval (timerID);
        }

    }, [])

    function Tick() {
        
        setEdad(previousValue => previousValue + 1);
        setFecha(new Date());

        return(
            <h1>Edad: {edad}</h1>,
            fecha
        )
         
    }

    return (
        <div>
        <h2>
        Hora Actual:
        {fecha.toLocaleTimeString()}
        </h2>
        <h3>{nombre} {apellidos}</h3>
        <h1>Edad: {edad} </h1>
        </div>
    )
}
export default Clock2;