import styled, { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    border: none;
    outline: none;
    /* font-family: 'Roboto', sans-serif; */
    font-family: 'Lexend Deca', sans-serif;
    text-decoration: none;
    list-style: none;
    flex-shrink: 0;
    /* user-select: none; */
    transition: .2s;
    letter-spacing: 0.5px;
  }

  a:hover {
    text-decoration: none;
  }

  // ------ SCROLL BAR

  /* ::-webkit-scrollbar {
    width: 5px;
    height: 5px;
    z-index: 1000;
  }

  ::-webkit-scrollbar-track {
    background-color: gray;
    border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb {
    background: blue;
    border-radius: 10px;
  } */
`

export default GlobalStyle

// --------------------------------- COMPONENTES

// export const Page = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   position: relative;
//   width: 100%;
//   max-width: 1200px;
//   height: 100vh;
//   padding: 20px 20px 20px 40px;

//   /* border: 2px solid orangered; */
// `