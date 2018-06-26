const produto = {
    nome: 'Caneta Bic Preta',
    preco: 1.90,
    desconto: 0.05
}
function clone(objeto) {
// Operador spread (...) tambem chamadod e operador rest
// Este operador espalha todos os atributos do objeto que estamos
// passando por parametro para um novo objeto que estamos retornando
// (ao abrir chaves no javascript, criamos um novo objeto)
    return { ...objeto };
}

const novoProduto = clone(produto);
novoProduto.nome = 'Caneta Bic Azul';

console.log('Antigo: ');
console.log(produto);
console.log('Novo: ');
console.log(novoProduto);

