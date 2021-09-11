import React from 'react';
import { globalContainer } from '../../ParentComponent';
const ChildSix = () => {
    const globalValues = React.useContext(globalContainer)
    return(
        <div>
            <h1>Child Six {globalValues.letter}</h1>
        </div>
    )
}

export default ChildSix