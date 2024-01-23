import * as React from 'react';
import { ThemeProvider } from 'styled-components';
import styled from 'styled-components/macro';
import clsx from 'clsx';
import { StepperContext } from '../../contexts/stepperContext';
import { device } from '../../device';
import { useFormState } from '../../services/hooks/useFormState';
import Container from '../Container';
import Header from '../Header';
import PageControls from '../PageControls';
import ProfileAvatar from '../ProfileAvatar';
import SelectProfileAvatar from '../SelectProfileAvatar';
import LottieBg from '../LottieBg';
import bgLottieDots from '../../data/bg-cylinders.json';
import bgBlueCylinderPattern from '../../images/bg-blue-cylinder-pattern.jpg';
import {
  theme1,
  StyledFieldSet,
  StyledLabel,
  StyledInput,
  StyledP,
} from '../../theme/globalStyle';
import {
  StyledInvisButton,
  StyledWrapper,
  ReStyledRow,
  ReStyledColOneThirdsMdUp,
  ReStyledColThreeThirdsMdUp,
  StyledAvatars,
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

function Page1() {
  const {
    state: { currentPage, profile, avatars },
    dispatch,
  } = React.useContext(StepperContext);
  const [validForm, setForm] = useFormState({
    name: { value: '', hasError: '' },
    avatar_id: { value: '', hasError: '' },
  });
  const isValid = profile.name !== '' && !!profile.avatar_id.id;
  const validate = () => {
    setForm('name', validForm.name.value);
  };
  return (
    <>
      <LottieBg lottieData={bgLottieDots} fallback={bgBlueCylinderPattern} />
      <ThemeProvider theme={theme1}>
        <Container>
          <Header />
          <StyledWrapper>
            <ReStyledRow>
              <ReStyledColThreeThirdsMdUp className="order-lgUp-2">
                <StyledH2>
                  Step 1:
                  {' '}
                  <span>Select your IRP avatar.</span>
                </StyledH2>
                <StyledFieldSet>
                  <StyledLabel
                    className={clsx(validForm.name.hasError && 'hasError')}
                    htmlFor="repName"
                  >
                    Let’s give them a name
                    <StyledInput
                      type="text"
                      className={clsx(validForm.name.hasError && 'hasError')}
                      placeholder="Name Your Rep"
                      id="repName"
                      name="repName"
                      value={profile.name || ''}
                      onChange={(e) => {
                        setForm('name', e.target.value);
                        dispatch({
                          type: 'setUserProfile',
                          profile: { name: e.target.value },
                        });
                      }}
                    />
                    {validForm.name.hasError && (
                      <small>Oops, you forgot to give yourself a name!</small>
                    )}
                  </StyledLabel>
                </StyledFieldSet>
                <StyledFieldSet style={{ marginBottom: 0 }}>
                  <StyledLabel style={{ marginBottom: '15px' }}>
                    Select an Avatar
                  </StyledLabel>
                  <StyledAvatars>
                    {avatars.map((avatar) => (
                      <StyledInvisButton
                        type="button"
                        key={avatar.id}
                        onClick={() => {
                          dispatch({
                            type: 'setUserProfile',
                            profile: { avatar_id: { id: avatar.id } },
                          });
                        }}
                      >
                        <SelectProfileAvatar
                          id={`avatar${avatar.id}`}
                          selected={avatar.id === profile.avatar_id.id}
                          size="x120x115x135x70"
                        >
                          {avatar.id}
                        </SelectProfileAvatar>
                      </StyledInvisButton>
                    ))}
                  </StyledAvatars>
                </StyledFieldSet>
              </ReStyledColThreeThirdsMdUp>
              <ReStyledColOneThirdsMdUp className="order-lgUp-1">
                <StyledHr />
                <div className="row">
                  <div className="col">
                    <ProfileAvatar
                      id={`avatar${profile.avatar_id.id}`}
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
                      Choosing a rep name helps you visualize your ideal rep
                      profile. Consider giving your rep profile a fun name like
                      Rockstar Rachel or Moneyball Mike!
                    </StyledP>
                  </div>
                </div>
              </ReStyledColOneThirdsMdUp>
            </ReStyledRow>
          </StyledWrapper>
          <PageControls
            currentPage={currentPage}
            isValid={isValid}
            validate={validate}
          />
        </Container>
      </ThemeProvider>
    </>
  );
}

export default Page1;
