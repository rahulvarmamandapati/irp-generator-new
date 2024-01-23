import * as React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import clsx from 'clsx';
import { StepperContext } from '../../contexts/stepperContext';
import { device } from '../../device';
import Container from '../Container';
import Header from '../Header';
import ProfileAvatar from '../ProfileAvatar';
import ProfileDropDownSelect from '../ProfileDropDownSelect';
import ConfirmationModal from '../ConfirmationModal';
import {
  theme1,
  StyledButton,
  StyledLabel,
} from '../../theme/globalStyle';
import { StyledForm } from '../../theme/mktoForm';
import LottieBg from '../LottieBg';
import { BtnDownloadPdf } from '../GeneratedIrp';
import bgLottieDots from '../../data/bg-sphere.json';
import bgBlueDotsPattern from '../../images/bg-blue-spheres-pattern.jpg';
import iconBtnArrow from '../../images/icon-button-arrow-right.svg';

const ReStyledContainer = styled(Container)`
  width: 100%;
  padding-bottom: 50px;
  @media ${device.breakUp768} {
    width: 655px;
  }
  @media ${device.breakUp1024} {
    width: 100%;
  }
  @media ${device.breakUp1440} {
    width: 1080px; // 990
  }
`;

export const StyledRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  margin-top: 25px;
  margin-bottom: 10px;
  margin-left: -15px;
  margin-right: -15px;
  @media ${device.breakUp768} {
    margin-top: 55px;
    margin-bottom: 30px;
  }
  @media ${device.breakUp1024} {
    margin-top: 95px;
    margin-bottom: 30px;
    justify-content: space-between;
  }
`;

StyledRow.defaultProps = {
  'data-id': 'StyledRow',
};

export const StyledCol = styled.div`
  flex-shrink: 0;
  width: 100%;
  max-width: 100%;
  padding-left: 15px;
  padding-right: 15px;
  @media ${device.breakUp1024} {
    flex: 1 0 0%;
  }
  &.first {
    margin-bottom: 60px;
    @media ${device.breakUp768} {
      margin-bottom: 70px;
    }
    @media ${device.breakUp1024} {
      flex: 0 0 auto;
      width: 50.54%;
    }
    @media ${device.breakUp1440} {
      width: 51.52%;
    }
  }
  &.second {
    @media ${device.breakUp768} {
    }
    @media ${device.breakUp1024} {
      flex: 0 0 auto;
      width: 42.299%;
    }
    @media ${device.breakUp1440} {
      width: 40.91%;
    }
  }
`;

StyledCol.defaultProps = {
  'data-id': 'StyledRow',
};

const StyledDisplayName = styled.span`
  text-align: center;
  font-size: 35px;
  line-height: 43px;
  font-weight: bold;
  color: #ffffff;
  display: block;
  padding-bottom: 25px;
  @media ${device.breakUp768} {
    font-size: 45px;
    line-height: 56px;
  }
  @media ${device.breakUp1024} {
    text-align: left;
    font-size: 50px;
    line-height: 61px;
  }
`;

const StyledName = styled.span`
  font-weight: normal;
  color: #fe5000;
  display: block;
`;

const StyledProfile = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  @media ${device.breakUp1024} {
    justify-content: flex-start;
  }

  .profile {
    padding-right: 10px;
    @media ${device.breakUp1024} {
      padding-right: 12px;
    }
  }
  .button {
    padding-left: 10px;
    @media ${device.breakUp1024} {
      padding-left: 12px;
    }
  }
`;

const StyledCopy = styled.p`
  text-align: center;
  font-size: 20px;
  line-height: 24px;
  font-weight: bold;
  color: #ffffff;
  margin-bottom: 40px;
  @media ${device.breakUp768} {
    margin-bottom: 35px;
  }
  @media ${device.breakUp1024} {
    text-align: left;
  }
`;

const StyledInput = styled.input`
  font-family: ${(props) => props.theme.sansSerif};
  display: block;
  min-height: 40px;
  border: none;
  border-bottom: 2px solid #fe5000;
  width: 100%;
  font-size: 16px;
  line-height: 19px;
  color: #fff;
  background-color: transparent;
  margin-bottom: 25px;
  &::placeholder {
    font-weight: bold;
    color: #fff;
    font-size: 16;
    line-height: 19px;
  }
  &.hasError {
    color: #d93b00;
    border-bottom-color: #d93b00;
  }
`;

// eslint-disable-next-line
const emailReg = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
function hasError(value, key) {
  switch (key) {
    case 'email':
      return !value.match(emailReg);
    case 'shareProfile':
      return !value?.length;
    default:
      return value === '';
  }
}
function isDisabled(shareData) {
  const { email, firstName, lastName, shareProfile } = shareData;
  const empty = [
    email.value,
    firstName.value,
    lastName.value,
    shareProfile.value,
  ].some((value) => {
    if (typeof value === 'object') return !shareProfile?.value.length;
    return value === '';
  });
  const error = [
    email.hasError,
    firstName.hasError,
    lastName.hasError,
    shareProfile.hasError,
  ].some((value) => value === true);
  if (empty) {
    return true;
  }
  if (error) {
    return true;
  }
  return false;
}

function Page6() {
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const marketoFormId = 2283;
  const {
    state: { persona, profile, profiles },
    dispatch,
  } = React.useContext(StepperContext);
  const initState = {
    firstName: { value: '', hasError: false },
    lastName: { value: '', hasError: false },
    email: { value: '', hasError: false },
    shareProfile: { value: [], hasError: false },
  };
  const [shareData, setShareData] = React.useState(initState);
  const handleChange = (e, key) => {
    setShareData({
      ...shareData,
      [key]: {
        ...[key],
        value: e.target.value,
        hasError: hasError(e.target.value, key),
      },
    });
    dispatch({
      type: 'setUserProfile',
      profile: { [key]: e.target.value },
    });
  };
  const handleChangeSelectProfile = (value) => {
    setShareData({
      ...shareData,
      shareProfile: {
        ...shareData.shareProfile,
        value,
        hasError: hasError(value, 'shareProfile'),
      },
    });
  };
  const handleFormSubmit = () => {
    const sharing = () => {
      const obj = {};
      shareData.shareProfile.value.forEach((p, index) => {
        obj[
          `IRP_Results_Profile_${index + 1}__c`
        ] = `${window.location.origin}?profile=${p.profile_id}`;
      });
      return obj;
    };
    window.MktoForms2.getForm(marketoFormId)
      .vals({
        ...sharing(),
        Email: shareData.email.value,
        FirstName: shareData.firstName.value,
        LastName: shareData.lastName.value,
      })
      .submit();
  };

  React.useEffect(() => {
    const script = document.createElement('script');
    script.setAttribute(
      'src',
      '//go.mindtickle.com/js/forms2/js/forms2.min.js',
    );
    script.onload = () => {
      window.MktoForms2.loadForm(
        '//go.mindtickle.com',
        '270-YTL-592',
        marketoFormId,
        (form) => {
          const formEl = form.getFormElem()[0];
          const arrayify = getSelection.call.bind([].slice);
          const styledEls = arrayify(formEl.querySelectorAll('[style]')).concat(
            formEl,
          );
          styledEls.forEach((el) => {
            el.removeAttribute('style');
          });
          const st = formEl.getElementsByTagName('style');
          // eslint-disable-next-line
          for (let i = 0; i < st.length; i++) {
            st[i].parentNode.removeChild(st[i]);
          }
          form.onSuccess(() => {
            window.location.reload();
            return false;
          });
        },
      );
      window.MktoForms2.whenRendered(() => {
        if (document.querySelector('#mktoForms2BaseStyle')) {
          document.querySelector('#mktoForms2BaseStyle').remove();
        }
        if (document.querySelector('#mktoForms2BaseStyle')) {
          document.querySelector('#mktoForms2BaseStyle').remove();
        }
      });
    };
    document.body.appendChild(script);
  }, [dispatch]);

  return (
    <>
      <LottieBg lottieData={bgLottieDots} fallback={bgBlueDotsPattern} />
      <ThemeProvider theme={theme1}>
        <Container>
          <Header />
        </Container>
        <ReStyledContainer>
          <StyledRow>
            <StyledCol className="first">
              <StyledDisplayName>
                <StyledName>
                  {persona.firstName}
                  ,
                  {' '}
                </StyledName>
                your ideal rep profile is ready!
              </StyledDisplayName>

              <StyledProfile>
                <div className="profile">
                  <ProfileAvatar
                    id={`avatar${profile.avatar_id.id}`}
                    size="x120x64"
                  >
                    {profile.name}
                  </ProfileAvatar>
                </div>
                <div className="button">
                  <BtnDownloadPdf persona={persona} profile={profile} />
                </div>
              </StyledProfile>
            </StyledCol>
            <StyledCol className="second">
              <StyledCopy>
                Share your IRP results with your sales and enablement teams!
              </StyledCopy>
              <StyledForm id={`mktoForm_${marketoFormId}`} />
              <StyledLabel
                htmlFor="firstName"
                className={clsx(shareData.firstName.hasError && 'hasError')}
              >
                <StyledInput
                  className={clsx(shareData.firstName.hasError && 'hasError')}
                  type="text"
                  placeholder="First Name"
                  id="firstName"
                  name="firstName"
                  value={shareData.firstName.value}
                  onChange={(e) => {
                    handleChange(e, 'firstName');
                  }}
                />
              </StyledLabel>
              <StyledLabel
                htmlFor="lastName"
                className={clsx(shareData.lastName.hasError && 'hasError')}
              >
                <StyledInput
                  className={clsx(shareData.lastName.hasError && 'hasError')}
                  type="text"
                  placeholder="Last Name"
                  id="lastName"
                  name="lastName"
                  value={shareData.lastName.value}
                  onChange={(e) => {
                    handleChange(e, 'lastName');
                  }}
                />
              </StyledLabel>
              <StyledLabel
                htmlFor="email"
                className={clsx(shareData.email.hasError && 'hasError')}
              >
                <StyledInput
                  className={clsx(shareData.email.hasError && 'hasError')}
                  type="email"
                  placeholder="E-Mail Address"
                  id="email"
                  name="email"
                  value={shareData.email.value}
                  onChange={(e) => {
                    handleChange(e, 'email');
                  }}
                />
              </StyledLabel>
              <ProfileDropDownSelect
                labeledby="shareProfile"
                options={profiles}
                shareProfile={shareData.shareProfile.value}
                handleSelected={handleChangeSelectProfile}
              />

              <StyledButton
                disabled={isDisabled(shareData)}
                className="orange"
                type="button"
                onClick={handleFormSubmit}
              >
                <span>Share Now</span>
                {' '}
                <img src={iconBtnArrow} alt="" />
              </StyledButton>
            </StyledCol>
          </StyledRow>
        </ReStyledContainer>
        <ConfirmationModal
          isOpen={modalIsOpen}
          setIsOpen={setIsOpen}
          setShareData={setShareData}
          initState={initState}
        />
      </ThemeProvider>
    </>
  );
}

export default Page6;
