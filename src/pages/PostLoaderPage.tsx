import React, { FC, useState } from 'react'
import { useForm } from 'react-hook-form'
import { IPost } from '../interfaces/IPostLoaderPage'
import axios from 'axios'

import "../styles/pages/PostLoader.css"

export const PostLoaderPage: FC = () => {

    const { register, handleSubmit } = useForm()
    const [ imgUrls, setImgUrls ] = useState<string[]>([])

    const submitHandler = async (data: IPost) => {
        const {
            title,
            vendorCode,
            price,
            manufactor,
            discription,
            available,
            model,
            catagory,
            images
        } = data

        const formData = new FormData()
    
        
        for( let i = 0; i < images.length; i++ ) {
            formData.append(`image`, images[i])
        }
        await axios
            .post('https://whispering-shelf-11658.herokuapp.com/upload', formData)
            .then(res => setImgUrls(res.data.split(',')))
            .catch(e => console.log(e))

        const postData: IPost = {
            title,
            vendorCode,
            price,
            manufactor,
            discription,
            available,
            catagory,
            model,
            images: imgUrls
        }

        console.log(imgUrls)
        await axios
            .post('https://whispering-shelf-11658.herokuapp.com/post', postData)
            .then(res => console.log(res))
            .catch(e => console.log(e))
            
    }

    return (
        <div className="post-loader">
            <form onSubmit={handleSubmit(submitHandler)}>
                <label>
                    Название товара:
                    <input {...register('title', { required: true })} />
                </label>
                <label>
                    Артикул:
                    <input {...register('vendorCode', { required: true })} />
                </label>
                <label>
                    Цена: 
                    <input type="number" {...register('price', {required: true})} />
                </label>
                <label>
                    Производитель:
                    <input {...register('manufactor', { required: true })} />
                </label>
                <label>
                    Модель товара:
                    <input {...register('model', { required: true })} />
                </label>
                <label>
                    Есть в наличии?
                    <input type="checkbox" {...register('available', { required: true })} />
                </label>
                <label>
                    Описание:
                    <textarea {...register('discription', { required: true, minLength: 20})} />
                </label>
                <label>
                    Изображения:
                    <input type="file" multiple {...register('images', { required: true, minLength: 3, maxLength: 5 })} />
                </label>
                <label>
                    Категория:
                    <input {...register('catagory', { required: true })} />
                    Страйкбольное оружие: Штурмовое оружие, Пистолеты
                    Снаряжение: Форма, Разгрузочные системы, бронежилеты
                </label>
                <input type="submit" />
            </form>

        { imgUrls.map((item, index) => {
            return <img src={item} alt="sdgdsh" key={index} />
        })}
        </div>
    )
}