import React, { FC, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import { SearchBar } from '../components/SearchBar'
import { AutoSlider } from '../components/AutoSlider'
import { Filters } from '../components/Filters'
import { ProductSection } from '../components/ProductSection'
import axios from 'axios'
import { POST_LOAD } from '../redux/action/actionTypes'
import { Loading } from '../components/Loading'
import { IPost } from '../interfaces/IPostLoaderPage'

export const HomePage: FC = () => {

    const dispatch = useDispatch()
    const [ loading, setLoading ] = useState<boolean>(true)

    useEffect(() => {
        const getDatafromServer = async () => {
            let result =  await axios.get('https://whispering-shelf-11658.herokuapp.com/posts')
            
            let object = JSON.parse(JSON.stringify(result.data))

            result.data.map((item: IPost, index: number) => {
                item.images.map((elem: string, idx: number) => {
                    object[index].images[idx] = 'https://whispering-shelf-11658.herokuapp.com/' + elem
                })
            })

            // for(let i of object) {
            //     i.images.forEach((url: string) => url = `https://whispering-shelf-11658.herokuapp.com/${url}`)
            // }
            
            setLoading(!loading)
            await dispatch({
                type: POST_LOAD,
                payload: object
            })
        }
        getDatafromServer()
    }, [])
    
    return (
        <div>
            <Header />
            <SearchBar />
            <Filters />
            <AutoSlider />
            {loading ? <Loading /> : <ProductSection />}
            <Footer />
        </div>
    )
} 