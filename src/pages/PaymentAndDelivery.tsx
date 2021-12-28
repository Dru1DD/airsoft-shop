import React, { FC } from 'react'
import { useHistory } from 'react-router'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import '../styles/pages/PaymentAndDelivery.css'

export const PaymentAndDelivery: FC = () => {
    const history = useHistory()

    return (
        <>
        <Header />
        <div className="pad-container">
            <div className="pad-title">
                ОПЛАТА И ДОСТАВКА
            </div>
            <div className="pad-nav">
                <span className="pad-nav-link" onClick={() => history.push('/')}>Главная {" "}</span>
                <span>Оплата и доставка {" "}</span>
            </div>
            <div className="pad-main">
                <div className="pad-content">
                    <h3>Доставка</h3>
                    <br />
                    <p> Наш интернет-магазин name.com.ua осуществляет отправки заказов транспортной компанией
                         "Новая Почта". Время доставки товара по Украине – 1-2 дня. 
                        Для доставки Вы можете выбрать любое из отделений компании или заказать
                         адресную доставку. Наши менеджеры оперативно оформят Ваш заказ и сообщат 
                         номер декларации. Именно поэтому заказ оформленный до 14:00 выедет к Вам в 
                         тот же день!
                    </p>
                    <br />
                    <p>Найти ближайшее отделение компании "Новая Почта"
                         Вы можете перейдя по этой ссылке: <a href="https://novaposhta.ua/office">https://novaposhta.ua/office</a>
                    </p>
                    <br />
                    <p>Оплата доставки осуществляется при получении заказа, согласно тарифам перевозчика. 
                        По всем вопросах об отправке заказов Вы можете обратиться по тел. 
                        +38 (XXX) XXX XX XX. Способы и правила оплаты</p>
                    <br />
                    <p>Вы можете использовать следующие способы оплаты:</p>
                    <ul>
                        <li>наложенный платеж (оплата заказа при получении)</li>
                        <li>безналичный расчет</li>
                    </ul>
                    <br />
                    <h3>НАЛОЖЕННЫЙ ПЛАТЕЖ</h3>
                    <br />
                    <p> Вы можете произвести оплату наложенным платежом по территории Украины через 
                        компанию «Нова Пошта». После оформления заказа и согласования всей деталей 
                        наши менеджеры сообщат Вам сумму заказа и примерное время его получения. 
                        Вы просто оплачиваете и забираете товар в выбранном Вами отделении «Новой Почты». 
                        (Этот вариант оплаты является самым дорогим, так как обратную пересылку денег 
                        оплачивает заказчик, в среднем 21-25 грн.).
                    </p>
                    <br />
                    <p>Многие покупатели считают этот способ самым безопасным, так как не требуется предоплаты заказа.</p>
                    <h3>БЕЗНАЛИЧНЫЙ РАСЧЕТ</h3>
                    <br />
                    <p> В течении 3-х банковских дней с момента оформления заказа 
                        Вы должны выполнить 100% предоплату заказа путем перечисления денежных 
                        средств на расчетный счет магазина. Банковские реквизиты будут высланы 
                        Вам по почте после оформления заказа.
                    </p>
                    <br />
                    <p>Среднее время прохождения платежа по безналичному расчету - 1 банковский день.</p>
                    <h3>СРОКИ ПРЕДОПЛАТЫ</h3>
                    <br />
                    <p> После того, как Вы оформили заказ, все товары по вашему заказу резервируются 
                        на срок 3 рабочих дня. Если предоплата не будет произведена в течении указанного
                         времени - заказ будет аннулирован и зарезервированный для Вас товар снова 
                         выставлен на продажу.
                    </p>
                    <br />
                    <p>Если по каким-либо причинам Вы не можете выполнить оплату в течении 3-х банковских дней,
                         но намереваетесь это сделать позже, - пожалуйста, сообщите об этом нашему менеджеру
                          по телефону, и срок ожидания оплаты Вашего заказа будет продлен.</p>
                </div>
                <div className="pad-content-nav">
                    <div className="pad-content-nav-col">
                        <div className="pad-content-nav-col-title">
                            Информация
                        </div>
                        <div className="pad-content-nav-col-item" onClick={() => history.push('/guarantee')}>
                            Гарантия
                        </div>
                        <div className="pad-content-nav-col-item-active">
                            Оплата и доставка
                        </div>
                        <div className="pad-content-nav-col-item" onClick={() => history.push('/help')}>
                            Помощь
                        </div>
                    </div>
                    <div className="pad-content-nav-col">
                        <div className="pad-content-nav-col-title">
                            Служба поддержки
                        </div>
                        <div className="pad-content-nav-col-item" onClick={() => history.push('/contact')}>
                            Контакты
                        </div>
                        <div className="pad-content-nav-col-item">
                            Возврат товара
                        </div>
                        <div className="pad-content-nav-col-item">
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