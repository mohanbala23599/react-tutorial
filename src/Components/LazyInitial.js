import React, { useState } from 'react';

const Initialization = () => {
    return 0;
}

const LazyInitial = () => {
    const [number, setNumber] = useState(() => Initialization())
    return(
        <div>
            <h1>Number :- {number}</h1>
            <button onClick = {() => setNumber(number + 1)}>Increement</button>
        </div>
    )
}

export default LazyInitial