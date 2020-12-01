import React from "react";
import TextField from '@material-ui/core/TextField';


const style = {
    marginRight: '10%',
}

export const CampoTexto = (props) =>{
    
    return(
        <TextField style={style}  required id={props.campo} label={props.campo}  />
    )
}