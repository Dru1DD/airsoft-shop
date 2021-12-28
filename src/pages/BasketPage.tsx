import React, { FC } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Header } from '../components/Header'
import { SearchBar } from '../components/SearchBar'
import { Filters } from '../components/Filters'
import { Footer } from '../components/Footer'
import { ImCross } from 'react-icons/im'
import "../styles/pages/BasketPage.css"
import { IOrder, IState } from '../interfaces/IRedux'
import { REMOVE_ORDER } from '../redux/action/actionTypes'

export const BasketPage: FC = () => {

    const orders = useSelector((state: IState) => state.order)
    const dispatch = useDispatch()

    const deleteHandler: (id: string | undefined) => void = async (id) => {
        if(id) {
            await dispatch({
                type: REMOVE_ORDER,
                payload: id
            })
        }
        
    }
    return (
        <>
            <Header />
            <SearchBar />
            <Filters />
            <div className="basket-container">
                <div className="basket-title">
                    Корзина
                </div>
                <div className="basket-main">
                    
                        { orders.length === 0 
                        ? <h3>Корзина пуста</h3>
                        : (
                            <div className="basket-items-list">
                                <div className="basket-items-headers">
                                    <div className="basket-image-header">
                                        Изображение
                                    </div>
                                    <div className="basket-title-header">
                                    Название
                                    </div>
                                    <div className="basket-model-header">
                                    Модель
                                    </div>
                                    <div className="basket-count-header">
                                    Количество
                                    </div>
                                    <div className="basket-price-header">
                                    Цена за шт.
                                    </div>
                                    <div className="basket-total-header">
                                    Всего
                                    </div>
                                </div>
                                {orders.map((order: IOrder, index: number) => {
                                    return (
                                        <div className="basket-item" key={index}>
                                            <div className="basket-image">
                                                <img src={order.item.images[0]} alt={'basket'} />
                                            </div>
                                            <div className="basket-item-title">
                                                {order.item.title}
                                            </div>
                                            <div className="basket-item-model">
                                                {order.item.model}
                                            </div>
                                            <div className="basket-item-count">
                                                {order.count}
                                            </div>
                                            <div className="basket-item-price">
                                                {order.item.price}
                                            </div>
                                            <div className="basket-item-total">
                                                {order.item.price * order.count}
                                            </div>
                                            <div className="basket-delete-item">
                                                <ImCross fill={'black'} size={18} onClick={() => deleteHandler(order.item._id)}/>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        )
                        
                    }
                    
                </div>
            </div>  
            <Footer />
        </>
    )
}