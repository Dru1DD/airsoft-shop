import React, { FC } from 'react'
import { useHistory } from 'react-router'
import { BiHeadphone } from 'react-icons/bi'
import "../styles/components/Footer.css"

export const Footer: FC = () => {
    const history = useHistory()
    return (
        <div className="footer">
            <div className="nav-footer">
                <div className="col-footer">
                    <div className="col-title">
                        <h3>Информация</h3>
                    </div>
                    <div className="col-links">
                        <span onClick={() => history.push('/guarantee')}>Гарантия</span>
                        <span onClick={() => history.push('/payment-and-delivery')}>Оплата и доставка</span>
                        <span onClick={() => history.push('/contact')}>Контакты</span>
                    </div>
                </div>
                <div className="col-footer">
                    <div className="col-title">
                        <h3>Информация клиентам</h3>
                    </div>
                    <div className="col-links">
                        <span>Карта сайта</span>
                        <span onClick={() => history.push('/help')}>Помощь</span>
                    </div>
                </div>
                <div className="col-footer">
                    <div className="col-title">
                        <h3>Экстра</h3>
                    </div>
                    <div className="col-links">
                        <span>Производители</span>
                        <span>Специальные предложения</span>
                    </div>
                </div>
            </div>
            <div className="help-footer">
                <BiHeadphone fill='white' size={48}/>
                <div className="help-phones">
                    <span>{`+38 (xxx) xxx xx xx`}</span>
                    <span>{`+38 (xxx) xxx xx xx`}</span>
                </div>
                <div className="help-days">
                    <span>Пн-Пт: 10:00 - 18:30</span>
                    <span>Сб: 10:00 - 13:00</span>
                </div>
            </div>
            <div className="cors-footer">
                <p>{`@ ${new Date().getFullYear()} Все права защищены`}</p>
            </div>
        </div>
    )
}