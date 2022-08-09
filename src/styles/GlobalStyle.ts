import styled, { createGlobalStyle } from 'styled-components'

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
`
