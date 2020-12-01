import React from 'react';
import TextField from '@material-ui/core/TextField';


const style = {
    marginRight: '20%',
}

export const Combo = (propos) => {

  return (
        <TextField style={style}
          id="standard-select-currency"
          select
          label={propos.textoLabel}
          helperText="Por favor selecione"
        >
        </TextField>
  );
}
