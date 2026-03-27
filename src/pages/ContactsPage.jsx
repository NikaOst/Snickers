import React from 'react';
import Divider from '@mui/material/Divider';
import snapchat from '../assets/icons/snapchat.svg';
import x from '../assets/icons/x.svg';
import facebook_color from '../assets/icons/facebook_color.svg';
import { useForm } from 'react-hook-form';

function ContactsPage() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: 'onSubmit',
  });

  const postMessage = async (data) => {
    try {
      const userMessage = {
        login: data.username,
        email: data.email,
        message: data.text,
      };
      console.log(userMessage);
      reset();
    } catch (error) {
      console.log('Error: POST message');
    }
  };

  const loginValidation = (login) => {
    let message = true;
    if (!login) message = 'Поле не должно быть пустым';
    if (login.length < 4 || login.length > 20) message = 'Минимум 4 символа, максимум 20';
    const reg = /^[A-Za-z0-9_]+$/;
    if (!reg.test(login)) message = 'Только латиница, цифры и нижнее подчеркивание';
    return message;
  };

  const emailValidation = (email) => {
    if (!email) return 'Поле не должно быть пустым';
    const reg = /^\s*(?!.*[._-]{2})[\w\.-]+@([\w-])+\.+[\w-]{2,24}\s*$/;
    if (!reg.test(email)) return 'Должен быть корректный формат email';
    return true;
  };

  const messageValiduation = (message) => {
    if (!message) return 'Поле не должно быть пустым';
  };

  return (
    <div style={{ width: '80%', margin: '50px auto 646px' }}>
      <div>
        <h2 style={{ fontSize: '36px', fontWeight: '700', marginBottom: '37px' }}>Контакты</h2>
        <Divider sx={{ marginBottom: '45px' }} variant="fullWidth" />
      </div>
      <div>
        <ul
          style={{
            opacity: '50%',
            display: 'flex',
            flexDirection: 'column',
            gap: '13px',
            marginBottom: '67px',
            marginLeft: '15px',
            fontSize: '18px',
            lineHeight: '81%',
            fontWeight: '400',
          }}>
          <li>8 800 000 00 00</li>
          <li>emailexample@email.com</li>
        </ul>
        <div style={{ display: 'flex', gap: '79px' }}>
          <form
            onSubmit={handleSubmit(postMessage)}
            style={{ display: 'flex', flexDirection: 'column', gap: '39px', width: '50%' }}>
            <div style={{ display: 'flex', gap: '39px' }}>
              <input
                {...register('email', {
                  validate: emailValidation,
                })}
                style={{
                  padding: '25px',
                  backgroundColor: '#FAFAFA',
                  borderRadius: '10px',
                  border: 'none',
                  width: '100%',
                  maxWidth: '364px',
                  fontSize: '18px',
                  lineHeight: '81%',
                  fontWeight: '400',
                }}
                type="email"
                placeholder="Ваш email"
              />

              <input
                {...register('username', {
                  validate: loginValidation,
                })}
                style={{
                  padding: '25px',
                  backgroundColor: '#FAFAFA',
                  borderRadius: '10px',
                  border: 'none',
                  width: '100%',
                  maxWidth: '364px',
                  fontSize: '18px',
                  lineHeight: '81%',
                  fontWeight: '400',
                }}
                type="text"
                placeholder="Ваше имя"
              />
            </div>
            <textarea
              {...register('text', { validate: messageValiduation })}
              style={{
                padding: '28px 21px 48px',
                backgroundColor: '#FAFAFA',
                borderRadius: '10px',
                border: 'none',
                resize: 'none',
                fontSize: '18px',
                lineHeight: '81%',
                fontWeight: '400',
              }}
              placeholder="Введите сообщение"></textarea>
            {errors.email && <span>{errors.email.message}</span>}
            {errors.username && <span>{errors.username.message}</span>}
            {errors.text && <span>{errors.text.message}</span>}
            <input
              style={{
                backgroundColor: '#090D1A',
                width: '100%',
                maxWidth: '131px',
                padding: '21px',
                color: '#FFFFFF',
                borderRadius: '10px',
                border: 'none',
                alignSelf: 'end',
                cursor: 'pointer',
                fontSize: '14px',
                lineHeight: '81%',
                fontWeight: '600',
              }}
              type="submit"
              value={'Отправить'}
            />
          </form>
          <div
            style={{
              backgroundColor: '#FAFAFA',
              padding: '18px 65px 72px',
              display: 'flex',
              flexDirection: 'column',
              gap: '39px',
              alignItems: 'center',
              height: '100%',
              maxHeight: '221px',
              borderRadius: '10px',
            }}>
            <span style={{ fontSize: '20px', lineHeight: '81%', fontWeight: '600' }}>
              Найдите нас:
            </span>
            <div style={{ display: 'flex', gap: '50px' }}>
              <img src={snapchat} alt="snapchatSvg" />
              <img src={facebook_color} alt="facebook_colorSvg" />
              <img src={x} alt="xSvg" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ContactsPage;
