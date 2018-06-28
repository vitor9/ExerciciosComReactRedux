import React from 'react'

// O metodo map vai pegando cada elemento e vai transformando 
// Estamos construindo um conjunto de filhos que não tem as propriedades do conjunto pai
// e estou mesclando com o conjunto de propriedades que recebemos no elemento pai.
// O map vai percorrendo o conjunto de objetos filhos e mesclando com o elemento pai
export default props => (
     <div>
        <h1>Familia</h1>
        { React.Children.map(props.children, 
            child => React.cloneElement(child, {...props})) }
    </div>
)