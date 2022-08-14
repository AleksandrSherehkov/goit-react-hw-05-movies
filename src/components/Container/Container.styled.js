import styled from '@emotion/styled';

export const ContainerWrapper = styled.div`
  margin: 0 auto;
  padding: ${props => (props.isPadding ? '0 10px 20px 10px' : '20px 10px 20px 10px')};
  width: 1368px;
`;
