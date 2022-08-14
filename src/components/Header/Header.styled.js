import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

import {
  mainBgColor,
  mainHoverEfect,
  mainTextColor,
  secondTextColor,
} from 'utilities/variables/css';

export const HeaderWrapper = styled.header`
  background: ${mainBgColor};

  padding: 20px 0 20px 0;
`;

export const NavigationList = styled.ul`
  display: flex;
`;

export const Item = styled.li`
  margin-right: 20px;

  :last-child {
    margin-right: 0;
  }
`;

export const CustomLink = styled(NavLink)`
  font-size: 20px;
  font-weight: 700;
  color: ${mainTextColor};
  transition: color ${mainHoverEfect};

  &.active {
    text-decoration: underline;
  }

  :hover {
    color: ${secondTextColor};
  }
`;
