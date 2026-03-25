import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import Card from '@mui/material/Card';
import boots from '../assets/images/boots.png';
import addProductIcon from '../assets/icons/btnaddToCart.svg';
import banner from '../assets/images/Banner.png';

function MainPage() {
  return (
    <div style={{ width: '80%', margin: '0 auto' }}>
      <div
        style={{
          margin: '28px auto',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom: '72px',
        }}>
        <img style={{ width: '100%' }} src={banner} alt="bootsBannerPng" />
      </div>
      <div>
        <div>
          <h2 style={{ fontSize: '36px', fontWeight: '700', marginBottom: '37px' }}>Товары</h2>
          <Divider sx={{ marginBottom: '45px' }} variant="fullWidth" />
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              marginBottom: '172px',
            }}>
            <Card
              style={{
                maxWidth: '386px',
                borderRadius: '42px',
                padding: '30px 30px',
              }}>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '32px',
                  marginBottom: '42px',
                }}>
                <img style={{ width: '278px', height: '127px' }} src={boots} alt="bootsImg" />
                <p style={{ fontSize: '24px', fontWeight: 400 }}>
                  Мужские Кроссовки Nike Air Zoom Pegasus{' '}
                </p>
              </div>
              <div
                style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                  }}>
                  <span style={{ fontSize: '14px', color: '#666666' }}>Цена:</span>
                  <span style={{ fontSize: '24px', fontWeight: 700 }}>180$</span>
                </div>
                <div>
                  <img src={addProductIcon} alt="addProdIcon" />
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
export default MainPage;
