import { useState } from 'react';
import ProductsContext from '../../context';
import axios from 'axios';

const BASE_URL = 'https://69c39e3eb780a9ba03e759e6.mockapi.io';

function ProductsProvider({ children }) {
  const [cardData, setCardData] = useState([]);
  const [products, setProducts] = useState([]);

  // api /productsData
  const fetchProducts = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/productsData`);
      setProducts(response.data);
    } catch (error) {
      console.error('Failed to fetch products:', error);
    }
  };

  // api /cardData
  const addToCard = () => {};
  const deleteFromCard = () => {};
  const fetchCardData = () => {};

  return (
    <ProductsContext.Provider value={{ products, fetchProducts }}>
      {children}
    </ProductsContext.Provider>
  );
}
export default ProductsProvider;
