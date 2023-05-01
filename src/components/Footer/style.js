import styled from 'styled-components'
import { color } from '../../utils/color'

export const Main = styled.footer`
  background-color: ${color.black};
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  color: ${color.white};

  img:hover {
    transition: 200ms;
    transform: scale(120%);
  }

  h5:hover {
    color: ${color.orange};
    cursor: pointer;
    transition: 100ms;
  }

  @media (max-width: 600px) {
    display: flex;
    flex-direction: column-reverse;
  }
`
