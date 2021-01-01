import React from 'react'
import AppBar from "@material-ui/core/AppBar";



const TitleBar = ({text}) => {
    return (
        <AppBar>
            {text}
        </AppBar>
    )
}

export default TitleBar
