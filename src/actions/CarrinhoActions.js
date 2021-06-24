import { RENDER_CARRINHO, INCREMENTAR, DECREMENTAR, ADICIONAR_TOTAL, REMOVER_TOTAL } from "./actionTypes";

export const renderizarCarrinho = () => ({
    type: RENDER_CARRINHO
  });

export const adicionarAoCarrinho = (contador, produto) => {
     produto.estoque -= 1;
    return function(dispatch){
        dispatch({type: INCREMENTAR, contador: contador + 1});
        dispatch({type: ADICIONAR_TOTAL, totalCompras: produto.preco})
    }
}

export const removerDoCarrinho = (contador, produto) => {
    produto.estoque += 1;
    return function(dispatch){
        if(contador > 0){
            dispatch({type: DECREMENTAR, contador: contador - 1});
            dispatch({type: REMOVER_TOTAL, totalCompras: produto.preco})

        }
    }
};


  