import * as React from 'react';
import styled from 'styled-components';
import clsx from 'clsx';
import { StepperContext } from '../contexts/stepperContext';
import ToolTip from './ToolTip';
import { device } from '../device';
import {
  baseLabelStyles,
  StyledH3,
  StyledRemoveButton,
  LinkButton,
  StyledInput,
  StyledAddButton,
} from '../theme/globalStyle';

const StyledSpanLabel = styled.span`
  ${baseLabelStyles}
`;

StyledSpanLabel.defaultProps = {
  'data-id': 'StyledSpanLabel',
};

const StyledScores = styled.div`
  padding: 0;
  padding-bottom: 30px;
  margin-bottom: 30px;
  border-bottom: 1px solid #e8eaed;

  @media ${device.breakUp768} {
    padding-left: 20px;
    padding-right: 20px;
  }
  @media ${device.breakUp1440} {
    padding-left: 30px;
    padding-right: 30px;
  }

  &.last {
    border: none;
    padding-bottom: 0;
    margin-bottom: 0;
  }
`;

StyledScores.defaultProps = {
  'data-id': 'StyledScores',
};

const StyledScoresHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
  .score-quantity {
    display: flex;
    @media ${device.breakUp768} {
      margin: auto;
    }
  }
  .score-weightage {
    display: flex;
  }
  .score-label {
    display: flex;
    flex: 0 0 auto;
    width: 100%;
    max-width: 100%;
    @media ${device.breakUp768} {
      width: 33.33333333%;
    }
  }
  .score-value {
    display: none;
    flex: 0 0 auto;
    width: 33.33333333%;
    width: 100%;
    max-width: 100%;
    @media ${device.breakUp768} {
      flex: 1 0 0%;
      width: 100%;
      justify-content: flex-end;
      display: flex;
    }
  }
`;

StyledScoresHeader.defaultProps = {
  'data-id': 'StyledScoresHeader',
};

const StyledScoresRow = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  margin-bottom: 25px;
  @media ${device.breakUp768} {
    flex-direction: row;
    margin-bottom: 8px;
  }
  .score-quantity {
    display: flex;
    justify-content: space-between;
    flex: 0 0 auto;
    width: 100%;
    max-width: 100%;
    @media ${device.breakUp768} {
      width: 33.33333333%;
    }
    .score-label {
      margin-bottom: 15px;
      @media ${device.breakUp768} {
        margin-bottom: 0;
      }
    }
  }
  .score-controls {
    align-items: flex-end;
    display: flex;
    justify-content: space-between;
    flex: 0 0 auto;
    width: 33.33333333%;
    width: 100%;
    max-width: 100%;
    @media ${device.breakUp768} {
      flex: 1 0 0%;
      width: 100%;
      justify-content: flex-end;
    }
    .score-value {
      margin-left: auto;
      @media ${device.breakUp768} {
        margin-left: 25px;
      }
    }
  }
`;

StyledScoresRow.defaultProps = {
  'data-id': 'StyledScoresRow',
};

const StyledNumberSelect = styled.div`
  @media ${device.breakUp768} {
    margin: auto;
  }
`;

const StyledTrigger = styled.div`
  position: relative;
  box-shadow: 0px 0px 6px rgb(0 0 0 / 15%);
  border-radius: 5px;
  text-align: center;
  padding-right: 25px;
  width: 70px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;

  &::after {
    content: '';
    width: 0;
    height: 0;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-top: 5px solid #fe5000;
    top: 50%;
    right: 25px;
    transform: translate(-50%, -50%);
    position: absolute;
    right: 0;
    cursor: pointer;
    user-select: none;
  }
  span {
    display: block;
    border-right: 2px solid #ebebeb;
    padding: 5px;
    height: 100%;
    font-size: 16px;
    line-height: 21px;
    color: #57514b;
    flex: 1;
    cursor: pointer;
    user-select: none;
  }
`;
const StyledList = styled.div`
  box-shadow: 0px 0px 6px rgb(0 0 0 / 15%);
  border-radius: 5px;
  width: 45px;
  z-index: 5;
  background-color: #fff;
  flex-direction: column;
  position: absolute;
  display: flex;
  height: 0;
  overflow: hidden;
  transition: all 0.2s ease;

  &.show {
    height: 310px;
  }
`;

const StyledListOption = styled.div`
  display: block;
  padding: 5px;
  height: 100%;
  font-size: 16px;
  line-height: 21px;
  color: #57514b;
  flex: 1;
  text-align: center;
  cursor: pointer;
  user-select: none;
  &:hover {
    color: #fe5000;
  }
`;

function useOutsideAlerter(ref) {
  const [outsideClick, setOutsideClick] = React.useState(false);
  React.useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        setOutsideClick(true);
        return;
      }
      setOutsideClick(false);
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref]);
  return [outsideClick];
}

export const NumberSelect = ({ category, handleSetRank }) => {
  const wrapperRef = React.useRef(null);
  const [outsideClick] = useOutsideAlerter(wrapperRef);
  const [isOpen, setIsOpen] = React.useState(false);
  const toggling = () => setIsOpen(!isOpen);

  React.useEffect(() => {
    if (outsideClick) setIsOpen(false);
  }, [outsideClick]);

  return (
    <StyledNumberSelect ref={wrapperRef}>
      <StyledTrigger
        role="button"
        tabIndex="0"
        id=""
        onKeyUp={toggling}
        onClick={toggling}
      >
        <span>{category.rank}</span>
      </StyledTrigger>
      <StyledList aria-expanded={isOpen} className={clsx(isOpen && 'show')}>
        {[...Array(10).keys()].map((option) => (
          <StyledListOption
            role="button"
            key={`${category.id}-${option + 1}`}
            tabIndex="0"
            onKeyUp={() => {
              toggling();
              handleSetRank(category, option + 1);
            }}
            onClick={() => {
              toggling();
              handleSetRank(category, option + 1);
            }}
          >
            {option + 1}
          </StyledListOption>
        ))}
      </StyledList>
    </StyledNumberSelect>
  );
};

function ScoreCard({ heading, categories, cssStyles }) {
  const {
    state: { profile },
    dispatch,
  } = React.useContext(StepperContext);
  const [newCategory, setNewCategory] = React.useState();

  const setScore = (value, cats) => {
    const sum = cats.reduce(
      (partialSum, a) => partialSum + parseInt(a.rank, 10),
      0,
    );
    return `${((value / sum) * 100).toFixed(2)}%`;
  };

  const handleSetRank = (category, rank) => {
    const tmpProfileCats = [...profile.categories].map((tpc) => {
      if (tpc.id === category.id) return { ...category, rank };
      return tpc;
    });
    const updateRankScore = tmpProfileCats.map((tpc) => ({
      ...tpc,
      value: setScore(tpc.rank, tmpProfileCats),
    }));
    dispatch({
      type: 'setUserProfile',
      profile: { categories: updateRankScore },
    });
  };
  const removeCategory = (id) => {
    const tmpProfileCats = [...profile.categories].filter(
      (tpc) => tpc.id !== id,
    );
    const updateRankScore = tmpProfileCats.map((tmp) => ({
      ...tmp,
      value: setScore(tmp.rank, tmpProfileCats),
    }));
    dispatch({
      type: 'setUserProfile',
      profile: { categories: updateRankScore },
    });
  };
  const clearNewCategories = () => {
    const tmpProfileCats = [...profile.categories, { ...newCategory }];
    const updateRankScore = tmpProfileCats.map((tmp) => ({
      ...tmp,
      value: setScore(tmp.rank, tmpProfileCats),
    }));
    dispatch({
      type: 'setUserProfile',
      profile: { categories: updateRankScore },
    });
    setNewCategory();
  };
  return (
    <section>
      <StyledH3 style={{ textTransform: 'capitalize' }}>{heading}</StyledH3>
      <StyledScores className={cssStyles}>
        <StyledScoresHeader>
          <div className="score-label">
            <StyledSpanLabel>IRP Tags</StyledSpanLabel>
          </div>
          <div className="score-value">
            <div className="score-quantity">
              <StyledSpanLabel>RANKING (1-10)</StyledSpanLabel>
              <ToolTip
                initShow={false}
                size="lg"
                description="Update these rankings based on what’s important for your
                    ideal rep. 1 means the skills are minimally important while
                    10 means they’re the most important. The weightage for each
                    tag will update as you rank them."
              />
            </div>
            <div className="score-weightage">
              <StyledSpanLabel>WEIGHTAGE</StyledSpanLabel>
              <ToolTip
                size="sm"
                description="As you update the importance of each tag, these weightages will change. You can also remove tags entirely."
              />
            </div>
          </div>
        </StyledScoresHeader>
        {categories
          .filter(({ type }) => type.toLowerCase() === heading.toLowerCase())
          .map((cat) => (
            <StyledScoresRow key={cat.id}>
              <div className="score-quantity">
                <div className="score-label">{cat.name}</div>
              </div>
              <div className="score-controls">
                <NumberSelect category={cat} handleSetRank={handleSetRank} />
                <div className="score-value">{cat.value}</div>
                <StyledRemoveButton
                  type="button"
                  style={{ marginLeft: '20px' }}
                  onClick={() => {
                    removeCategory(cat.id);
                  }}
                >
                  <div className="icon-remove">Remove</div>
                </StyledRemoveButton>
              </div>
            </StyledScoresRow>
          ))}
        {newCategory && (
          <div>
            <StyledInput
              type="text"
              placeholder="Name of new tag"
              value={newCategory.name}
              style={{ marginBottom: '15px' }}
              onChange={(e) => {
                setNewCategory({ ...newCategory, name: e.target.value });
              }}
            />
            <StyledAddButton
              type="button"
              className="outline"
              disabled={!newCategory.name}
              onClick={clearNewCategories}
            >
              <span className="icon">+</span>
              {' '}
              <span className="text">Add</span>
            </StyledAddButton>
          </div>
        )}
        {!newCategory && (
          <LinkButton
            type="button"
            onClick={() => {
              setNewCategory({
                id: categories.length,
                name: '',
                rank: 1,
                value: '0%',
                type: heading,
              });
            }}
          >
            + New Tag
          </LinkButton>
        )}
      </StyledScores>
    </section>
  );
}

export default ScoreCard;
