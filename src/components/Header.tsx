import React, { FC, useState } from 'react'
import { useWindowSize } from '../hooks/useWindowSize'
import { useHistory } from 'react-router'
import { IBurger, IMenu, IStyledBurger, IStyledMenu} from '../interfaces/IHeader'
import { BiHeadphone } from 'react-icons/bi'
import styled from 'styled-components'
import "../styles/Header.css"

export const Header: FC = () => {
    const [ screenWidth ] = useWindowSize() 
    const [ isMenuOpen, setIsMenuOpen ] = useState<boolean>(false)
    const history = useHistory()

    if(screenWidth <= 500 ) {
        return (
            <div>
                <Burger 
                    isMenuOpen={isMenuOpen}
                    setIsMenuOpen={setIsMenuOpen}
                />
                <Menu 
                    isMenuOpen={isMenuOpen}
                    screenWidth={screenWidth}
                />
            </div>
        )
    } 

    return (
        <div className="navbar">
            <div className="navbar_links">
              <span onClick={() => history.push('/')}>Магазин</span>
              <span onClick={() => history.push('/guarantee')}>Гарантия</span>
              <span onClick={() => history.push('/payment-and-delivery')}>Оплата и доставка</span>
              <span onClick={() => history.push('/help')}>Помощь</span>

            </div>
            <div className="navbar_contact">
              <BiHeadphone fill='orange' size={24}/>
              <span>{`+38 (XXX) XXX XX XX`}</span>
            </div>
        </div>
    )
}

const Burger: FC<IBurger> = ({ isMenuOpen, setIsMenuOpen }) => {
    return (
        <StyledBurger open={isMenuOpen} onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <div />
            <div />
            <div />
        </StyledBurger>
    )
}

const Menu: FC<IMenu> = ({ isMenuOpen, screenWidth}) => {
  const history = useHistory()
    return (
        <StyledMenu isMenuOpen={isMenuOpen} screenWidth={screenWidth}>
            <a href="/" onClick={() => history.push('/')}>Магазин</a>
            <a href="/guarantee" onClick={() => history.push('/guarantee')}>Гарантия</a>
            <a href="/payment-and-delivery" onClick={() => history.push('/payment-and-delivery')}>Оплата и доставка</a>
            <a href="/help" onClick={() => history.push('/help')}>Помощь</a>
        </StyledMenu>
    )
}

const StyledBurger = styled.button<IStyledBurger>`
position: ${({ open }) => open ? 'sticky' : 'absolute'};
  top: 5%;
  margin-bottom: ${({ open }) => open ? '-11%': "0px"};
  left: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 100;
  &:focus {
    outline: none;
  }
  div {
    width: 2rem;
    height: 0.25rem;
    background: ${({ open }) => open ? '#FFFFFF' : '#363636'};
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;
    :first-child {
      transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
    }
    :nth-child(2) {
      opacity: ${({ open }) => open ? '0' : '1'};
      transform: ${({ open }) => open ? 'translateX(20px)' : 'translateX(0)'};
    }
    :nth-child(3) {
      transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }
`

const StyledMenu = styled.nav<IStyledMenu>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background:  #363636;
  transform: ${({ isMenuOpen }) => isMenuOpen ? 'translateX(0)' : 'translateX(-100%)'};
  height: 100vh;
  width: ${({screenWidth}) => screenWidth <= 547 ? "100%": "50%"};
  text-align: left;
  overflow-x: hidden;
  margin-bottom: -100vh;
  padding: 2rem;
  z-index: 10;
  position: ${({ isMenuOpen }) => isMenuOpen ? 'sticky' : 'absolute'};
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;
  a {
    font-size: 1.5rem;
    text-align: center;
    text-transform: uppercase;
    padding: 2rem 0;
    font-weight: bold;
    letter-spacing: 0.5rem;
    color: #FFF;
    text-decoration: none;
    transition: color 0.3s linear;
    &:hover {
      color: #343078;
    }
  }
`