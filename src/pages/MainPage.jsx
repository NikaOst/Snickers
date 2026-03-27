import Divider from '@mui/material/Divider';
import Card from '@mui/material/Card';
import addProductIcon from '../assets/icons/btnaddToCart.svg';
import banner from '../assets/images/Banner.png';
import { useEffect } from 'react';
import { useContext } from 'react';
import ProductsContext from '../context';

function MainPage() {
  const { fetchProducts, products, addToCard, cardData, fetchCardData } =
    useContext(ProductsContext);

  useEffect(() => {
    fetchProducts();
    fetchCardData();
  }, []);

  return (
    <div style={{ width: '80%', margin: '0 auto' }}>
      <div
        style={{
          margin: '28px auto',
          display: 'flex',
          justifyContent: 'center',
          marginBottom: '72px',
        }}>
        <img style={{ width: '82vw' }} src={banner} alt="bootsBannerPng" />
      </div>
      <div>
        <div>
          <h2 style={{ fontSize: '36px', fontWeight: '700', marginBottom: '37px' }}>Товары</h2>
          <Divider sx={{ marginBottom: '45px' }} variant="fullWidth" />
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '24px',
              marginBottom: '172px',
            }}>
            {products.map((prod) => {
              const isNotAvalible = cardData.some(
                (item) => Number(item.productId) === Number(prod.id),
              );
              return (
                <Card
                  variant={isNotAvalible ? 'outlined' : 'elevation'}
                  key={prod.id}
                  style={{
                    maxWidth: '386px',
                    borderRadius: '42px',
                    padding: '30px 30px',
                    opacity: isNotAvalible ? '60%' : '100%',
                  }}>
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      marginBottom: '42px',
                    }}>
                    <img
                      style={{ width: '278px', height: 'auto' }}
                      src={prod.image}
                      alt="bootsImg"
                    />
                    <p style={{ fontSize: '24px', fontWeight: 400 }}>{prod.name}</p>
                  </div>
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                    }}>
                    <div
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                        marginBottom: '20px',
                      }}>
                      <span style={{ fontSize: '14px', color: '#666666' }}>Цена:</span>
                      <span style={{ fontSize: '24px', fontWeight: 700 }}>{prod.price}$</span>
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
