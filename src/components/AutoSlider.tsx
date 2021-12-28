import React, { FC, useState, useEffect } from 'react'
import "../styles/components/AutoSlider.css"

const images = [
    'https://images.unsplash.com/photo-1566566713478-131a85da90b2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80',
    'https://images.unsplash.com/photo-1615133878310-b053dda98b04?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1700&q=80',
    'https://images.unsplash.com/photo-1598744591141-0370fe5aec26?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80',
]
export const AutoSlider: FC = () => {
    const [ activeImage, setActiveImg ] = useState<number>(0)
    const [ imgUrl, setImgUrl ] = useState<string>(images[activeImage])

    useEffect(() => {
        let interval = setInterval(() => {
            if(activeImage === images.length) {
                setActiveImg(0)
                setImgUrl(images[0])
            } else {
                setActiveImg(activeImage + 1)
                setImgUrl(images[activeImage])
            }
            
        }, 2000)

        return () => {
            clearInterval(interval)
        }
    }, [activeImage])

    return (
        <div className="auto-slider-container">
            <img src={imgUrl} alt="airsoft-back" />
        </div>
    )
}