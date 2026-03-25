import React from 'react';
import Divider from '@mui/material/Divider';
import deleteIcon from '../assets/icons/deleteProduct.svg';
import lineDivide from '../assets/icons/line_vertical.svg';

function CardPage() {
  return (
    <div style={{ width: '80%', margin: '50px auto' }}>
      <div>
        <h2 style={{ fontSize: '36px', fontWeight: '700', marginBottom: '37px' }}>Корзина</h2>
        <Divider sx={{ marginBottom: '45px' }} variant="fullWidth" />
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '172px' }}>
        <div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              padding: '22px 23px',
              backgroundColor: '#FAFAFA',
            }}>
            <img style={{ marginRight: '36px' }} src="" alt="ProdImg" />
            <img style={{ marginRight: '36px' }} src={lineDivide} alt="lineDivide" />

            <span style={{ width: '100%', maxWidth: '288px' }}>
              Мужские Кроссовки Nike Air Zoom Pegasus{' '}
            </span>

            <div style={{ display: 'flex', flexDirection: 'column', marginRight: '160px' }}>
              <span>Цена:</span>
              <span>330 €</span>
            </div>

            <div
              style={{
                width: '66px',
                height: '66px',
                backgroundColor: '#F3F3F3',
                borderRadius: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <img style={{ cursor: 'pointer' }} src={deleteIcon} alt="deleteProdSvg" />
            </div>
          </div>
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            padding: '26px 28px',
            backgroundColor: '#FAFAFA',
          }}>
          <h1 style={{ margin: '0 auto 42px' }}>Итого</h1>

          <div
            style={{ display: 'flex', flexDirection: 'column', gap: '41px', marginBottom: '64px' }}>
            <span>Мужские Кроссовки Nike Air Zoom Pegasus </span>
            <span>Мужские Кроссовки Adidas Originals </span>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
            <Divider variant="fullWidth" />
            <span>Цена:</span>
            <span>330 €</span>
          </div>
        </div>
      </div>
    </div>
  );
}
export default CardPage;
