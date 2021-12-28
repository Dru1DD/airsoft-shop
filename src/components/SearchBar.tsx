import React, { FC, useState } from 'react'
import { useHistory } from 'react-router'
import { useSelector } from 'react-redux'
import { BsFillBasketFill } from 'react-icons/bs'
import logo from '../assets/logoshop.png'

import '../styles/components/SearchBar.css'
import { IState } from '../interfaces/IRedux'

export const SearchBar: FC = () => {
    const [ searchTerm, setSearchTerm ] = useState<string>('')

    const orders = useSelector((state: IState) => state.order)
    const history = useHistory() 

    return (
        <div className="search-container">
            <div className="search-logo" onClick={() => history.push('/')}>
                <img src={logo} alt="logo" />
            </div>
            <div className="search-main">
                <input 
                    className="search-input"
                    value={searchTerm}
                    placeholder="Название товара"
                    onChange={(e) => setSearchTerm(e.target.value)}
                    onSubmit={() => console.log(searchTerm)}
                />
                <button
                    className="search-button"
                    onClick={() => console.log(searchTerm)}
                >
                    Поиск
                </button>
            </div>
            <div className="search-basket" onClick={() => history.push('/basket')}>
                    <BsFillBasketFill fill={'white'} size={24}/>
                    {orders.length > 0 ? <span>{orders.length}</span> : null}
            </div>
        </div>
    )
}