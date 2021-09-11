import React, { useEffect, useState } from 'react';

const UseEffectTutorial = () => {
    const [number, setNumber] = useState(0)
    //Only one time renderable because of state
    useEffect(() => {
        window.alert("Initial Call...")
    }, [])

    //It will be rendered when the state updates
    useEffect(() => {
        if(number != 0 && number > 0){
            window.alert("number greater than 0 and it will be increemented...")
        }
    },[number])

    return(
        <div>
            <h1>Number :- {number}</h1>
            <button onClick = {() => setNumber(number + 1)}>Increement</button>
        </div>
    )
}

export default UseEffectTutorial