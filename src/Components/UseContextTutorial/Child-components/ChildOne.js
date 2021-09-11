import React, {useContext} from 'react';
import ChildThree from './Sub-child-components/ChildThree';
import ChildFour from './Sub-child-components/ChildFour';
import { globalContainer } from '../ParentComponent';
const ChildOne = () => {
    const globalValues = React.useContext(globalContainer)
    console.log("global values from child one", globalValues)
    return(
        <div>
            <ChildThree/>
            <ChildFour/>
        </div>
    )
}

export default ChildOne