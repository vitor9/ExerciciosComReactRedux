import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { changeValue } from './fieldActions.js';

class Field extends Component {
    render() {
        return (
            <div>
                <label> {this.props.value} </label><br />
                <input onChange={this.props.changeValue} value={this.props.value} />
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        value: state.field.value
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ changeValue }, dispatch)
}

// Padrao de Projeto chamado Decorator
// Passamos um field e retornamos o mesmo field, só que decorado com as mesmas funcionalidades
// mapeado para os estados globais da aplicacao
export default connect(mapStateToProps, mapDispatchToProps)(Field)