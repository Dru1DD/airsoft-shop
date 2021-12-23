import React, { FC } from 'react'
import { useHistory } from 'react-router'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import '../styles/Guarantee.css'

export const GuaranteePage: FC = () => {
    const history = useHistory()
    return (
        <>
        <Header />
        <div className="g-container">
            <div className="g-title">
                Гарантия
            </div>
            <div className="g-nav">
                <span className="g-nav-link" onClick={() => history.push('/')}>Главная {" "}</span>
                <span>&gt;</span>
                <span>Гарантия {" "}</span>
            </div>
            <div className="g-main">
                <div className="g-content">
                    <p>Меня зовут X и я являюсь учредителем и директором данного магазина.</p>
                    <br />
                    <p> Я также, как и большинство наших клиентов часто совершаю покупки через
                        интернет. Потому как никто другой понимаю, что каждая покупка должны приносить
                        радость и удовольствие, а это сильно зависит от качества и скорости обслуживания
                    </p>
                    <br />
                    <p>Именно поэтому мы стараемся как можно быстрее и в удобной для Вас форме сделать всё, 
                        что зависит от нас для того, чтобы Вы получали удовольствие от совершения покупок в 
                        нашем магазине
                    </p>
                    <br />
                    <p>Итак, к гарантии</p>
                    <br />
                    <p>Мы польностью действуем в украинском правовом поле, а значит выполняем все, что предусмотрено ЗУ
                        {`"О защите прав потребителей"`}
                    </p>
                    <br />
                    <p>Именно поэтому я гарантирую, что если Вам что-то не подойдет или Вы передумали,
                        или решили, что погарячились, мы полностью вернем Вам деньги или замееним приобретенный
                        товар. как это предусмотрено в ЗУ {`"О защите прав потребителей"`}
                    </p>
                    <br />
                    <p>В случае возникновения вопросов относительно гарнтий Вы можете выяснить по телефону:
                        +38 (xxx) xxx xx xx, или написав сразу мне на почту: email@gmail.com. И мы все решим в кратчайшие сроки.
                    </p>
                    <br />
                    <p>Желаю Вам приятных покупок! :)</p>

                </div>
                <div className="g-content-nav">
                    <div className="g-content-nav-col">
                        <div className="g-content-nav-col-title">
                            Информация
                        </div>
                        <div className="g-content-nav-col-item-active">
                            Гарантия
                        </div>
                        <div className="g-content-nav-col-item" onClick={() => history.push('/payment-and-delivery')}>
                            Оплата и доставка
                        </div>
                        <div className="g-content-nav-col-item" onClick={() => history.push('/help')}>
                            Помощь
                        </div>
                    </div>
                    <div className="g-content-nav-col">
                        <div className="g-content-nav-col-title">
                            Служба поддержки
                        </div>
                        <div className="g-content-nav-col-item" onClick={() => history.push('/contact')}>
                            Контакты
                        </div>
                        <div className="g-content-nav-col-item">
                            Возврат товара
                        </div>
                        <div className="g-content-nav-col-item">
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