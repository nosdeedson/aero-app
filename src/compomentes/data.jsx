import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import  InputLabel  from "@material-ui/core/InputLabel";
import Grid from '@material-ui/core/Grid';


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    edLabel: {
      position : 'relative',
      top: '10px',
      marginRight: '5%'
    },
    edInputData: {
        marginBottom: '5%',
        top: '-10px'
    }
  }));



export const Data = (props) =>{
    const classes = useStyles();
    return(
        <div>
            <Grid container spacing={2}>
            <InputLabel className={classes.edLabel}>{props.nome}</InputLabel>
            <TextField className={classes.edInputData}  required  type="date"  />
            </Grid>
        </div>
    )
}