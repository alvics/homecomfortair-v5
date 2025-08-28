import { CartProvider } from './src/contexts/CartContext';

export const wrapRootElement = ({ element }) => {
  return <CartProvider>{element}</CartProvider>;
};