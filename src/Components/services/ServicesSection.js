import React from 'react'
import SectionTitle from '../titles/SectionTitle'
import ServiceItem from './ServiceItem'
import {RiImageEditLine} from 'react-icons/ri'
import styled from 'styled-components'

const ServicesSectionStyles = styled.div`
    padding: 10rem 0;
    text-align: center;
    .services__title{
        margin-bottom: 3rem;
    }
    .services__items{
        display: flex;
        gap: 2rem;
    }
    @media screen and (max-width:768px ) {
        .services__items{
            flex-direction: column;
            max-width: 300px;
            margin: 0 auto;
        }
        
    }
`
 
function ServicesSection() {
  return (
        <ServicesSectionStyles id='services' className="container">
            <SectionTitle className='services__title'>Our Service</SectionTitle>
            <div className="services__items">
                <ServiceItem icon={<RiImageEditLine/>} title='Professional Editing'
                desc='We do professional photo editing. let us help you to take your photo next level'/>
            
                <ServiceItem icon={<RiImageEditLine/>} title='Professional Editing'
                desc='We do professional photo editing. let us help you to take your photo next level'/>
            
                <ServiceItem icon={<RiImageEditLine/>} title='Professional Editing'
                desc='We do professional photo editing. let us help you to take your photo next level'/>
            </div>
        </ServicesSectionStyles>
  )
}

export default ServicesSection