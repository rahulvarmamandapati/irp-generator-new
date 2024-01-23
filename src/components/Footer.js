import React from 'react';
import styled from 'styled-components';
import { StepperContext } from '../contexts/stepperContext';
import Container from './Container';
import { StyledP } from '../theme/globalStyle';
import { device } from '../device';
import logoOrange from '../images/mindtickle-logo-orange.svg';
import iconSnap from '../images/icon-snap.svg';
import iconComment from '../images/icon-comment.svg';
import iconBtnArrowRed from '../images/icon-button-arrow-right-red.svg';
import IconLinkedIn from '../images/icon-linkedin.png';
import IconLinkedInHover from '../images/icon-linkedin-hover.png';
import IconFacebook from '../images/icon-facebook.png';
import IconFacebookHover from '../images/icon-facebook-hover.png';
import IconTwitter from '../images/icon-twitter.png';
import IconTwitterHover from '../images/icon-twitter-hover.png';

const StyledFooter = styled.footer`
  background-color: #fff;
  padding-bottom: 45px;

  .footer {
    ul {
      padding: 0;
      margin: 0;
      list-style: none;
      li {
        display: inline-block;
        margin-right: 20px;
        &:last-child {
          margin: 0;
        }
      }
    }
    span,
    a {
      text-align: left;
      font-size: 14px;
      letter-spacing: 0px;
      color: #57514b;
    }
    a {
      &:hover {
        text-decoration: none;
        color: #fe5000;
        svg path {
          fill: #10069f;
        }
      }
      span {
        line-height: 0;
        text-indent: -999em;
        display: inline-block;
      }
      &.twitter-icon {
        background: url(${IconTwitter}) no-repeat center center;
        &:hover {
          background-image: url(${IconTwitterHover});
        }
      }
      &.facebook-icon {
        background: url(${IconFacebook}) no-repeat center center;
        &:hover {
          background-image: url(${IconFacebookHover});
        }
      }
      &.linkedin-icon {
        background: url(${IconLinkedIn}) no-repeat center center;
        &:hover {
          background-image: url(${IconLinkedInHover});
        }
      }
      &.facebook-icon,
      &.linkedin-icon,
      &.twitter-icon {
        width: 25px;
        height: 25px;
        display: inline-block;
        background-size: cover;
      }
    }
  }
`;

const StyledFooterRow = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  @media ${device.breakUp768} {
    flex-direction: row;
    align-items: flex-end;
  }
`;

const StyledFooterCol = styled.div`
  text-align: center;
  margin-bottom: 35px;
  @media ${device.breakUp768} {
    text-align: left;
    margin-bottom: 0;
  }
`;

const StyledSection = styled.section`
  background-color: #f5f6f7;
  padding-top: 60px;
  padding-bottom: 60px;
`;

const StyledRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  margin-left: -15px;
  margin-right: -15px;
`;

const StyledCol = styled.div`
  flex-shrink: 0;
  width: 100%;
  max-width: 100%;
  padding-left: 15px;
  padding-right: 15px;
  @media ${device.breakUp1024} {
    flex: 1 0 0%;
  }
  &.first {
    margin-bottom: 40px;
    @media ${device.breakUp1024} {
      margin-right: 35px;
    }
  }
  &.last {
    margin-bottom: 40px;
    @media ${device.breakUp1024} {
      margin-left: 35px;
    }
  }
`;

const StyledCtaBlock = styled.div`
  display: flex;
  margin: auto;
  flex-direction: column;
  text-align: center;

  @media ${device.breakUp768} {
    flex-direction: row;
    text-align: left;
  }
  @media ${device.breakUp1440} {
    width: 400px;
  }

  .image {
    margin-left: auto;
    margin-right: auto;
    @media ${device.breakUp768} {
      margin-right: 25px;
      width: 45px;
    }
  }
`;

const StyledBlueLinkButton = styled.a`
  margin-top: 10px;
  text-align: left;
  font-weight: bold;
  font-size: 16px;
  line-height: 19px;
  color: #10069f;
  text-decoration: none;
  img {
    transition: all 0.2s ease-in-out;
    transform: translateX(10px);
  }
  &:hover {
    color: #10069f;
    text-decoration: none;
    img {
      transform: translateX(15px);
    }
  }
`;

function Header() {
  const {
    state: { currentPage },
  } = React.useContext(StepperContext);

  return (
    <StyledFooter>
      {currentPage === 6 && (
        <StyledSection>
          <Container>
            <StyledRow>
              <StyledCol className="first">
                <StyledCtaBlock>
                  <div>
                    <img className="image" src={iconSnap} alt="" />
                  </div>
                  <div>
                    <StyledP style={{ margin: 0 }}>
                      See a walkthrough of IRP in action on Mindtickle.
                    </StyledP>
                    <StyledBlueLinkButton
                      href="https://app.getreprise.com/launch/dnbm316/"
                      target="_blank"
                      rel="noreferrer"
                      style={{ marginBottom: '10px' }}
                    >
                      See Walkthrough Now
                      {' '}
                      <img src={iconBtnArrowRed} alt="" />
                    </StyledBlueLinkButton>
                  </div>
                </StyledCtaBlock>
              </StyledCol>
              <StyledCol className="last">
                <StyledCtaBlock>
                  <div>
                    <img className="image" src={iconComment} alt="" />
                  </div>
                  <div>
                    <StyledP style={{ margin: 0 }}>
                      Talk to our experts on how to build your IRP in Mindtickle
                      to track gaps in reps and teams at scale.
                    </StyledP>
                    <StyledBlueLinkButton
                      href="https://www.mindtickle.com/demo/?utm_source=organic%20&utm_medium=website&utm_campaign=IRP-Generator&utm_content=&utm_term="
                      target="_blank"
                      rel="noreferrer"
                      style={{ marginBottom: '10px' }}
                    >
                      Talk to Us
                      {' '}
                      <img src={iconBtnArrowRed} alt="" />
                    </StyledBlueLinkButton>
                  </div>
                </StyledCtaBlock>
              </StyledCol>
            </StyledRow>
          </Container>
        </StyledSection>
      )}
      <Container className="footer" style={{ paddingTop: '35px' }}>
        <StyledFooterRow>
          <StyledFooterCol>
            <a href="https://www.mindtickle.com/" target="_blank" rel="noreferrer">
              <img src={logoOrange} alt="" />
            </a>
            <ul>
              <li>
                <span>© 2022 Mindtickle, Inc. All rights reserved.</span>
              </li>
              <li>
                <a
                  href="https://www.mindtickle.com/privacy-policy/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Privacy
                </a>
              </li>
              <li>
                <a
                  href="https://www.mindtickle.com/terms-of-service/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Terms of Service
                </a>
              </li>
            </ul>
          </StyledFooterCol>
          <StyledFooterCol>
            <ul>
              <li>
                <a
                  href="https://www.linkedin.com/company/mindtickle/"
                  target="_blank"
                  rel="noreferrer"
                  className="linkedin-icon"
                >
                  <span>LinkedIn</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/mindtickle/"
                  target="_blank"
                  rel="noreferrer"
                  className="facebook-icon"
                >
                  <span>Facebook</span>
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com/mindtickle/"
                  target="_blank"
                  rel="noreferrer"
                  className="twitter-icon"
                >
                  <span>Twitter</span>
                </a>
              </li>
            </ul>
          </StyledFooterCol>
        </StyledFooterRow>
      </Container>
    </StyledFooter>
  );
}

export default Header;
