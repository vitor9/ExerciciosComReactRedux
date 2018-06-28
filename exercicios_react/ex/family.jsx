import React from 'react'

// A tag children faz com que todas as chamadas para family 
// vai automaticamente receber e aplicar as caracteristicas de family
export default props => (
    <div>
        <h1>Familia</h1>
        {props.children}
    </div>
)