
export const formatarReal = (valor) => {
   return new Intl.NumberFormat('br-BR', { style: 'currency', currency: 'BRL' }).format(valor)
}