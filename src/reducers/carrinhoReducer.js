import { RENDER_CARRINHO, INCREMENTAR, DECREMENTAR, ADICIONAR_TOTAL, REMOVER_TOTAL} from "../actions/actionTypes";
import arroz from '../imagensProdutos/arroz.jpg';
import feijao from '../imagensProdutos/feijao.jpeg';
import macarrao from '../imagensProdutos/macarrao.jpg';

const initialState = {
        carrinho: [
            {
                key: 1,
                foto: <img style={{wkeyth: '100px', height: '100px'}} src={arroz} alt="Arroz" />,
                titulo:'Arroz',
                preco: 4.99,
                descricao: 'Arroz branco, Camil 1kg',
                estoque: 5,
                qtdCompra: 0
            },
            {
                key: 2,
                foto: <img style={{width: '100px', height: '100px'}} src={feijao} alt="Feijão" />,
                titulo:'Feijão',
                preco: 6.99,
                descricao: 'Feijão carioca, Camil 1kg',
                estoque: 10,
                qtdCompra: 0

            },
            {
                key: 3,
                foto: <img style={{width: '100px', height: '100px'}} src={macarrao} alt="Macarrão" />,
                titulo:'Macarrão',
                preco: 3.99,
                descricao: 'Macarrão divino sabor, 800g',
                estoque: 8,
                qtdCompra: 0
            }   
        ],
        contador: 0,
        totalCompras: 0
            
};

export const carrinhoReducer = (state = initialState, action) => {
  switch (action.type) {
    case RENDER_CARRINHO:
      return initialState;
    case INCREMENTAR:
        return {...state, contador: action.contador};
    case DECREMENTAR:
        return {...state, contador: action.contador};
    case ADICIONAR_TOTAL:
        return {...state, totalCompras: action.totalCompras + state.totalCompras};
    case REMOVER_TOTAL:
        return {...state, totalCompras: state.totalCompras - action.totalCompras};
    default:
      return state;
  }
};