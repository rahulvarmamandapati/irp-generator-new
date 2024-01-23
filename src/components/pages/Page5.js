import * as React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import clsx from 'clsx';
import { StepperContext } from '../../contexts/stepperContext';
import { addNewProfile } from '../../services/hooks/write';
import { ANIMATION_DIRECTION } from '../../constants';
import { device } from '../../device';
import Container from '../Container';
import Header from '../Header';
import Checkbox from '../Checkbox';
import LottieBg from '../LottieBg';
import bgLottieDots from '../../data/bg-sphere.json';
import bgBlueDotsPattern from '../../images/bg-blue-spheres-pattern.jpg';
import iconBtnArrow from '../../images/icon-button-arrow-right.svg';
import {
  theme1,
  StyledP,
  StyledButton,
  StyledLabel,
  StyledInput,
  StyledRow,
} from '../../theme/globalStyle';
import { StyledForm } from '../../theme/mktoForm';
// eslint-disable-next-line
const emailReg = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const hasError = (value, key) => {
  switch (key) {
    case 'email':
      return !value.match(emailReg);
    default:
      return value === '';
  }
};

const StyledWrapper = styled.section`
  padding: 30px 20px;
  width: 100%;
  background-color: #fff;
  border-radius: 5px;
  @media ${device.breakUp768} {
    padding: 30px 90px;
  }
  @media ${device.breakUp1024} {
    padding: 45px 75px;
  }
  @media ${device.breakUp1440} {
    padding: 60px 130px;
  }
`;

const StyledH4 = styled.h4`
  text-align: center;
  font-family: ${(props) => props.theme.sansSerif};
  font-size: 24px;
  line-height: 29px;
  font-weight: bold;
  color: ${(props) => props.theme.darkBlue};
  margin: 0 auto;
  margin-bottom: 40px;
  @media ${device.breakUp768} {
    font-size: 35px;
    line-height: 43px;
    width: auto;
  }
  @media ${device.breakUp1024} {
    width: 400px;
  }
  @media ${device.breakUp1440} {
    margin-bottom: 80px;
  }
`;

const StyledCol = styled.div`
  flex-shrink: 0;
  width: 100%;
  max-width: 100%;
  padding-left: 15px;
  padding-right: 15px;
  margin-bottom: 45px;

  @media ${device.breakUp768} {
    margin-bottom: 60px;
  }
  @media ${device.breakUp1024} {
    flex: 1 0 0%;
  }
  @media ${device.breakUp1440} {
    margin-bottom: 60px;
  }
`;

const StyledFieldSet = styled.fieldset`
  border: none;
  padding: 0;
  margin: 0;
  min-width: auto;
`;

function Page5() {
  const {
    state: { persona, profile },
    dispatch,
  } = React.useContext(StepperContext);
  const [savedStatus, setSavedStatus] = React.useState();
  const [shareData, setShareData] = React.useState({
    firstName: { value: '', hasError: false },
    lastName: { value: '', hasError: false },
    email: { value: '', hasError: false },
    jobTitle: { value: '', hasError: false },
    company: { value: '', hasError: false },
    emailConsent: { value: false, hasError: false },
  });
  const isDisabled = () => {
    const { company, email, firstName, lastName, jobTitle, emailConsent } = shareData;
    const empty = [
      company.value,
      email.value,
      firstName.value,
      lastName.value,
      jobTitle.value,
      emailConsent.value,
    ].some((value) => value === '' || value === false);
    const error = [
      company.hasError,
      email.hasError,
      firstName.hasError,
      lastName.hasError,
      jobTitle.hasError,
      emailConsent.value,
    ].some((value) => value === false);
    return empty && error && savedStatus !== 'saved';
  };
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
      type: 'setPersona',
      persona: { [key]: e.target.value },
    });
  };
  const handleChangeCheckbox = () => {
    setShareData({
      ...shareData,
      emailConsent: {
        ...shareData.emailConsent,
        value: !shareData.emailConsent.value,
      },
    });
    dispatch({
      type: 'setPersona',
      persona: { emailConsent: !shareData.emailConsent.value },
    });
  };
  const handleFormSubmit = async () => {
    setSavedStatus('saving');
    try {
      const fbProfile = await addNewProfile(profile, persona);
      dispatch({ type: 'LOAD_PERSONA', savedPersona: fbProfile });
      setSavedStatus((fbProfile.profile.profile_id && 'saved'));
    } catch (error) {
      setSavedStatus('error');
      console.log(error);
    }
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
        2236,
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
            dispatch({
              type: 'setCurrentPage',
              currentPage: 6,
              animationDirection: ANIMATION_DIRECTION.FORWARD,
            });
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

  React.useEffect(() => {
    if (savedStatus === 'saved') {
      window.history.replaceState(
        null,
        null,
        `${window.location.origin}?persona=${persona.id}`,
      );
      window.MktoForms2.getForm(2236)
        .vals({
          iRPPersonaProfileURL: `${window.location.origin}?persona=${persona.id}`,
          Company: shareData.company.value,
          Email: shareData.email.value,
          FirstName: shareData.firstName.value,
          LastName: shareData.lastName.value,
          Title: shareData.jobTitle.value,
          optIn: shareData.emailConsent.value,
        })
        .submit();
    }
  }, [savedStatus, persona, shareData]);

  return (
    <>
      <LottieBg lottieData={bgLottieDots} fallback={bgBlueDotsPattern} />
      <ThemeProvider theme={theme1}>
        <Container style={{ paddingBottom: '50px' }}>
          <Header />
          <StyledWrapper>
            <StyledH4>Let us know where to send your IRP.</StyledH4>
            <StyledForm id="mktoForm_2236" />

            <StyledFieldSet>
              <StyledRow>
                <StyledCol>
                  <StyledLabel
                    htmlFor="firstName"
                    className={clsx(shareData.firstName.hasError && 'hasError')}
                  >
                    First name
                    <StyledInput
                      className={clsx(
                        shareData.firstName.hasError && 'hasError',
                      )}
                      type="text"
                      placeholder="John"
                      id="firstName"
                      name="firstName"
                      value={shareData.firstName.value}
                      onChange={(e) => {
                        handleChange(e, 'firstName');
                      }}
                    />
                  </StyledLabel>
                </StyledCol>
                <StyledCol>
                  <StyledLabel
                    htmlFor="lastName"
                    className={clsx(shareData.lastName.hasError && 'hasError')}
                  >
                    Last name
                    <StyledInput
                      className={clsx(
                        shareData.lastName.hasError && 'hasError',
                      )}
                      type="text"
                      placeholder="Smith"
                      id="lastName"
                      name="lastName"
                      value={shareData.lastName.value}
                      onChange={(e) => {
                        handleChange(e, 'lastName');
                      }}
                    />
                  </StyledLabel>
                </StyledCol>
              </StyledRow>
              <StyledRow>
                <StyledCol>
                  <StyledLabel
                    htmlFor="email"
                    className={clsx(shareData.email.hasError && 'hasError')}
                  >
                    Email address
                    <StyledInput
                      className={clsx(shareData.email.hasError && 'hasError')}
                      type="email"
                      placeholder="John@smith.com"
                      id="email"
                      name="email"
                      value={shareData.email.value}
                      onChange={(e) => {
                        handleChange(e, 'email');
                      }}
                    />
                  </StyledLabel>
                </StyledCol>
              </StyledRow>
              <StyledRow>
                <StyledCol>
                  <StyledLabel
                    htmlFor="email"
                    className={clsx(shareData.jobTitle.hasError && 'hasError')}
                  >
                    Job Title
                    <StyledInput
                      className={clsx(
                        shareData.jobTitle.hasError && 'hasError',
                      )}
                      type="text"
                      placeholder="VP of Cool"
                      id="jobTitle"
                      name="jobTitle"
                      value={shareData.jobTitle.value}
                      onChange={(e) => {
                        handleChange(e, 'jobTitle');
                      }}
                    />
                  </StyledLabel>
                </StyledCol>
                <StyledCol>
                  <StyledLabel
                    htmlFor="company"
                    className={clsx(shareData.company.hasError && 'hasError')}
                  >
                    Company name
                    <StyledInput
                      className={clsx(shareData.company.hasError && 'hasError')}
                      type="text"
                      placeholder="John Smith & Co."
                      id="company"
                      name="company"
                      value={shareData.company.value}
                      onChange={(e) => {
                        handleChange(e, 'company');
                      }}
                    />
                  </StyledLabel>
                </StyledCol>
              </StyledRow>
            </StyledFieldSet>
          </StyledWrapper>
          <div style={{ display: 'flex', padding: '30px 0' }}>
            <div style={{ paddingRight: '15px' }}>
              <Checkbox
                required
                disabled={false}
                name="emailConsent"
                checked={shareData.emailConsent.value}
                label=""
                value="By checking this box, you are providing us consent to email you educational content, and information on our products and services. You may unsubscribe at any time."
                onChange={handleChangeCheckbox}
              />
            </div>
            <div>
              <StyledP style={{ margin: '0 0 15px', color: '#fff' }}>
                By checking this box, you are providing us consent to email you
                educational content, and information on our products and
                services. You may unsubscribe at any time.
              </StyledP>
              <StyledP style={{ margin: '0', color: '#fff' }}>
                By submitting this form, you agree to the
                {' '}
                <a
                  style={{ color: '#fff' }}
                  href="https://www.mindtickle.com/privacy-policy/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Mindtickle Privacy Policy
                </a>
              </StyledP>
            </div>
          </div>
          <div
            style={{
              textAlign: 'center',
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <StyledButton
              disabled={isDisabled()}
              className="orange"
              type="button"
              onClick={handleFormSubmit}
            >
              <span>Get My IRP</span>
              {' '}
              <img src={iconBtnArrow} alt="" />
            </StyledButton>
          </div>
        </Container>
      </ThemeProvider>
    </>
  );
}

export default Page5;
