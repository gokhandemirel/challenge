import styled from 'styled-components';
import AppRoutes from './routing/appRoutes';

export default function App() {
  return (
    <Container>
      <Layout>
        <AppRoutes />
      </Layout>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  width: 400px;
  height: auto;
  margin: 0 auto;

  @media (max-width: 768px) {
    width: calc(100% - 40px);
  }
`;

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 0px;
  width: 100%;
`;
