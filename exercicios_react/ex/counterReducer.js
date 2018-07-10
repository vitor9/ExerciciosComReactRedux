const INITIAL_STATE = { step: 1, number: 0 };

// Se state vier como undefined, ele vai assumir o INITIAL_STATE
// Se for outro valor, elevai pegar o valor que foi passado.
export default function(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'INC':
        //Pegar o estado atual e mudar o number
            return{...state, number: state.number + state.step}
        case 'DEC':
            return { ...state, number: state.number + state.step }
        case 'STEP_CHANGED':
            return { ...state, step: action.payload }
        default:
            return state
    }
}