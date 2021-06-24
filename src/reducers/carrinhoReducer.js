import { RENDER_CARRINHO } from "../actions/actionTypes";
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
                descricao: 'Arroz branco, Camil 1kG'
            },
            {
                key: 2,
                foto: <img style={{width: '100px', height: '100px'}} src={feijao} alt="Feijão" />,
                titulo:'Feijão',
                preco: 6.99,
                descricao: 'Feijão carioca, Camil 1kG'

            },
            {
                id: 3,
                foto: <img style={{width: '100px', height: '100px'}} src={macarrao} alt="Macarrão" />,
                titulo:'Macarrão',
                preco:3.99,
                descricao: 'Macarrão divino sabor, 800g'

            }   
        ]
            
};

export const carrinhoReducer = (state = initialState, action) => {
  switch (action.type) {
    case RENDER_CARRINHO:
      return initialState;
    default:
      return state;
  }
};