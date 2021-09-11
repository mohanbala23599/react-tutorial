import React, {useContext} from 'react';
import ChildFive from './Sub-child-components/ChildFive';
import ChildSix from './Sub-child-components/ChildSix';
import { globalContainer } from '../ParentComponent';
const ChildTwo = () => {
    const globalValues = React.useContext(globalContainer)
    console.log("globalValues",globalValues)
    return(
        <div>
            <ChildFive/>
            <ChildSix/>
        </div>
    )
}

export default ChildTwo