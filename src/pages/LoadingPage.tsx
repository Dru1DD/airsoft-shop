import React, { FC, useState, useEffect } from 'react'
import { HomePage } from '../pages/HomePage'
import { Loading } from '../components/Loading'

export const LoadingPage: FC = () => {
    const [ showPage, setShowPage ] = useState<boolean>(false)

    useEffect(() => {
        setInterval(() => setShowPage(!showPage), 5000)
    }, [])

    if(!showPage) {
        return <Loading />
    }

    return <HomePage />
}