import Container from 'components/Container/Container';
import { LoaderWrapper, Text } from './Loader.styled';

const Loader = () => {
  return (
    <Container>
      <LoaderWrapper>
        <Text>Loading...</Text>
      </LoaderWrapper>
    </Container>
  );
};

export default Loader;
