import { createGlobalStyle } from 'styled-components'

import { COLOR } from './theme'

export const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap');

* {
  margin: 0;
  padding: 0;
  border: 0;
  outline: 0;
  box-sizing: border-box;
}

html,
body {
  height: 100%;
  font-family: 'Poppins', sans-serif;
  line-height: 1;
}

a {
  text-decoration: none;
}

#root {
  height: 100%;
}

::-webkit-scrollbar {
  width: 5px;
}

::-webkit-scrollbar-track {
  box-shadow: inset 0 0 3px grey;
  border-radius: 5px;
}

::-webkit-scrollbar-thumb {
  background: ${COLOR.LIGHT_GREY};
  border: 1px solid ${COLOR.LIGHT_GREY};
  border-radius: 5px;
}

`
