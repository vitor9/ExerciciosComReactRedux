const INITIAL_STATE = { value: 'Opa' }

// Primeiro passamos o estado, depois a acao
// Se o state vier undefined, o ES vai atribuir o valor undefined p/ ele.
// Quando for uma ação for VALUE_CHANGED ou CHANGE VALUE, vamos retornar
// Qualquer outra acao vai retornar o mesmo estado que eu recebi, porque queremos modificar
export default function(state = INITIAL_STATE, action) {
    switch(action.type) {
        case 'VALUE_CHANGED': 
            // Para alterarmos o estado atual:
            // state.value = action.payload 
            // return state
            return { value: action.payload }
        default: 
            return state
    }
}