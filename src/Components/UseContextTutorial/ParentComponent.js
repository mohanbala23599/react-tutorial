import React, {useState} from 'react';
import ChildOne from './Child-components/ChildOne';
import ChildTwo from './Child-components/ChildTwo';

const object = {
    letters : "Alphabets alone"
}

export const globalContainer = React.createContext(null)

const ParentComponent = () =>  {
    const [content, setContent] = useState({
        letter : ""
    })
    return(
        <globalContainer.Provider value = {content}>
                <div>
                    <input type = "text" name = "name" onChange = {(event) => setContent({
                        letter : event.target.value
                    })}/>
                    <ChildOne/>
                    <ChildTwo/>
                </div>        
        </globalContainer.Provider>
    )
}

export default ParentComponent