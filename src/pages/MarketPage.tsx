import React, { FC, useEffect, useState } from 'react'
import { useParams } from 'react-router' 
import { useSelector } from 'react-redux'
import { Filters } from '../components/Filters'
import { SearchBar } from '../components/SearchBar'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import { ItemCard } from '../components/ItemCard'
import { IState } from '../interfaces/IRedux'
import { IPost } from '../interfaces/IPostLoaderPage'
import { MarketPageProps } from '../types/ItemPageTypes'

import "../styles/pages/MarketPage.css"

export const MarketPage: FC = () => {

    const [postList, setPostList] = useState<IPost[]>()
    const posts = useSelector((state: IState) => state.posts)
    const { group } = useParams<MarketPageProps>()
    useEffect(() => {
        let newArray = posts.filter((post: IPost) => post.catagory === group)
        setPostList(newArray)
    }, [posts, group])

    return (
        <>
            <Header />
            <SearchBar />
            <Filters />
            <div className="marketplace-container">
                <div className="marketplace-lists">
                    {postList &&  postList.map((post: IPost) => {
                    return <ItemCard 
                        _id={post._id}
                        title={post.title}
                        vendorCode={post.vendorCode}
                        key={post._id}
                        available={post.available}
                        model={post.model}
                        manufactor={post.manufactor}
                        discription={post.discription}
                        price={post.price}
                        catagory={post.catagory}
                        images={post.images}
                    />
                    })}
                </div>
            </div>
            <Footer />
        </>
    )
}