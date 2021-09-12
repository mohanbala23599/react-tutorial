import React, { useReducer } from 'react';

//state initialized globally

const initialState = {
    number : 0
}

//reducer function

const reducer = (state, action) => {
    switch(action.type){
        case "increement" : 
        return {
            number : state.number + 1
        }
        case "decreement" : 
        return {
            number : state.number - 1
        }
    }
}

const UseReducerTutorial = () => {

    //use reducer syntax
    const [state, dispatch] = useReducer(reducer, initialState)

    return(
        <div>
            <h1>Count : {state.number}</h1>
            {/* dispatch with an object of type  */}
            <button onClick = {() => dispatch({type : "increement"})}>INCREEMENT</button>
            <button onClick = {() => dispatch({type : "decreement"})}>DECREEMENT</button>        
        </div>
    )
}

export default UseReducerTutorial