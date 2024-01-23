import * as React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import clsx from 'clsx';
import DeleteModalWrapper from '../DeleteModalWrapper';
import { StepperContext } from '../../contexts/stepperContext';
import { device } from '../../device';
import Container from '../Container';
import Header from '../Header';
import ProfileAvatar from '../ProfileAvatar';
import ScoreCard from '../ScoreCard';
import SaveButton from '../SaveButton';
import LottieBg from '../LottieBg';
import bgLottieDots from '../../data/bg-sphere.json';
import bgBlueShperesPattern from '../../images/bg-blue-spheres-pattern.jpg';
import {
  theme1,
  baseLabelStyles,
  StyledH3,
  StyledP,
  StyledRow,
  StyledColOneThirdsMdUp,
  StyledColThreeThirdsMdUp,
} from '../../theme/globalStyle';

const StyledWrapper = styled.section`
  padding: 30px 20px;
  width: 100%;
  background-color: #fff;
  border-radius: 5px;
  @media ${device.breakUp768} {
    padding: 35px 30px;
  }
  @media ${device.breakUp1440} {
    padding: 35px;
  }
`;

const StyledStickySection = styled.section`
  position: relative;
  height: 100%;
  @media ${device.breakUp768} {
    .sticky {
      position: sticky;
      top: 0;
      z-index: 2;
    }
  }
`;

StyledStickySection.defaultProps = {
  'data-id': 'StyledStickySection',
};

const StyledProfileCard = styled.div`
  padding: 30px 20px 15px;
  width: 100%;
  background-color: #fff;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  @media ${device.breakUp768} {
    padding: 35px 30px 15px;
  }
  @media ${device.breakUp1440} {
    padding: 35px 35px 15px;
  }
  .row {
    @media ${device.breakUp768} {
      display: flex;
      margin-left: -15px;
      margin-right: -15px;
    }
    @media ${device.breakUp1024} {
      flex-direction: column;
    }
  }
  .col {
    @media ${device.breakUp768} {
      padding-left: 15px;
      padding-right: 15px;
    }
  }
`;

export const StyledH2 = styled.h2`
  text-align: left;
  font-family: ${(props) => props.theme.sansSerif};
  font-size: 24px;
  line-height: 29px;
  font-weight: bold;
  color: ${(props) => props.theme.darkBlue};
  margin: 0;
  margin-bottom: 15px;
  @media ${device.breakUp768} {
    margin-bottom: 20px;
  }
  @media ${device.breakUp1024} {
    font-size: 30px;
    line-height: 34px;
    margin-bottom: 15px;
  }
  @media ${device.breakUp1440} {
    font-size: 35px;
    line-height: 43px;
    margin-bottom: 20px;
  }
`;

const StyledControlGroup = styled.div`
  background-color: ${(props) => props.theme.gray7};
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  padding: 30px 20px;
  @media ${device.breakUp768} {
    padding: 35px 30px;
  }
  @media ${device.breakUp1440} {
    padding: 30px 35px;
  }
`;

const ReStyledColOneThirdsMdUp = styled(StyledColOneThirdsMdUp)`
  position: relative;
  margin-bottom: 20px;
  @media ${device.breakUp1024} {
    width: 33%;
  }
`;

const ReStyledColThreeThirdsMdUp = styled(StyledColThreeThirdsMdUp)`
  @media ${device.breakUp1024} {
    width: 65.96%;
  }
  @media ${device.breakUp1440} {
    width: 66.667%;
  }
`;

const StyledSpanLabel = styled.span`
  ${baseLabelStyles}
`;

const StyledDefinitionList = styled.dl`
  margin: 0;

  dt {
    ${baseLabelStyles}
    margin-bottom: 5px;
  }
  dd {
    font-family: 'Montserrat', 'Trebuchet MS', Helvetica, sans-serif;
    font-weight: medium;
    font-size: 16px;
    line-height: 21px;
    letter-spacing: 0px;
    color: #57514b;
    margin: 0;
    margin-bottom: 15px;
  }
`;

const StyledUl = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  li {
    margin-bottom: 10px;
  }
`;

const StyledOl = styled.ol`
  margin: 0 0 40px 20px;
  padding: 0;
  counter-reset: item;

  > li {
    margin: 0;
    padding: 0 0 0 0;
    text-indent: -10px;
    list-style-type: none;
    counter-increment: item;
    font-family: ${(props) => props.theme.sansSerif};
    font-size: 17px;
    line-height: 28px;
    font-weight: normal;
    letter-spacing: 0px;
    color: ${(props) => props.theme.copy};
  }

  > li:before {
    display: inline-block;
    text-align: left;
    padding-right: 8px;
    font-weight: bold;
    content: counter(item) '.';
  }
`;

function Page4() {
  const [isSticky, setSticky] = React.useState(false);
  const ref = React.useRef();
  const {
    state: { profile },
  } = React.useContext(StepperContext);
  React.useEffect(() => {
    const handleScroll = () => {
      if (ref.current) { setSticky(ref.current.getBoundingClientRect().top <= 0); }
    };
    const root = document.getElementById('root');
    root.addEventListener('scroll', handleScroll, { passive: true });
    return () => root.removeEventListener('scroll', () => handleScroll);
  }, [setSticky]);

  return (
    <>
      <LottieBg lottieData={bgLottieDots} fallback={bgBlueShperesPattern} />
      <ThemeProvider theme={theme1}>
        <Container style={{ paddingBottom: '50px' }}>
          <Header />
          <StyledRow>
            <ReStyledColOneThirdsMdUp>
              <StyledStickySection className="sticky-wrapper'">
                <StyledProfileCard>
                  <StyledH2>Ideal Rep Profile</StyledH2>
                  <div className="row">
                    <div className="col">
                      <ProfileAvatar
                        id={`avatar${profile.avatar_id.id}`}
                        size="x150x120"
                      >
                        {profile.name}
                      </ProfileAvatar>
                    </div>
                    <div className="col">
                      <StyledSpanLabel>Name</StyledSpanLabel>
                      <StyledH3>{profile.name}</StyledH3>
                      <StyledDefinitionList>
                        <dt>Job Title</dt>
                        <dd>{profile.role_id.name}</dd>
                      </StyledDefinitionList>
                    </div>
                    <div className="col">
                      <StyledDefinitionList>
                        <dt>Goals</dt>
                        <dd>
                          <StyledUl>
                            {profile.qualities.map((quality) => (
                              <li key={quality.id}>{quality.name}</li>
                            ))}
                            {profile.new_goals.map((goal) => (
                              <li key={goal.id}>{goal.name}</li>
                            ))}
                          </StyledUl>
                        </dd>
                      </StyledDefinitionList>
                    </div>
                  </div>
                </StyledProfileCard>
                <StyledControlGroup
                  className={clsx({ sticky: isSticky })}
                  ref={ref}
                  id="stickyElement"
                >
                  <StyledP style={{ margin: 0, marginBottom: '30px' }}>
                    Ready to see how you can put your ideal rep profile into
                    action? Download your customized PDF action plan.
                  </StyledP>
                  <SaveButton btnType="save" />
                  <SaveButton btnType="share" />
                  {profile.profile_id && <DeleteModalWrapper />}
                </StyledControlGroup>
              </StyledStickySection>
            </ReStyledColOneThirdsMdUp>
            <ReStyledColThreeThirdsMdUp>
              <StyledWrapper>
                <StyledH2>Scorecard</StyledH2>
                <StyledP>
                  Now let’s customize your scorecard. Your industry, company,
                  and sales team has its unique needs and challenges. Below you
                  can adjust the importance of the knowledge, skills, and
                  behaviors of your ideal rep.
                </StyledP>

                <StyledP style={{ fontWeight: '700', margin: '0' }}>
                  Tips
                </StyledP>

                <StyledOl>
                  <li>
                    Each of the knowledge, skills, and behaviors are marked as
                    "tags."
                    {' '}
                    <strong>
                      You can remove them completely as you tinker with your IRP formula.
                    </strong>
                  </li>
                  <li>
                    When updating the ranks,
                    {' '}
                    <strong>
                      1 means the skills are minimally important while 10 means they’re the most
                      important.
                    </strong>
                    {' '}
                    The weights will update automatically!
                  </li>
                  <li>
                    When you’re finished,
                    {' '}
                    <strong>
                      save your profile to download or share it with your team.
                    </strong>
                  </li>
                </StyledOl>
                <ScoreCard
                  heading="Knowledge"
                  categories={profile.categories}
                />
                <ScoreCard heading="Skills" categories={profile.categories} />
                <ScoreCard
                  heading="Behaviors"
                  categories={profile.categories}
                  cssStyles="last"
                />
              </StyledWrapper>
            </ReStyledColThreeThirdsMdUp>
          </StyledRow>
        </Container>
      </ThemeProvider>
    </>
  );
}

export default Page4;
