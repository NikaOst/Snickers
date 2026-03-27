import React from 'react';
import Divider from '@mui/material/Divider';
import deleteIcon from '../assets/icons/deleteProduct.svg';
import lineDivide from '../assets/icons/line_vertical.svg';
import { useContext } from 'react';
import ProductsContext from '../context';
import { useEffect } from 'react';
import '../styles/CardStyle.css';

function CardPage() {
  const { cardData, fetchCardData, deleteFromCard } = useContext(ProductsContext);

  useEffect(() => {
    fetchCardData();
  }, []);

  return (
    <div className="card-main-container">
      <div>
        <h2>Корзина</h2>
        <Divider sx={{ marginBottom: '45px' }} variant="fullWidth" />
      </div>
      <div className="card-content-box">
        <div className="card-box">
          {cardData.length > 0 ? (
            cardData.map((prod) => {
              return (
                <div key={prod.id} className="product">
                  <img className="prod-img" src={prod.image} alt="ProdImg" />
                  <img className="divider" src={lineDivide} alt="lineDivide" />
                  <span className="prod-name">{prod.name}</span>

                  <div className="price-box">
                    <span>Цена:</span>
                    <span>{prod.price} €</span>
                  </div>

                  <div className="delete-btn-box">
                    <img
                      className="delete-btn"
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
          <div className="total-card">
            <div>
              <h1 style={{ margin: '0 auto 42px', textAlign: 'center' }}>Итого</h1>
              <div className="total-products">
                {cardData.map((prod) => {
                  return <span key={prod.id}>{prod.name}</span>;
                })}
              </div>
            </div>

            <div className="total-sum-box">
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
