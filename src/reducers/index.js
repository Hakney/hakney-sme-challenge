import { clickReducer } from './clickReducer';
import { carrinhoReducer } from './carrinhoReducer';
import { combineReducers } from 'redux';

export const Reducers = combineReducers({
  clickState: clickReducer,
  carrinhoState: carrinhoReducer
});