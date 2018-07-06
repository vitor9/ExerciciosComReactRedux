import React from 'react'
import ReactDOM from 'react-dom'
import { combineReducers, createStore } from 'redux'
import { Provider } from 'react-redux'
import Field from './fi'

import ClassComponent from './classComponent'

ReactDOM.render(
    <ClassComponent value='Componente Classe' />
, document.getElementById('app'))