import React from 'react';
import Divider from '@mui/material/Divider';
import snapchat from '../assets/icons/snapchat.svg';
import x from '../assets/icons/x.svg';
import facebook_color from '../assets/icons/facebook_color.svg';
import { useForm } from 'react-hook-form';
import '../styles/ContactsStyle.css';

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
    if (!login) message = 'Поле c логином не должно быть пустым';
    if (login.length < 4 || login.length > 20)
      message = 'Логин должен содержать минимум 4 символа, максимум 20';
    const reg = /^[A-Za-z0-9_]+$/;
    if (!reg.test(login))
      message = 'Логин должен состоять только из латиницы, цифр и нижнего подчеркивания';
    return message;
  };

  const emailValidation = (email) => {
    if (!email) return 'Поле с email не должно быть пустым';
    const reg = /^\s*(?!.*[._-]{2})[\w\.-]+@([\w-])+\.+[\w-]{2,24}\s*$/;
    if (!reg.test(email)) return 'Должен быть корректный формат email';
    return true;
  };

  const messageValiduation = (message) => {
    if (!message) return 'Поле с сообщением не должно быть пустым';
  };

  return (
    <div className="contacts-main-container">
      <div>
        <h2>Контакты</h2>
        <Divider sx={{ marginBottom: '45px' }} variant="fullWidth" />
      </div>
      <div>
        <ul>
          <li>8 800 000 00 00</li>
          <li>emailexample@email.com</li>
        </ul>
        <div className="content-box">
          <form onSubmit={handleSubmit(postMessage)}>
            <div>
              <input
                {...register('email', {
                  validate: emailValidation,
                })}
                type="email"
                placeholder="Ваш email"
              />

              <input
                {...register('username', {
                  validate: loginValidation,
                })}
                type="text"
                placeholder="Ваше имя"
              />
            </div>
            <textarea
              {...register('text', { validate: messageValiduation })}
              placeholder="Введите сообщение"></textarea>
            {errors.email && <span>{errors.email.message}</span>}
            {errors.username && <span>{errors.username.message}</span>}
            {errors.text && <span>{errors.text.message}</span>}
            <input type="submit" value={'Отправить'} />
          </form>
          <div className="contact-links-box">
            <span>Найдите нас:</span>
            <div className="img-box">
              <a href="">
                <img src={snapchat} alt="snapchatSvg" />
              </a>
              <a href="">
                {' '}
                <img src={facebook_color} alt="facebook_colorSvg" />
              </a>
              <a href="">
                {' '}
                <img src={x} alt="xSvg" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ContactsPage;
