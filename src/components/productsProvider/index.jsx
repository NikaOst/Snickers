import { useState } from 'react';
import ProductsContext from '../../context';
import axios from 'axios';

const BASE_URL = 'https://69c39e3eb780a9ba03e759e6.mockapi.io';

function ProductsProvider({ children }) {
  const [cardData, setCardData] = useState();
  const [products, setProducts] = useState();

  // api /productsData
  const fetchPfoducts = async () => {};

  // api /cardData
  const addToCard = () => {};
  const deleteFromCard = () => {};
  const fetchCardData = () => {};

  return <ProductsContext.Provider value={{}}>{children}</ProductsContext.Provider>;
}
export default ProductsProvider;
