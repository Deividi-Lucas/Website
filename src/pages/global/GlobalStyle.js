import { createGlobalStyle } from 'styled-components'
import fundo from '../../images/plano_de_fundo_main.jpg'

export const GlobalStyle = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;

}

body {
  height: 100%;
  background-image: url(${fundo});
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-clip: border-box;
  background-color  :black ;
  backdrop-filter: blur(0.5rem);
}

`
