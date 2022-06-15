import React from 'react'
import styled from 'styled-components'
import ParagraphText from './paragraphText/ParagraphText'
import SectionTitle from './titles/SectionTitle'

const NewsletterStyles = styled.div`
    padding: 10rem 0;
    .newsletter__wrapper{
        padding: 5rem 3rem;
        background-color: var(--mediumSlateBlue);
        max-width: 500px;
        margin: 0 auto;
        border-radius: 12px;
        text-align: center;
    }
    .newsletter__title{
        margin-bottom: 0.2rem;
        color: var(--lightBlue_1);
    }
    .newsletter__subtitle{
        color: var(--lightBlue_1);
        margin-bottom: 2rem;
    }
    .newsletter__form{
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 1rem;
        input{
            width: 100%;
            max-width: 300px;
            height: 40px;
            background-color: var(--lightBlue_1);
            border: none;
            border-radius: 4px;
            font-size: 1.6rem;
            padding-left: 1rem;
        }
        button{
            height: 40px;
            font-size: 1.6rem;
            cursor: pointer;
            padding: 0 1.5rem;
            text-transform: capitalize;
            background-color: var(--lightBlue_1);
            color: var(--darkBlue_1);
            border: none;
            border-radius: 4px;
        }
    }
    @media screen and (max-width: 768px){
        .newsletter__wrapper{
            padding: 3rem 2rem;
        }
        .newsletter__form{
            flex-direction: column;
         input{
            font-size: 1.4rem;
         }
         button{
            font-size: 1.4rem;
         }
        }
    }
`

function NewsletterSection() {
  return (
    <NewsletterStyles>
        <div className="container">
            <div className="newsletter__wrapper">
                <SectionTitle className='newsletter__title'>
                    Join Newsletter
                </SectionTitle>
                <ParagraphText className='newsletter__subtitle'>
                    Get Regular updates every week
                </ParagraphText>
                <form className='newsletter__form'>
                    <input type="email"  placeholder='Enter your email' />
                    <button type='submit'>Join</button>
                </form>
            </div>
        </div>
    </NewsletterStyles>
  )
}

export default NewsletterSection