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
  const addToCard = async (data) => {
    try {
      const product = {
        productId: data.id,
        name: data.name,
        price: data.price,
        image: data.image,
      };
      const response = await axios.post(`${BASE_URL}/cardData`, product);
      setCardData((prev) => [...prev, response.data]);
    } catch (error) {
      console.error('Failed to post product:', error);
    }
  };
  const deleteFromCard = async (id) => {
    try {
      await axios.delete(`${BASE_URL}/cardData/${id}`);
      setCardData((prev) => prev.filter((item) => item.id !== id));
    } catch (error) {
      console.error('Failed to delete product:', error);
    }
  };
  const fetchCardData = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/cardData`);
      setCardData(response.data);
    } catch (error) {
      console.error('Failed to fetch products:', error);
    }
  };

  return (
    <ProductsContext.Provider
      value={{ products, cardData, fetchProducts, addToCard, fetchCardData, deleteFromCard }}>
      {children}
    </ProductsContext.Provider>
  );
}
export default ProductsProvider;
