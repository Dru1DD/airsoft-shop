import React, { FC, useMemo } from 'react'
import { useSelector } from 'react-redux'
import { IPost } from '../interfaces/IPostLoaderPage'
import { IState } from '../interfaces/IRedux'
import '../styles/components/ProductSection.css'
import { ItemCard } from './ItemCard'

export const ProductSection: FC = () => {
    const posts = useSelector((state: IState) => state.posts)

    const memoizedItems = useMemo(() => {
        return posts.map((item: IPost) => {
            console.log(item)
            return <ItemCard 
                    _id={item._id}
                    title={item.title}
                    vendorCode={item.vendorCode}
                    price={item.price}
                    manufactor={item.manufactor}
                    discription={item.discription}
                    available={item.available}
                    model={item.model}
                    catagory={item.catagory}
                    images={item.images}
                    key={item._id}
            />
        })
    }, [posts])

    return (
        <div className="pc-container">
            <div className="pc-section">
                {memoizedItems}
            </div>
        </div>
    )
}