import styled from "styled-components";

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 3rem 0;
`;

const Title = styled.h1`
  font-size: 2rem;
  font-weight: bold;
`;

const Caption = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export { Container, Content, Title, Caption };
