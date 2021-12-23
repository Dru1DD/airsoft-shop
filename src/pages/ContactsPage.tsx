import React, { FC } from 'react'
import { useHistory } from 'react-router'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import '../styles/ContactsPage.css'

export const ContactPage: FC = () => {
    const history = useHistory()
    return (
        <>
        <Header />
        <div className="contact-container">
            <div className="contact-title">
                Контакты
            </div>
            <div className="contact-nav">
                <span className="contact-nav-link" onClick={() => history.push('/')}>Главная {" "}</span>
                <span>&gt;</span>
                <span>Контакты {" "}</span>
            </div>
            <div className="contact-main">
                <div className="contact-content">
                    <h3>НАШЕ МЕСТОНАХОЖДЕНИЕ</h3>
                    <br />
                    <p>г. ВАИІВАиІаіваіва, ул. ігваиівгаиівга</p>
                    <br />
                    <h4>Телефон</h4>
                    <br />
                    <p>+38 (XXX) XXX XX XX</p>
                    <p>+38 (XXX) XXX XX XX</p>
                    <br />
                    <h4>Режим работы</h4>
                    <br />
                    <p>Пн-Пт: 10:00 - 18:30</p>
                    <p>Сб: 10:00 - 13:00</p>
                </div>
                <div className="contact-content-nav">
                    <div className="contact-content-nav-col">
                        <div className="contact-content-nav-col-title">
                            Информация
                        </div>
                        <div className="contact-content-nav-col-item" onClick={() => history.push('/guarantee')}>
                            Гарантия
                        </div>
                        <div className="contact-content-nav-col-item" onClick={() => history.push('/payment-and-delivery')}>
                            Оплата и доставка
                        </div>
                        <div className="contact-content-nav-col-item" onClick={() => history.push('/help')}>
                            Помощь
                        </div>
                    </div>
                    <div className="contact-content-nav-col">
                        <div className="contact-content-nav-col-title">
                            Служба поддержки
                        </div>
                        <div className="contact-content-nav-col-item-active">
                            Контакты
                        </div>
                        <div className="contact-content-nav-col-item">
                            Возврат товара
                        </div>
                        <div className="contact-content-nav-col-item">
                           Карта сайта
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer />
        </>
        
    )
}