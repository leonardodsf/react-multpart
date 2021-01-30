import React, { useState } from  'react';
import { TextField, Button } from '@material-ui/core';

function DadosEntrega({ aoEnviar, voltarForm }){

  const [cep, setCep] = useState("");
  const [endereco, setEndereco] = useState("");
  const [numero, setNumero] = useState("");
  const [cidade, setCidade] = useState("");
  const [estado, setEstado] = useState("");

  return(
    <form onSubmit={(event) => {
      event.preventDefault();
      aoEnviar({ cep, endereco, numero, cidade, estado })
    }}>
      <TextField
        id="cep"
        label="CEP"
        type="number"
        variant="outlined"
        margin="normal"
        value={cep}
        onChange={(event) => {
          setCep(event.target.value)
        }}
      />
      <TextField
        id="endereco"
        label="Endereço"
        type="text"
        variant="outlined"
        margin="normal"
        fullWidth
        value={endereco}
        onChange={(event) => {
          setEndereco(event.target.value)
        }}
      />
      <TextField
        id="numero"
        label="Número"
        type="number"
        variant="outlined"
        margin="normal"
        value={numero}
        onChange={(event) => {
          setNumero(event.target.value)
        }}
      />
      <TextField
        id="cidade"
        label="Cidade"
        type="text"
        variant="outlined"
        margin="normal"
        value={cidade}
        onChange={(event) => {
          setCidade(event.target.value)
        }}
      />
      <TextField
        id="estado"
        label="Estado"
        type="text"
        variant="outlined"
        margin="normal"
        value={estado}
        onChange={(event) => {
          setEstado(event.target.value)
        }}
      />
      <Button 
        type="submit" 
        variant="contained" 
        color="secondary" 
        onClick={() => { voltarForm() 
      }}>
        voltar
      </Button>
      <Button 
        type="submit" 
        variant="contained" 
        color="primary"
      >
      Finalizar cadastro
      </Button>
    </form>
  );
}

export default DadosEntrega;
