import Layout from '../components/Layout';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
`;

const Header = styled.header`
  z-index: 133333337;
  position: absolute;
  top: 0;
  width: 100%;
  height: 44px;
  padding: 0 12px;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 24px;
  background: #fff;
  font-family: var(--font-title);
  font-size: 11px;
  border-bottom: 1px solid #000;

  @media (max-width: 899px) {
    border-bottom: 1px solid #000;
  }
`;

const Main = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Home = () => {
  return (
    <Layout>
      <Container>
        <Header>
          <svg width="25" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M13.667 2h-.834v.833H12v.834h-.833V4.5h-.834V6.167H9.5V7h-.833V8.667h-.834v1.666H7v.834h-.833v1.666h-.834v.834H4.5v.833H12V22h.833v-.833h.834v-.834h.833V19.5h.833V17.833h.834V17H17V15.333h.833v-1.666h.834v-.834h.833v-1.666h.833v-.834h.834V9.5h-7.5V2Z"
              fill="#000"></path>
          </svg>
        </Header>
        <Main>
          <h1>Welcome to HIFI Labs</h1>
          <p>Building an artist-owned, community-powered future for musicians.</p>
        </Main>
      </Container>
    </Layout>
  );
};

export default Home;
