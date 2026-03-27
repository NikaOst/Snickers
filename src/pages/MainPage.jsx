import Divider from '@mui/material/Divider';
import Card from '@mui/material/Card';
import addProductIcon from '../assets/icons/btnaddToCart.svg';
import banner from '../assets/images/Banner.png';
import { useEffect } from 'react';
import { useContext } from 'react';
import ProductsContext from '../context';
import '../styles/MainStyle.css';

function MainPage() {
  const { fetchProducts, products, addToCard, cardData, fetchCardData } =
    useContext(ProductsContext);

  useEffect(() => {
    fetchProducts();
    fetchCardData();
  }, []);

  return (
    <div className="main-container">
      <div className="banner-box">
        <img className="banner-img" src={banner} alt="bootsBannerPng" />
      </div>
      <div>
        <div>
          <h2>Товары</h2>
          <Divider sx={{ marginBottom: '45px' }} variant="fullWidth" />
          <div className="products-box">
            {products?.map((prod) => {
              const isNotAvalible = cardData.some(
                (item) => Number(item.productId) === Number(prod.id),
              );
              return (
                <Card
                  variant={isNotAvalible ? 'outlined' : 'elevation'}
                  key={prod.id}
                  className="product-card"
                  style={{ opacity: isNotAvalible ? '60%' : '100%' }}>
                  <div className="product-card-img-box">
                    <img className="product-img" src={prod.image} alt="bootsImg" />
                    <p className="product-name">{prod.name}</p>
                  </div>
                  <div className="product-card-bottom">
                    <div className="product-price-box">
                      <span>Цена:</span>
                      <span>{prod.price}$</span>
                    </div>
                    <div>
                      <img
                        onClick={() => {
                          !isNotAvalible && addToCard(prod);
                        }}
                        style={{
                          cursor: isNotAvalible ? 'not-allowed' : 'pointer',
                        }}
                        src={addProductIcon}
                        alt="addProdIcon"
                      />
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
export default MainPage;
