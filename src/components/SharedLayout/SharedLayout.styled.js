import styled from 'styled-components';

const Container = styled.div`
  min-width: 320px;
  max-width: 480px;
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;

  @media screen and (min-width: 768px) {
    max-width: 768px;
    padding-left: 32px;
    padding-right: 32px;
  }

  @media screen and (min-width: 1280px) {
    max-width: 1280px;
    padding-left: 16px;
    padding-right: 16px;
  }
`;
export default Container;
