import React, { FC } from 'react'
import { IPost } from '../interfaces/IPostLoaderPage'
import { Link } from 'react-router-dom'
import { BsFillBasketFill } from 'react-icons/bs'
import "../styles/components/ItemCard.css"

export const ItemCard: FC<IPost> = ({
    _id,
    title,
    vendorCode,
    price,
    manufactor,
    discription,
    available,
    model,
    catagory,
    images
}) => {
    return(
        <Link to={`/shop/${_id}`}>
            <div className='ic-container' onClick={() => console.log(`Item ID: ${_id}`)}>
                <div className="ic-image">
                    <img src={images[0]} alt={_id} />
                </div>
                <div className="ic-title">
                    <h4>{title}</h4>
                </div>
                <div className="ic-info">
                    <div className="ic-price">
                        <span>$ {price}</span>
                    </div>
                    <div className="ic-btn">
                        <BsFillBasketFill fill={'white'} size={24}/>
                    </div>
                </div>
            </div>
        </Link>
        
    )
}