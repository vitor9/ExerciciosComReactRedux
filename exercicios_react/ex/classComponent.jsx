// Quando colocamos o nome de algum import entre chaves, quer dizer
// que queremos buscar por um componente especifico.
// Quando chamamos pelo componente fora das chaves, eh porque estamos
// Chamando o componente que está com a propriedade default e ele
// vai vir por padrão, só damos mesmo um nome para esse comp. padrao
import React, { Component } from 'react'

export default class ClassComponente extends Component {
  render() {
    return (
      <h1>{this.props.value}</h1>
    )
  }
}