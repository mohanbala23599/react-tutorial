import React from "react";
import { globalContainer } from "../../ParentComponent";

const ChildFour = () => {
    const globalValues = React.useContext(globalContainer)
    return(
        <div>
            <h1>Child four {globalValues.letter}</h1>
        </div>
    )
}

export default ChildFour