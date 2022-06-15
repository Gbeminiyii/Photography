import React from 'react'
import ParagraphText from '../paragraphText/ParagraphText'
import SectionTitle from '../titles/SectionTitle'
import TeamMemberItem from './TeamMemberItem'
import teamMember1 from '../../assets/images/team1.png'
import teamMember2 from '../../assets/images/team2.png'
import teamMember3 from '../../assets/images/team3.png'
import styled from 'styled-components'


const TeamSectionStyle = styled.div`
    padding: 10rem 0;
    .team__wrapper{
        display: flex;
        gap: 1rem; 
    }
    .team__info{
    max-width: 250px;


    }
    .team__subtitle{
        margin-bottom: 1rem;
        font-weight: 600;
        color: var(--mediumSlateBlue);
        text-transform: capitalize;
    }
    .team__members{
        width: 100%;
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
        gap: 5rem;
    }
    @media screen and (max-width:768px) {
        .team__wrapper{
            flex-direction: column;
            text-align: center;
            gap: 3rem;
        }
        .team__info{
            margin: 0 auto;

        }
        .team__members{
            gap: 2rem;
        }
    }
`

function TeamSection() {
  return (
    <TeamSectionStyle>
        <div className="container">
            <div className="team__wrapper">
                <div className="team__info">
                    <ParagraphText className='team__subtitle'>
                        Team Members
                    </ParagraphText>
                    <SectionTitle className='about_title'>
                        The Best Team Available
                    </SectionTitle>
                   
                </div>
                <div className="team__members">
                        <TeamMemberItem img={teamMember1} name='Olawuyi Oreoluwa' title='Podcaster' />
                        <TeamMemberItem img={teamMember2} name='Gbeminiyi Okunowo' title='Web developer' />
                        <TeamMemberItem img={teamMember3} name='Adeleke Dolapo' title='Photographer' />
                    </div>
            </div>
        </div>
    </TeamSectionStyle>
  )
}

export default TeamSection