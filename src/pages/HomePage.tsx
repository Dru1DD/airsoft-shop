import React, { FC, useState, useEffect } from 'react'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'

export const HomePage: FC = () => {


    return (
        <div>
            <Header />
            <h1>HomePage</h1>
            <Footer />
        </div>
    )
}