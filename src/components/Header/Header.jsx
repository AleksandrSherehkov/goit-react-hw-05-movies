import propTypes from 'prop-types';
import Container from 'components/Container/Container';
import { HeaderWrapper, NavigationList, Item, CustomLink } from './Header.styled';

const Header =({ title }) => {
  return (
    <HeaderWrapper>
      <Container>
        <NavigationList>
          <Item>
            <CustomLink to="/">Home</CustomLink>
          </Item>
          <Item>
            <CustomLink to="/movies">Movies</CustomLink>
          </Item>
        </NavigationList>
      </Container>
    </HeaderWrapper>
  );
}

Header.prototype = {
  title: propTypes.string.isRequired,
};

export default Header;
