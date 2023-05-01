import styled from 'styled-components'
import { color } from '../../utils/color'

export const CardContact = styled.div`
  padding: 1rem;
  background-color: ${color.black};
  border-radius: 2rem;

  a {
    gap: 1rem;
    display: flex;
    flex-direction: column;
    color: ${color.white};
    text-decoration: none;
    & span:hover {
      color: ${color.orange};
    }
  }
  img {
    height: 5rem;
    transition: 200ms;
    &:hover {
      transform: scale(120%);
    }
  }
`
