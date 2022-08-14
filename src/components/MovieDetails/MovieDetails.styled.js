import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
import {
  accentBgColor,
  accentTextColor,
  mainHoverEfect,
  mainTextColor,
  secondBgColor,
  secondTextColor,
} from 'utilities/variables/css';

export const ButtonGoBack = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 200px;
  height: 40px;
  margin-bottom: 30px;

  font-size: 15px;
  font-family: inherit;

  background-color: ${secondBgColor};
  color: ${secondTextColor};
  border: none;

  cursor: pointer;
  transition: background-color ${mainHoverEfect}, color ${mainHoverEfect};

  :hover {
    background-color: ${accentBgColor};
    color: ${secondTextColor};
  }
`;

export const Label = styled.span`
  margin-left: 10px;
`;

export const MainWrapper = styled.div`
  margin-bottom: 100px;
  display: flex;
`;

export const Poster = styled.img`
  width: 400px;
`;

export const InfoWrapper = styled.div`
  margin-left: 50px;
`;

export const TitleWrapper = styled.div`
  margin-bottom: 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Title = styled.h2`
  color: ${accentTextColor};

  font-size: 50px;
  margin-bottom: 0;
`;

export const ReleaseDate = styled.p`
  font-weight: 700;
  font-size: 18px;
`;

export const GenresList = styled.ul`
  margin-bottom: 50px;
  display: flex;
`;

export const GenresItem = styled.li`
  font-weight: 700;

  margin-right: 15px;

  :last-child {
    margin-right: 0;
  }

  font-size: 18px;
`;

export const Description = styled.p`
  line-height: 2;
  margin-bottom: 50px;
  font-size: 18px;
`;

export const VoteWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const VoteAverage = styled.p`
  font-size: 18px;
`;

export const VoteCount = styled.p`
  font-size: 18px;
`;

export const Value = styled.span`
  font-weight: 700;
`;

export const AdditionalWrapper = styled.div``;

export const AdditionalTitle = styled.p`
  text-transform: uppercase;
  background-color: ${accentBgColor};
  color: ${secondTextColor};
  padding: 15px;
  margin-bottom: 30px;
`;

export const NavigationsList = styled.ul``;

export const NavigationsItem = styled.li`
  margin-bottom: 15px;

  :last-child {
    margin-bottom: 0;
  }
`;

export const CustomLink = styled(NavLink)`
  font-size: 18px;
  color: ${mainTextColor};

  &.active {
    color: ${accentTextColor};
  }
`;
