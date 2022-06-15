import React, { useContext }  from 'react'
import { FiSun, FiMoon } from 'react-icons/fi'
import styled from 'styled-components'
import ThemeContext from '../Context/ThemeContext';
import themeList from '../data/themeList';

const ThemeSwitcherStyles = styled.div`
    label{
        --gap: 5px;
        --size: 20px;
        height: 30px;
        width: 55px;
        padding: 0px 5px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        position: relative;
        cursor: pointer;
        background-color: #cfc8f4;
        border-radius: 58px;
        z-index: 1;
        .icon{
        height: var(--size);
        width: var(--size);
        display: flex;
        align-items: center;
        justify-content: center;
        }
        svg{
        width: 75%;
        color: var(--white);
        }
    }
    input{
        width: 0;
        height: 0;
        display: none;
        visibility: hidden;
    }
    label::after{
        position: absolute;
        content: '';
        border-radius: 50%;
        transform: translateY(-50%);
        top: 50%;
        background: var(--mediumSlateBlue);
        height: var(--size);
        width: var(--size);
        left: var(--gap);
        z-index: -1;
        transition: 0.5s ease left;
    }
    input:checked + label::after {
        left: calc(100% - var(--size) - var(--gap))
    }

`;

function ThemeSwitcher() {

    const {theme, toggleTheme} = useContext(ThemeContext)
  return (
    <ThemeSwitcherStyles>
        <input type='checkbox' 
        onChange={toggleTheme}
        checked={theme === themeList.dark}
        id='switcher' />
        <label htmlFor="switcher">
            <div className='icon'>
                <FiSun />
            </div>
            <div className='icon'>
                <FiMoon />
            </div>
        </label>
    </ThemeSwitcherStyles>
  )
}
 
export default ThemeSwitcher