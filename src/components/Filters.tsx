import React, { FC, useState } from 'react'
import { Link } from 'react-router-dom'
import { NavLinksTypes } from '../types/ItemPageTypes'
import "../styles/components/Filters.css"

import { MdOutlineExpandMore } from 'react-icons/md'

export const Filters: FC = () => {
    const [ firstElemHover, setFirstElemHover ] = useState<boolean>(false)
    const [ secondElemHover, setSecondElemHover ] = useState<boolean>(false)
    // const firstElemHoverHandler: () => void = () => {
    //     if( firstElemHover ) setFirstElemHover(!firstElemHover)
    //     if( firstElemMenuHover) setFirstElemMenuHover(!firstElemMenuHover)
    //     if ()
    // }
    return (
        <div className="filter-container">
            <div 
                className="filter-title-airsoft-gun" 
                onMouseEnter={() => setFirstElemHover(!firstElemHover)}>
                Страйкбольное оружие
                <MdOutlineExpandMore fill={"orange"} size={24}/>
            </div>
            {firstElemHover && (
                <div 
                    className="filter-airsoft-gun" 
                    onMouseLeave={() => setFirstElemHover(!firstElemHover)}
                >
                    <Link to={`/marketplace/${'Штурмовое оружие'}`}><h3>Штурмовое оружие</h3></Link>
                    <Link to={`/marketplace/${'Пистолеты'}`}><h3>Пистолеты</h3></Link>
                </div>
            )}
            
            <div className="filter-title-equipment" onMouseEnter={() => setSecondElemHover(!secondElemHover)}>
                Снаряжение
                <MdOutlineExpandMore fill={"orange"} size={24}/>
            </div>
            {
                secondElemHover && (
                     <div className="filter-equipment" onMouseLeave={() => setSecondElemHover(!secondElemHover)}>
                        <Link to={`/marketplace/${'Форма'}`}><h3>Форма</h3></Link>
                        <Link to={`/marketplace/${'Разгрузочные системы, бронежилеты'}`}><h3>Разгрузочные системы, бронежилеты</h3></Link>
                    </div>
                )
            }
           
        </div>
    )
}