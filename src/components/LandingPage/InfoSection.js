import React from 'react';
import styled from 'styled-components/macro';
import { StyledP, StyledFluidImage } from '../../theme/globalStyle';
import { device } from '../../device';
import Container from '../Container';
import scoreCard from '../../images/score-card-thumbnail-001@2x.png';

const StyledContainer = styled(Container)`
  padding-top: 50px;
  padding-bottom: 50px;
  background-color: #fff;
  @media ${device.breakUp768} {
    padding-top: 70px;
    padding-bottom: 70px;
  }
`;

const StyledRow = styled.div`
  display: flex;
  margin-left: -20px;
  margin-right: -20px;
  flex-direction: column;
  @media ${device.breakUp768} {
    flex-direction: row;
    flex-wrap: nowrap;
  }
`;

const StyledCol = styled.div`
  padding: 0 20px 40px;
  flex: 1 0 0%;
  width: 100%;
  max-width: 100%;

  @media ${device.breakUp768} {
    padding-left: 15px;
    padding-right: 15px;
  }
  &.order-smUp-1 {
    @media ${device.breakUp768} {
      order: 1;
    }
    @media ${device.breakUp1024} {
      padding-left: 90px;
      padding-right: 35px;
    }
    @media ${device.breakUp1440} {
      padding-left: 120px;
      padding-right: 45px;
    }
  }
  &.order-smUp-2 {
    padding: 0 40px 40px;
    @media ${device.breakUp768} {
      flex: 0 0 auto;
      width: 40%;
      padding-left: 15px;
      padding-right: 15px;
      order: 2;
    }
    @media ${device.breakUp1024} {
      width: 44%;
    }
    @media ${device.breakUp1440} {
      width: 39%;
    }
    img {
      width: 240px;
      margin: auto;
      @media ${device.breakUp768} {
        width: 100%;
      }
    }
  }
`;

export const StyledH3 = styled.h3`
  text-align: left;
  font-family: ${(props) => props.theme.sansSerif};
  font-size: 24px;
  line-height: 29px;
  font-weight: bold;
  color: ${(props) => props.theme.darkBlue};
  margin: 0;
  margin-bottom: 20px;
  @media ${device.breakUp1024} {
    font-size: 22px;
    line-height: 27px;
  }
  @media ${device.breakUp1440} {
    font-size: 24px;
    line-height: 29px;
  }
`;

function InfoSection() {
  return (
    <StyledContainer>
      <StyledRow>
        <StyledCol className="order-smUp-2">
          <StyledFluidImage src={scoreCard} alt="" />
        </StyledCol>
        <StyledCol className="order-smUp-1">
          <StyledH3>What is an ideal rep profile?</StyledH3>
          <StyledP>
            Building an ideal rep profile (IRP) helps you define and benchmark
            the top skills, competencies, and behaviors reps need to be
            successful in the field.
          </StyledP>
          <StyledP style={{ marginBottom: '40px' }}>
            With Mindtickle's IRP Generator, you can quickly determine
            and weigh the importance of the necessary skills and
            behaviors required of your sales reps. This generator helps you
            figure out how your reps stack up.
          </StyledP>
          <StyledH3>Why do I need an IRP and what does it include?</StyledH3>
          <StyledP>
            An IRP defines and benchmarks top competencies – a combination of
            knowledge, skills, and behaviors – that reps must possess to be
            successful in the field. It is important to document and encode
            your IRP where you can measure skill development and its impact
            on business outcomes.
          </StyledP>
        </StyledCol>
      </StyledRow>
    </StyledContainer>
  );
}

export default InfoSection;
