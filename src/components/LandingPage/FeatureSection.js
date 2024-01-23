import React from 'react';
import styled from 'styled-components/macro';
import { StyledH3, StyledH5, StyledP } from '../../theme/globalStyle';
import { device } from '../../device';
import Container from '../Container';
import iconBehaviors from '../../images/icons-behaviors.svg';
import iconSkills from '../../images/icon-skills.svg';
import iconKnowledge from '../../images/icon-knowledge.svg';

const StyledContainer = styled.div`
  padding: 50px 0;
  width: 100%;
  background-color: #f5f6f7;
  @media ${device.breakUp768} {
    padding: 70px 0;
  }
  @media ${device.breakUp1024} {
    padding: 80px 0;
  }
`;

const ReStyledH3 = styled(StyledH3)`
  text-align: center;
  margin-bottom: 50px;
  @media ${device.breakUp1024} {
    margin-bottom: 60px;
  }
`;

const StyledRow = styled.div`
  display: flex;
  margin-left: -20px;
  margin-right: -20px;
  flex-direction: column;
  @media ${device.breakUp768} {
    margin-left: -30px;
    margin-right: -30px;
    flex-direction: row;
    flex-wrap: nowrap;
  }
  @media ${device.breakUp1024} {
    margin-left: 70px;
    margin-right: 70px;
  }
`;

const StyledCol = styled.div`
  padding: 0 45px 40px;
  flex: 1 0 0%;
  width: 100%;
  max-width: 100%;
  text-align: center;

  @media ${device.breakUp768} {
    padding-left: 30px;
    padding-right: 30px;
    padding-bottom: 0;
  }
`;

const StyledImage = styled.img`
  display: block;
  width: 65px;
  margin: 0 auto 25px;
`;

function InfoSection() {
  return (
    <StyledContainer>
      <Container>
        <ReStyledH3>The three components&nbsp;of&nbsp;an&nbsp;IRP</ReStyledH3>
        <StyledRow>
          <StyledCol>
            <div>
              <StyledImage src={iconKnowledge} alt="" />
              <StyledH5 style={{ marginBottom: '10px' }}>Knowledge</StyledH5>
              <StyledP style={{ margin: 0 }}>
                Knowledge is the information and data a rep must possess.
              </StyledP>
            </div>
          </StyledCol>
          <StyledCol>
            <div>
              <StyledImage src={iconSkills} alt="" />
              <StyledH5 style={{ marginBottom: '10px' }}>Skills</StyledH5>
              <StyledP style={{ margin: 0 }}>
                Skills help you evaluate how your rep should behave on the
                field.
              </StyledP>
            </div>
          </StyledCol>
          <StyledCol style={{ paddingBottom: 0 }}>
            <div>
              <StyledImage src={iconBehaviors} alt="" />
              <StyledH5 style={{ marginBottom: '10px' }}>Behaviors</StyledH5>
              <StyledP style={{ margin: 0 }}>
                Behaviors help you track how a rep is actually performing on the
                ground.
              </StyledP>
            </div>
          </StyledCol>
        </StyledRow>
      </Container>
    </StyledContainer>
  );
}

export default InfoSection;
