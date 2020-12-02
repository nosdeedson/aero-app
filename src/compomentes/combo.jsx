import React, {useState, useEffect} from 'react';
import TextField from '@material-ui/core/TextField';
import Axios from "axios";
import MenuItem from '@material-ui/core/MenuItem';


const style = {
    marginRight: '20%',
}

export const Combo = (props) => {
  const [aeroLocal, setAeroLocal] = useState(""); 
  const [locais, setLocais] = useState([]);

  useEffect(() => {
    Axios.get('https://localhost:44315/api/Local')
      .then(resultado => setLocais(resultado.data))
      .then(console.log(locais))
      .catch(erro => console.log(erro))
  });

  const handleChange = (e) => {
    setAeroLocal(e.target.value)
  }
  return (
        <TextField style={style}
          id="standard-select-currency"
          select
          value={aeroLocal}
          label={props.textoLabel}
          onChange={handleChange}
          helperText="Por favor selecione"
        >
          {
            locais.map( (item) =>(
            <MenuItem value={item.id}>{item.nome}</MenuItem>
             ) )
          }
        </TextField>
  );
}
