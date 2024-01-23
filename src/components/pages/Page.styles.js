import styled from 'styled-components';
import {
  baseButtonStyles,
  StyledRow,
  StyledColOneThirdsMdUp,
  StyledColThreeThirdsMdUp,
} from '../../theme/globalStyle';
import { device } from '../../device';

export const StyledWrapper = styled.section`
  padding: 20px;
  width: 100%;
  background-color: #fff;
  border-radius: 5px;
  @media ${device.breakUp768} {
    padding: 45px 35px;
  }
  @media ${device.breakUp1024} {
    padding: 45px 50px;
  }
  @media ${device.breakUp1440} {
    padding: 45px 70px;
  }
`;

export const ReStyledRow = styled(StyledRow)`
  @media ${device.breakUp768} {
    margin-left: -35px;
    margin-right: -35px;
  }
  @media ${device.breakUp1024} {
    margin-left: -25px;
    margin-right: -25px;
  }
  @media ${device.breakUp1440} {
    margin-left: -35px;
    margin-right: -35px;
  }
`;

export const ReStyledColOneThirdsMdUp = styled(StyledColOneThirdsMdUp)`
  @media ${device.breakUp768} {
    padding-left: 35px;
    padding-right: 35px;
  }
  @media ${device.breakUp1024} {
    border-right: 1px solid #ebeaed;
    padding-left: 25px;
    padding-right: 25px;
  }
  @media ${device.breakUp1440} {
    padding-left: 35px;
    padding-right: 35px;
  }
  &.order-lgUp-1 {
    @media ${device.breakUp1024} {
      order: 1;
    }
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

export const ReStyledColThreeThirdsMdUp = styled(StyledColThreeThirdsMdUp)`
  @media ${device.breakUp768} {
    padding-left: 35px;
    padding-right: 35px;
  }
  @media ${device.breakUp1024} {
    padding-left: 25px;
    padding-right: 25px;
  }
  @media ${device.breakUp1440} {
    padding-left: 35px;
    padding-right: 35px;
  }
  &.order-lgUp-2 {
    @media ${device.breakUp1024} {
      order: 2;
    }
  }
`;

StyledWrapper.defaultProps = {
  'data-id': 'StyledWrapper',
};

export const StyledAvatars = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

StyledAvatars.defaultProps = {
  'data-id': 'StyledAvatars',
};

export const StyledInvisButton = styled.button`
  ${baseButtonStyles}
`;
