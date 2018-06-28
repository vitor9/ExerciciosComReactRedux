import React from 'react'

// O primeiro parametro de React.cloneElement recebe a propriedade que vai passar as chamadas
// deste componente
// O segundo parametro é as propriedades que vamos passar para as classes filhas
// Para mais detalhes de como funciona este método, 
// ler o txt chamado entendimento do React.cloneElement
//Código sem o operador spread: 
    {/* <div>
        <h1>Familia</h1>
        { React.cloneElement(props.children, props) }
    </div> */}
export default props => (
     <div>
        <h1>Familia</h1>
        { React.cloneElement(props.children, {...props}) }
    </div>
)