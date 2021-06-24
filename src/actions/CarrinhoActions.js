import { RENDER_CARRINHO, INCREMENTAR, DECREMENTAR } from "./actionTypes";

export const renderizarCarrinho = () => ({
    type: RENDER_CARRINHO
  });

export const adicionarAoCarrinho = (contador) => ({
    type: INCREMENTAR,
    contador: contador + 1
});

export const removerDoCarrinho = (contador) => ({
    type: DECREMENTAR,
    contador: contador - 1
});


  