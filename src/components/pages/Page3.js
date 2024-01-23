import * as React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { StepperContext } from '../../contexts/stepperContext';
import { device } from '../../device';
import Container from '../Container';
import Header from '../Header';
import PageControls from '../PageControls';
import ProfileAvatar from '../ProfileAvatar';
import LottieBg from '../LottieBg';
import bgLottieDots from '../../data/bg-cylinders.json';
import bgBlueCylinderPattern from '../../images/bg-blue-cylinder-pattern.jpg';
import {
  theme1,
  StyledFieldSet,
  StyledLabel,
  baseLabelStyles,
  StyledInput,
  StyledP,
  StyledAddButton,
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

const Styledhelper = styled.span`
  text-align: left;
  font-family: ${(props) => props.theme.sansSerif};
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;
  color: #10069f;
  margin-bottom: 20px;
  display: block;
`;

const ReStyledLabel = styled.label`
  ${baseLabelStyles}
  text-align: left;
  font-family: ${(props) => props.theme.sansSerif};
  font-weight: normal;
  font-size: 16px;
  line-height: 22px;
  letter-spacing: 0px;
  color: #57514b;
  text-transform: none;
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

const ReStyledFieldSet = styled(StyledFieldSet)`
  margin-bottom: 65px;
  @media ${device.breakUp768} {
    margin-bottom: 35px;
  }
`;

const StyledCheckBox = styled.label`
  display: inline-block;
  position: relative;
  margin-bottom: 10px;
  margin-right: 5px;
  span {
    -webkit-font-smoothing: auto;
    -moz-osx-font-smoothing: auto;
    display: block;
    text-align: left;
    font-size: 14px;
    line-height: 18px;
    font-weight: normal;
    color: #57514b;
    text-transform: none;
    padding: 8px 20px;
    cursor: pointer;
    user-select: none;
    border-radius: 28px;
    border-width: 2px;
    border-style: solid;
    border-color: #e8eaed;
    @media ${device.breakUp768} {
      font-size: 16px;
      line-height: 18px;
      padding: 14px 23px;
    }

    &:hover {
      border-color: #10109f;
      color: #10109f;
    }
    &.active {
      background-color: #10109f;
      border-color: #10109f;
      color: #ffffff;
    }
  }
  input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
    &:checked ~ span {
      background-color: #10109f;
      border-color: #10109f;
      color: #ffffff;
    }
  }
`;

const StyledQuestion = styled(StyledFieldSet)`
  .row {
    display: flex;
    flex-direction: column;
    margin-left: -10px;
    margin-right: -10px;
    @media ${device.breakUp768} {
      flex-direction: row;
      align-items: flex-end;
    }
  }
  .col {
    margin-bottom: 15px;
    padding-left: 10px;
    padding-right: 10px;
    &.first {
      @media ${device.breakUp768} {
        max-width: 462px;
      }
      @media ${device.breakUp1024} {
        max-width: 396px;
      }
      @media ${device.breakUp1440} {
        max-width: 538px;
      }
    }
  }
  .label {
    text-align: left;
    font-size: 16px;
    line-height: 22px;
    font-weight: 400;
    color: #57514b;
    margin-bottom: 25px;
    display: block;
    @media ${device.breakUp768} {
      margin-bottom: 35px;
    }
  }
`;

function Page3() {
  const {
    state: { currentPage, profile, qualities, categories },
    dispatch,
  } = React.useContext(StepperContext);
  const [newGoal, setNewGoal] = React.useState();
  const isValid = profile.qualities?.length;
  const isChecked = (checkedId) =>
    !!profile.qualities.find((quality) => quality.id === checkedId);

  const handleOnChanged = (quality) => {
    if (isChecked(quality.id)) {
      const remove = profile.qualities.filter(
        (q) => q.id !== quality.id,
      );
      dispatch({
        type: 'setUserProfile',
        profile: { qualities: remove },
      });
    } else {
      dispatch({
        type: 'setUserProfile',
        profile: { qualities: [...profile.qualities, quality] },
      });
    }
  };

  const handleNewGoal = () => {
    if (newGoal) {
      dispatch({
        type: 'setUserProfile',
        profile: {
          new_goals: [
            ...profile.new_goals,
            { id: profile.new_goals.length, name: newGoal },
          ],
        },
      });
      setNewGoal('');
    }
  };

  React.useEffect(() => {
    const getCats = () => {
      const qualityIds = profile.qualities.map((q) => q.id);
      return categories.filter((cat) => {
        if (cat.qualities) {
          return cat.qualities.some((catQ) => qualityIds.includes(catQ));
        }
        return false;
      });
    };
    dispatch({
      type: 'setUserProfile',
      profile: { categories: getCats().map((cat) => ({
        ...cat,
        rank: 1,
        value: `${((1 / getCats().length) * 100).toFixed(2)}%`,
      })) },
    });
  }, [profile.qualities, categories, dispatch]);

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
                  Step 3:
                  {' '}
                  <span>What are the goals?</span>
                </StyledH2>
                <ReStyledFieldSet>
                  <StyledLabel style={{ marginBottom: '15px' }}>
                    Let’s pick out what makes them successful
                  </StyledLabel>
                  <Styledhelper>Select All That Apply:</Styledhelper>
                  {qualities
                    .filter((quality) => quality.role_id === profile.role_id.id)
                    .map((quality) => (
                      <StyledCheckBox
                        key={quality.id}
                        htmlFor={`goal${quality.id}`}
                      >
                        <input
                          name={`goal${quality.id}`}
                          id={`goal${quality.id}`}
                          type="checkbox"
                          value={quality.name}
                          checked={isChecked(quality.id)}
                          onChange={() => {
                            handleOnChanged(quality);
                          }}
                        />
                        <span>{quality.name}</span>
                      </StyledCheckBox>
                    ))}
                </ReStyledFieldSet>
                <StyledQuestion>
                  <div className="row">
                    <div className="col first">
                      <ReStyledLabel htmlFor="missingGoals">
                        <span style={{ display: 'block', marginBottom: '20px' }}>
                          Don’t see the goals you want to include? No problem!
                          You can add your new goals.
                        </span>
                        <div>
                          {profile.new_goals.map((goal) => (
                            <StyledCheckBox key={goal.id}>
                              <span className="active">{goal.name}</span>
                            </StyledCheckBox>
                          ))}
                        </div>
                        <StyledInput
                          type="text"
                          placeholder="Name of new goal"
                          value={newGoal || ''}
                          onChange={(e) => {
                            setNewGoal(e.target.value);
                          }}
                        />
                      </ReStyledLabel>
                    </div>
                    <div className="col">
                      <StyledAddButton
                        disabled={!newGoal}
                        className="outline"
                        onClick={handleNewGoal}
                      >
                        <span className="icon">+</span>
                        {' '}
                        <span className="text">Add</span>
                      </StyledAddButton>
                    </div>
                  </div>
                </StyledQuestion>
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
                      It’s important to be clear about the characteristics
                      someone must possess to be successful in the role. This
                      allows you to understand the competencies needed to find
                      the right candidate and help your team become successful
                      through training and coaching.
                    </StyledP>
                  </div>
                </div>
              </ReStyledColOneThirdsMdUp>
            </ReStyledRow>
          </StyledWrapper>
          <PageControls currentPage={currentPage} isValid={isValid} />
        </Container>
      </ThemeProvider>
    </>
  );
}

export default Page3;
