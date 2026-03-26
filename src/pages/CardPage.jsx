import React from 'react';
import Divider from '@mui/material/Divider';
import deleteIcon from '../assets/icons/deleteProduct.svg';
import lineDivide from '../assets/icons/line_vertical.svg';
import { useContext } from 'react';
import ProductsContext from '../context';
import { useEffect } from 'react';

function CardPage() {
  const { cardData, fetchCardData, deleteFromCard } = useContext(ProductsContext);

  useEffect(() => {
    fetchCardData();
  }, []);

  return (
    <div style={{ width: '80%', margin: '50px auto' }}>
      <div>
        <h2 style={{ fontSize: '36px', fontWeight: '700', marginBottom: '37px' }}>Корзина</h2>
        <Divider sx={{ marginBottom: '45px' }} variant="fullWidth" />
      </div>
      <div
        style={{
          display: 'flex',
          gap: '140px',
          justifyContent: 'space-between',
          marginBottom: '172px',
        }}>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '67px',
          }}>
          {cardData.length > 0 ? (
            cardData.map((prod) => {
              return (
                <div
                  key={prod.id}
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: '22px 23px',
                    backgroundColor: '#FAFAFA',
                  }}>
                  <img
                    style={{ marginRight: '36px', width: '100px', height: 'auto' }}
                    src={prod.image}
                    alt="ProdImg"
                  />
                  <img style={{ marginRight: '36px' }} src={lineDivide} alt="lineDivide" />

                  <span
                    style={{
                      width: '100%',
                      maxWidth: '270px',
                      fontSize: '19px',
                      fontWeight: '400',
                    }}>
                    {prod.name}
                  </span>

                  <div style={{ display: 'flex', flexDirection: 'column', marginRight: '100px' }}>
                    <span style={{ fontSize: '14px' }}>Цена:</span>
                    <span style={{ fontSize: '19px', fontWeight: '700' }}>{prod.price} €</span>
                  </div>

                  <div
                    style={{
                      width: '56px',
                      height: '56px',
                      backgroundColor: '#F3F3F3',
                      borderRadius: '100%',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <img
                      style={{ cursor: 'pointer', width: '25px', height: '25px' }}
                      src={deleteIcon}
                      alt="deleteProdSvg"
                      onClick={() => deleteFromCard(prod.id)}
                    />
                  </div>
                </div>
              );
            })
          ) : (
            <div>
              <span>В корзине пока нет товаров</span>
            </div>
          )}
        </div>

        {cardData.length > 0 && (
          <div
            style={{
              width: '100%',
              maxWidth: '350px',
              height: '30%',
              display: 'flex',
              flexDirection: 'column',
              padding: '20px 20px',
              backgroundColor: '#FAFAFA',
              justifyContent: 'space-between',
            }}>
            <div>
              <h1 style={{ margin: '0 auto 42px', textAlign: 'center' }}>Итого</h1>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '41px',
                  marginBottom: '64px',
                }}>
                {cardData.map((prod) => {
                  return (
                    <span
                      key={prod.id}
                      style={{ fontSize: '19px', fontWeight: '400', lineHeight: '98%' }}>
                      {prod.name}
                    </span>
                  );
                })}
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <Divider variant="fullWidth" />
              <span style={{ fontSize: '14px' }}>Цена:</span>
              <span style={{ fontSize: '19px', fontWeight: '700' }}>
                {cardData.reduce((acc, prod) => {
                  acc = acc + Number(prod.price);
                  return acc;
                }, 0)}
                €
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
export default CardPage;
