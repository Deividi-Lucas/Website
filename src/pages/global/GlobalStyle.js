import { createGlobalStyle } from 'styled-components'
import fundo from '../../images/plano_de_fundo_main.jpg'

export const GlobalStyle = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  backdrop-filter: blur(0.5rem);

}

body {
  height: 100vh;
  background-image: url(${fundo});
  background-size: 100% 100%;
  overflow-y: scroll;
  
}

`
