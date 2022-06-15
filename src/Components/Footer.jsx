import React from 'react'
import { Link } from 'react-scroll'
import styled from 'styled-components'
import Logo from './Logo'
import ParagraphText from './paragraphText/ParagraphText'

const FooterStyles = styled.div`
    background-color: var(--darkBlue_4);
    padding: 10rem 0;
    .footer__wrapper{
        text-align: center;
    }
    .footer__logo{
        max-width: 120px;
        margin: 0 auto;
        margin-bottom: 1rem;
    }
    .footer__desc{
        color: white;
        max-width: 350px;
        margin: 0 auto;
        margin-bottom: 2rem;
    }
    .footer__links{
        margin-bottom: 2rem;
        li{
            display: inline-block;
            margin: 0 1rem;
        }
        a{
            font-size: 1.6rem;
            color: var(--lightBlue_1);
            line-height: 1.5em;
        }
        li:hover{
            a{
                text-decoration : underline;
                color: var(--mediumSlateBlue);
            }
        }
    }
    .footer__copyright{
        font-size: 1.2rem;
        color: var(--lightBlue_1);
    }
    @media screen and (max-width:768px) {
        .footer__links{
            a{
                font-size: 1.4rem;
            }
        }
    }
`

function Footer() {
  return (
    <FooterStyles>
        <div className="container">
            <div className="footer__wrapper">
                <Link to='hero' smooth>
                    <Logo className='footer__logo' />
                </Link>
                <ParagraphText className='footer__desc'>
                    Artistic is a studio of some passionate photographer.
                    Our goal is to capture your experience.
                </ParagraphText>
            <div className="footer__links">
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
            </div>
            <ParagraphText className=
            'footer__copyright'>
                Artistic Creative 2021. All rights reserved
            </ParagraphText>
            </div>
        </div>
    </FooterStyles>
  )
}

export default Footer