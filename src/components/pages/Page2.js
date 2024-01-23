import * as React from 'react';
import { ThemeProvider } from 'styled-components';
import styled from 'styled-components/macro';
import { StepperContext } from '../../contexts/stepperContext';
import { device } from '../../device';
import Container from '../Container';
import Header from '../Header';
import PageControls from '../PageControls';
import ProfileAvatar from '../ProfileAvatar';
import DropdownSelect from '../DropDownSelect';
import LottieBg from '../LottieBg';
import bgLottieDots from '../../data/bg-sphere.json';
import bgBlueShperesPattern from '../../images/bg-blue-spheres-pattern.jpg';
import {
  theme1,
  StyledFieldSet,
  StyledLabel,
  StyledP,
} from '../../theme/globalStyle';
import {
  StyledWrapper,
  ReStyledRow,
  ReStyledColOneThirdsMdUp,
  ReStyledColThreeThirdsMdUp,
} from './Page.styles';

const StyledH2 = styled.h2`
  margin-top: 0;
  margin-bottom: 35px;
  font-family: ${(props) => props.theme.sansSerif};
  font-weight: bold;
  font-style: normal;
  font-size: 20px;
  line-height: 24px;
  color: ${(props) => props.theme.darkBlue};
  @media ${device.breakUp768} {
    font-size: 24px;
    line-height: 28px;
  }
  span {
    font-weight: normal;
  }
`;

const StyledH5 = styled.h5`
  margin-top: 0;
  margin-bottom: 35px;
  font-family: ${(props) => props.theme.sansSerif};
  font-weight: bold;
  font-style: normal;
  font-size: 20px;
  line-height: 24px;
  color: ${(props) => props.theme.darkBlue};
`;

const StyledHr = styled.hr`
  border-top: 1px solid #ebeaed;
  margin: 30px auto;
  @media ${device.breakUp768} {
    margin: 50px auto;
  }
  @media ${device.breakUp1024} {
    display: none;
  }
`;

function Page2() {
  const { state, dispatch } = React.useContext(StepperContext);
  const {
    currentPage,
    roles,
    profile: { role_id: selectedRole },
  } = state;
  const handleSelected = (value) => {
    dispatch({ type: 'setUserProfile', profile: { role_id: value } });
  };

  React.useEffect(() => {
    if (!selectedRole) {
      dispatch({ type: 'setUserProfile', profile: { role_id: roles[0] } });
    }
  }, [selectedRole, dispatch, roles]);
  return (
    <>
      <LottieBg lottieData={bgLottieDots} fallback={bgBlueShperesPattern} />
      <ThemeProvider theme={theme1}>
        <Container>
          <Header />
          <StyledWrapper>
            <ReStyledRow>
              <ReStyledColThreeThirdsMdUp className="order-lgUp-2">
                <StyledH2>
                  Step 2:
                  {' '}
                  <span>Which position is the IRP for?</span>
                </StyledH2>
                <StyledFieldSet style={{ marginBottom: 0 }}>
                  <StyledLabel htmlFor="repRole">
                    Let’s pick a role
                    <DropdownSelect
                      labeledby="repRole"
                      options={roles}
                      selectedRole={selectedRole}
                      handleSelected={handleSelected}
                    />
                  </StyledLabel>
                </StyledFieldSet>
              </ReStyledColThreeThirdsMdUp>
              <ReStyledColOneThirdsMdUp className="order-lgUp-1">
                <StyledHr />
                <div className="row">
                  <div className="col">
                    <ProfileAvatar
                      id={`avatar${state.profile.avatar_id.id}`}
                      size="x150"
                    >
                      Select an avatar
                    </ProfileAvatar>
                  </div>
                  <div className="col">
                    <StyledH5 style={{ marginBottom: '20px' }}>
                      Why is this step important?
                    </StyledH5>
                    <StyledP>
                      Each role does not place the same weight on skills and
                      strengths. Depending on the role, reps have different
                      characteristics and benchmarks that are vital for success
                      in their particular field.
                    </StyledP>
                  </div>
                </div>
              </ReStyledColOneThirdsMdUp>
            </ReStyledRow>
          </StyledWrapper>
          <PageControls currentPage={currentPage} isValid />
        </Container>
      </ThemeProvider>
    </>
  );
}

export default Page2;
