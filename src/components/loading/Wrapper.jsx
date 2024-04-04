import React from 'react'
import styled from 'styled-components';

const Wrapper = () => {
  return (
    <Container>

    </Container>
  )
}

export default Wrapper

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  color:#fff;
  background: rgba(11, 0, 0, 0.853);
  z-index: 99999;
`;