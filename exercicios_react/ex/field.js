import React, { Component } from 'react'
import { connect } from 'react-redux'

class Field extends Component {

  render() {
    return (
      <div>
        <label> {this.props.value} </label><br />
        <input onChange={this.handleChange} value={this.props.value}/>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    value: state.field.value
  }
}

// Padrao de Projeto chamado Decorator
// Passamos um field e retornamos o mesmo field, só que decorado com as mesmas funcionalidades
// mapeado para os estados globais da aplicacao
export default connect(mapStateToProps)(Field)