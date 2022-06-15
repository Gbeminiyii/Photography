import React from 'react'
import styled from 'styled-components'
import themeList from '../../data/themeList'

const SectionTitleStyles = styled.div`
    font-size: 4rem;
    font-weight: 800;
    color: ${({theme: {theme}})=> theme===themeList.light ? 'var(--darkBlue_2)' : 'var(--lightBlue_1)'};
    text-transform: capitalize;
    @media screen and (max-width: 768px) {
      font-size: 3rem;
    }
`

function SectionTitle({children, ...rest}) {
  return (
    <SectionTitleStyles {...rest}>
        {children}
    </SectionTitleStyles>
  )
}

export default SectionTitle