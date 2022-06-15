import React from 'react'
import styled from 'styled-components'
import PrimaryButton from './buttons/PrimaryButton';
import ParagraphText from './paragraphText/ParagraphText';
import HeroTitle from './titles/HeroTitle'
import HeroImg from '../assets/images/hero.png'
import { Link } from 'react-scroll';



const HeroSectionStyles = styled.div`
    padding-top: calc(var(--header-height) + 10px);
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    .hero__wrapper{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        gap: 1rem;
    }
    .hero__info{
        flex: 3;
    }
    .hero__img{
        flex: 4;
        img{
            object-fit: contain;
        }
    }
    .hero__title{
        margin-bottom: 1.5rem;
        max-width: 400px;
    }
    .hero__desc{
        margin-bottom: 1.5rem;
        max-width: 300px;
    }
    @media screen and (max-width:768px){
        .hero__wrapper{
            flex-direction: column-reverse;
            gap: 0.5rem;
        }
        .hero__img{
            display: flex;
            justify-content: flex-end;
            img{
                max-width: 400px;
                margin-top: auto;
            }
        }
    }
`

function HeroSection() {
  return (
    <HeroSectionStyles id='hero'>
       <div className="container">
        <div className="hero__wrapper">
            <div className="hero__info">
                <HeroTitle className='hero__title'>A click of artistic joy</HeroTitle>
                <ParagraphText className='hero__desc'>
                    Because every picture tells a story, let us help you tell yours.
                </ParagraphText>
                <PrimaryButton to='contact' smooth buttonType={Link}>
                    Get In Touch
                </PrimaryButton>
            </div>
            <div className="hero__img">
                <img src={HeroImg} alt="Artistic" />
            </div>
        </div>
       </div>
    </HeroSectionStyles>
  );
}

export default HeroSection