import React, { useState, useContext } from 'react';
import useErros from '../../hooks/useErros';

import { TextField, Button } from '@material-ui/core';
import ValidacoesCadastro from '../../contexts/ValidacoesCadastro';

function DadosUsuario({ aoEnviar }) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const validacoes = useContext(ValidacoesCadastro);
  const [erros, validarCampos, possoEnviar] = useErros(validacoes);
  
  return (
    <form onSubmit={(event) => {
      event.preventDefault();

      if(possoEnviar()){
        aoEnviar({ email, senha });
      }
    }}>
      <TextField
        id="email"
        label="email"
        type="email"
        required
        variant="outlined"
        margin="normal"
        fullWidth
        value={email}
        onChange={(event) => { setEmail(event.target.value) }}
      />
      <TextField 
        id="senha" 
        label="senha"
        name="senha"
        type="password"
        required
        variant="outlined"
        margin="normal"
        fullWidth
        value={senha}
        onBlur={validarCampos}
        error={!erros.senha.valido}
        helperText={erros.senha.texto}
        onChange={(event) => { setSenha(event.target.value) }}
      />
      <Button 
        type="submit" 
        variant="contained" 
        color="primary"
      >próximo</Button>
    </form>
  );
}

export default DadosUsuario;