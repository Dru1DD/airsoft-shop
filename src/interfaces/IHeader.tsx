import React from 'react'

export interface IBurger {
    isMenuOpen: boolean
    setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export interface IMenu {
    isMenuOpen: boolean
    screenWidth: number
}

export interface IStyledBurger {
    open: boolean
}

export interface IStyledMenu {
    isMenuOpen: boolean
    screenWidth: number
}