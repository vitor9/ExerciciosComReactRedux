import React from 'react';

// Se vamos ter só um componente dentro de um arquivo, por via de regras devere-mos colocar
// para exportar este componente
export default props => (
  <div>{props.name} <strong>{props.lastName}</strong></div>
)