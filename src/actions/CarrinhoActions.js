import { RENDER_CARRINHO, INCREMENTAR, DECREMENTAR, ADICIONAR_TOTAL, REMOVER_TOTAL } from "./actionTypes";

export const renderizarCarrinho = () => ({
    type: RENDER_CARRINHO
  });

export const adicionarAoCarrinho = (contador, produto) => {
    return function(dispatch){
        produto.estoque -= 1;
        produto.qtdCompra += 1
        dispatch({type: INCREMENTAR, contador: contador + 1});
        dispatch({type: ADICIONAR_TOTAL, totalCompras: produto.preco})
    }
}

export const removerDoCarrinho = (contador, produto) => {
    return function(dispatch){
        if(contador > 0){
            produto.estoque += 1;
            produto.qtdCompra -= 1
            dispatch({type: DECREMENTAR, contador: contador - 1});
            dispatch({type: REMOVER_TOTAL, totalCompras: produto.preco})

        }
    }
};


  