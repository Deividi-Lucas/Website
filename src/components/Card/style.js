import styled from 'styled-components'

export const Card = styled.div`
  height: min-content;

  display: flex;
  flex-direction: column;
  padding: 2.2rem;
  flex-wrap: wrap;
  background: rgba(0, 0, 0);
  margin: 1rem;
  border-radius: 4rem 1rem;

  a {
    gap: 1rem;
    display: flex;
    flex-direction: column;
    text-decoration: none;
  }

  img {
    height: 6rem;
    transition: 100ms;

    &:hover {
      transform: scale(120%);
    }
  }

  span {
    color: white;
    text-align: center;

    &:hover {
      text-decoration: underline;
    }
  }
`
