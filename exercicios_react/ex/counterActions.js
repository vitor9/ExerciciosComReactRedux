export function inc() {
    return { type: 'INC' }
}

export function dec() {
    return { type: 'DEC' }
}

// Action creator, essa funcao recebe o evento
// e retorna um objeto que tem o atributo type
export function stepChanged(e) {
    return {
        // Mudamos o passo para o inc/dec
        type: 'STEP_CHANGED',
        // Valor atualizado
        payload: e.target.value
    }
}