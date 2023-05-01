import styled from 'styled-components'

export const About = styled.div`
  display: flex;
  flex-direction: column;
  margin: 2rem;
  background-color: rgb(0, 0, 0, 0.8);
  padding: 1rem;
  border-radius: 1rem 0;

  h2 {
    text-align: start;
  }
  p {
    text-align: justify;
  }
`

export const Main = styled.div`
  display: flex;
  margin: 2rem;
  justify-content: center;
  align-items: center;
  @media (max-width: 600px) {
    display: flex;
    flex-direction: column;
  }
`

export const Contact = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5rem;
  @media (max-width: 600px) {
    display: flex;
    flex-direction: column;
  }
`
