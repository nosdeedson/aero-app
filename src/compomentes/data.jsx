import React from "react";
import TextField from '@material-ui/core/TextField';
import { InputLabel } from "@material-ui/core";
import { Label } from "@material-ui/icons";


const style = {
    marginRight: '10%',
}

export const Data = () =>{
    
    return(
        <TextField style={style}  required  type="date"  />
    )
}