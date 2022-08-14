import styled from '@emotion/styled';

export const ContainerWrapper = styled.div`
  width: 300px;
  margin: 0 auto;
  padding: ${props => (props.isPadding ? '0 10px 20px 10px' : '20px 10px 20px 10px')};
  width: 1360px;
`;
