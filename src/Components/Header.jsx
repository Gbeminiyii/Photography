import React, { useEffect } from 'react'
import { Link } from 'react-scroll'
import styled from 'styled-components'
import Logo from './Logo'
import ThemeSwitcher from './ThemeSwitcher'
import { FiMenu, FiX } from 'react-icons/fi'
import { useState } from 'react'
import themeList from '../data/themeList'


const HeaderStyles = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: var(--header-height);
    background-color: ${({theme: {theme}}) => theme === themeList.light ? 'var(--lightBlue_1)' : 'var(--darkBlue_3)'};;
    border-bottom: 1px solid var(--mediumSlateBlue); 
    .navigation{
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 1rem 0;
    }
    nav ul li{
        display: inline-block;
        margin: 0 0.5rem;
        a{
            font-size: 1.6rem;
            font-weight: 500;
            display: inline-block;
            padding: 0.5rem 1rem;
            color: ${({theme: {theme}}) => theme === themeList.light ? 'var(--darkBlue_2)' : 'var(--lightBlue_1)'};;
        } 
        &:hover{
            a{
                text-decoration: underline;
            }
        }  
    }
        .navMenu{
             display: flex;
             align-items: center;
             justify-content: flex-end;
        }
        .menuIcon,
        .closeIcon{
            width: 30px;
            height: 30px;
            margin-left: 10px;
            cursor: pointer;
            padding: 3px;
            border-radius: 4px;
            svg{
               color: ${({theme: {theme}}) => theme === themeList.light ? 'var(--darkBlue_2)' : 'var(--lightBlue_1)'};
            }
            &:hover{
              background-color: #8080803b;
            }
        }
        .closeIcon{
            position: absolute;
            top: 10px;
            right: 10px;
            &:hover{
                background-color: #fff;
            } 
        }
    @media only screen and (max-width: 768px) {
        nav {
            display: flex;
            flex-direction: column;
            justify-content: center;
            position: fixed;
            width: 90%;
            max-width: 250px;
            top: 0;
            right: 0;
            background-color: ${({theme: {theme}}) => theme === themeList.light ? 'var(--lightBlue_2)' : 'var(--darkBlue_4)'};
            height: 100vh;
            z-index: 100;
            transform: translateX(100%);
            transition: 0.3s ease transform;
            overflow: hidden;
        }
        nav.open{
            transform: translateX(0);
        }
        nav ul li{
            display: block;
            text-align: right;
            width: 100%;
            margin: 0.5rem 0;
            a{
                display: block;
                width: 100%;
            }

        }
    }

`
function Header() {
    const [isNavOpen, setIsNavOpen] = useState(false)
    const [isMobile, setIsMobile] = useState(
        window.matchMedia('(max-width:768px)').matches
    );

    useEffect(()=>{
        window.addEventListener('resize', () => {
            setIsMobile(window.matchMedia('(max-width: 768px)').matches)
        });
    }, []);

    const openNav = () => {
        setIsNavOpen(true)
    }
    const closeNav = () => {
        setIsNavOpen(false)
    }
  return (
    <HeaderStyles>
        <div className="container">
            <div className="navigation">
                <Link to='hero' smooth>
                    <Logo />
                </Link>
                <div className="navMenu">
                    <nav className={isNavOpen && isMobile ? 'open': null}>
                        {isMobile && <div className = "closeIcon" tabIndex='0' role='button' onClick={closeNav} onKeyDown={closeNav}>
                            <FiX />
                        </div>}
                        <ul>
                            <li>
                                <Link to='hero' smooth>
                                Home
                                </Link>
                            </li>
                            <li>
                                <Link to='services' smooth>
                                Services
                                </Link>
                            </li>
                            <li>
                                <Link to='about' smooth>
                                About
                                </Link>
                            </li>
                            <li>
                                <Link to='contact' smooth>
                                Contact
                                </Link>
                            </li>
                        </ul>
                    </nav>
                    <ThemeSwitcher />
                    {isMobile && 
                     (<div className="menuIcon" tabIndex='0' role='button' onClick={openNav} onKeyDown={openNav}>
                     <FiMenu />
                  </div>)}
                </div>
            </div>
        </div>
    </HeaderStyles>
  )
}

export default Header