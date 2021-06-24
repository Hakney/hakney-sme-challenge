import { RENDER_CARRINHO, INCREMENTAR, DECREMENTAR } from "./actionTypes";

export const renderizarCarrinho = () => ({
    type: RENDER_CARRINHO
  });

export const adicionarAoCarrinho = (contador) => {
        
    return function(dispatch){
        dispatch({type: INCREMENTAR, contador: contador + 1});
    }
}

export const removerDoCarrinho = (contador) => {
    return function(dispatch){
        if(contador > 0){
            dispatch({type: DECREMENTAR, contador: contador - 1});
        }
    }
};


  