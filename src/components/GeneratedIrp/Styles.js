import { PDFDownloadLink, StyleSheet } from '@react-pdf/renderer';
import styled from 'styled-components';
import { baseButtonStyles } from '../../theme/globalStyle';

export const styles = StyleSheet.create({
  page: {
    margin: 0,
    padding: 0,
    paddingBottom: '30px',
    backgroundColor: '#FFFFFF',
    fontFamily: 'Montserrat',
    color: '#57514B',
    fontSize: '10px',
  },
  section: {
    borderBottom: '1pt solid #E8EAED',
    paddingBottom: '30px',
    marginLeft: '30px',
    marginRight: '30px',
    marginBottom: '30px',
  },
  debugRed: {
    border: '1px solid red',
  },
  debugBlue: {
    border: '1px solid blue',
  },
  debugYellow: {
    border: '1px solid yellow',
  },
  logo: {
    width: '100px',
  },
  styledH2: {
    fontSize: '20px',
    color: '#10069F',
    fontWeight: 700,
    marginBottom: '20px',
  },
  styledH3: {
    fontSize: '14px',
    fontWeight: 700,
    color: '#10069F',
    marginBottom: '20px',
  },
  styledSpanLabel: {
    display: 'block',
    fontSize: '8px',
    fontWeight: 700,
    color: '#FE5000',
    textTransform: 'uppercase',
  },
  styledP: {
    color: '#57514B',
    fontSize: '10px',
    marginBottom: '10px',
  },
  styledScores: {},
  styledScoresLast: {
    border: 'none',
    paddingBottom: 0,
    marginBottom: 0,
  },
  styledScoresHeader: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    justifyContent: 'space-between',
    paddingTop: '8px',
    paddingBottom: '8px',
    paddingLeft: '15px',
    paddingRight: '15px',
  },
  headerScoreTag: {
    width: '30%',
  },
  styledScoresRow: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    justifyContent: 'space-between',
    paddingTop: '8px',
    paddingBottom: '8px',
    paddingLeft: '15px',
    paddingRight: '15px',
  },
  scoreLabel: {
    width: '30%',
  },
});

export const ReStyledButton = styled(PDFDownloadLink)`
  ${baseButtonStyles}
  background-color: #FE5000;
  border-radius: 25px;
  font-size: 16px;
  font-weight: bold;
  padding: 15px 25px;
  display: inline-flex;
  text-decoration: none;
  justify-content: space-between;
  align-items: center;
  color: ${(props) => props.theme.white};
  transition: all 0.2s ease;
  position: relative;
  z-index: 1;
  overflow: hidden;

  :disabled {
    background: ${(props) => props.theme.disabled};
    cursor: not-allowed;
  }
  &:hover,
  &:focus,
  &:active {
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.35);

    &::after {
      width: 100%;
    }
    span {
      transform: translateX(-5px);
    }
    img {
      transform: translateX(5px);
    }
  }

  &::after {
    content: '';
    width: 0;
    position: absolute;
    background-color: #d93b00;
    top: 0;
    bottom: 0;
    left: 0;
    border-radius: 25px;
    transition: all 0.2s ease;
    z-index: -1;
  }

  &.orange {
    background-color: #fe5000;
    &::after {
      background-color: #d93b00;
    }
  }

  &.blue {
    background-color: #10069f;
    &::after {
      background-color: #080080;
    }
  }

  span {
    transition: all 0.2s ease;
  }
  img {
    margin-left: 8px;
    transition: all 0.2s ease;
  }
`;
