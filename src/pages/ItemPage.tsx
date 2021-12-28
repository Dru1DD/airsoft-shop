import React, { FC, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router'
import { useSelector } from 'react-redux'
import { SearchBar } from '../components/SearchBar'
import { ItemPageProps } from '../types/ItemPageTypes'
import { IState } from '../interfaces/IRedux'
import { IPost } from '../interfaces/IPostLoaderPage'
import { Footer } from '../components/Footer'
import { BsFillBasketFill } from 'react-icons/bs'
import "../styles/pages/ItemPage.css"
import { Filters } from '../components/Filters'
import { ADD_TO_ORDER } from '../redux/action/actionTypes'

export const ItemPage: FC = () => {
    const { id } = useParams<ItemPageProps>()
    const posts = useSelector((state: IState) => state.posts)

    const [ postData, setPostData ] = useState<IPost>()
    const [ imgUrl, setImgUrl ] = useState<string>('')
    const [ count, setCount ] = useState<number>(0)

    const dispatch = useDispatch()

    useEffect(() => {
        posts.map((item: IPost) => {
            if(item._id === id) {
                setPostData(item)
                setImgUrl(item.images[0])
            }
        })
    }, [])

    const minusClickHandler: () => void = () => {
        if(count === 0) setCount(0)
        else setCount (count - 1)
        
    }
    const addClickhandler: () => void = () => {
        setCount(count + 1)
    }

    const basketHandler: () => void = async () => {
        await dispatch({
            type: ADD_TO_ORDER,
            payload: {
                item: postData ? postData : null,
                count: count
            }
        })
        console.log(`Count: ${count}, id: ${postData ? postData._id : null}`)
    }
    return (
        <>
            <SearchBar />
            <Filters />
            <div className='item-container'>
                <div className="item-container-main">
                    <div className='item-images'>
                        <div className="item-main-image">
                            <img src={imgUrl} alt="airsoft-gun" />
                        </div>
                        <div className="item-images-slider">
                            {
                                postData ? postData.images.map((url: string, idx: number) => {
                                    return (
                                        <div 
                                            className="item-image-slide" 
                                            key={idx}
                                            onClick={() => setImgUrl(url)}
                                        >
                                            <img src={url} alt={`idx`}  /> 
                                        </div>
                                        
                                    )
                                }) : null
                            }
                        </div>
                    </div>
                    <div className='item-info'>
                        <div className="item-info-top">
                            <span>Артикул: ${postData ? postData.vendorCode : null}</span>
                        </div>
                        <div className="item-info-title">
                            <h3>{postData ? postData.title : null}</h3>
                        </div>
                        <div className="item-info-price">
                            <span>$ {postData ? postData.price : null}</span>
                            <div className="item-info-counter">
                                Количество:
                                <button onClick={minusClickHandler}>-</button>
                                <span> { count } </span>
                                <button onClick={addClickhandler}>+</button>
                            </div>
                        </div>
                        <div className="item-info-main">
                            <div className="item-info-row">
                                <p>Производитель</p>
                                <p>{postData ? postData.manufactor : null}</p>
                            </div>
                            <div className="item-info-row">
                                <p>Модель</p>
                                <p>{postData ? postData.model : null}</p>
                            </div>
                            <div className="item-info-row">
                                <p>Наличие</p>
                                <p>{postData ?
                                    postData.available ? 'Есть в наличии' : 'Нету в наличии'
                                    : null
                                }</p>
                            </div>
                        </div>
                        <div className="item-info-bottom">
                            <button
                                className="item-info-btn"
                                onClick={basketHandler}
                            >
                                 <BsFillBasketFill fill={'balck'} size={24}/>Добавить в корзину
                            </button>
                        </div>
                    </div>
                </div>
                <div className="item-container-discription">
                    <h2>Описание</h2>
                    <div className="item-info-discription">
                        {postData ? postData.discription : null}
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}