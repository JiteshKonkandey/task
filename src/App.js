import React from 'react';
import styled from"styled-components";
import ContentCard from './ContentCard';
import FooterBar from './FooterBar';
import Header from './Header';

const MainContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TaskContainer = styled.div`
  width: 480px;
  // height: 741px;
  background-color: #F2F2F2;
  padding: 20px;
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: #FFFFFF;
`;
const App = () => {
  return (
    <>
      <MainContainer>
        <TaskContainer>
          <Container>
            <Header />
            <ContentCard />
            <FooterBar />
          </Container>
        </TaskContainer>
      </MainContainer>
    </>
  )
}

export default App;